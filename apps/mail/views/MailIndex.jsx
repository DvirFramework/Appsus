import { MailAdd } from "../cmps/MailAdd.jsx"
import { MailFilter } from "../cmps/MailFilter.jsx"
import { MailFolder } from "../cmps/MailFolder.jsx"
import { MailList } from "../cmps/MailList.jsx"
import { mailService } from "../services/mail.service.js"
const { useState, useEffect } = React
const { Link, useSearchParams } = ReactRouterDOM

export function MailIndex() {
  const [mails, setMails] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams()

  const loggedInUser = mailService.getLoggedInUser()
  const [filterBy, setFilterBy] = useState({
    to: loggedInUser.email,
    subject: "",
    body: ""
  })

  useEffect(() => {
    loadMails()
    // setSearchParams(filterBy)
    return () => {
      //   console.log("Bye Bye")
    }
  }, [filterBy])

  function loadMails() {
    console.log("load mails")
    mailService
      .query(filterBy)
      //   .query()
      .then((mails) => setMails(mails))
      .catch((err) => console.log("err:", err))
  }

  function onUpdateMail(mail) {
    mailService.save(mail).then((mail) => {
      setMails((prevMails) =>
        prevMails.map((m) => (m.id === mail.id ? mail : m))
      )
    })
  }

  function onSetFilter(newFilterBy) {
    // setFilterBy(filterBy)
    // setFilterBy((prevFilter) => ({ ...prevFilter, ...filterBy }))
    setFilterBy(newFilterBy)
  }

  if (!mails) return <div>Loading...</div>
  return (
    <section className="mail-index main-mail-layout ">
      <MailAdd />
      <MailFilter onSetFilter={onSetFilter} filterBy={filterBy} />
      <MailFolder />
      <MailList mails={mails} onUpdateMail={onUpdateMail} />
    </section>
  )
}
