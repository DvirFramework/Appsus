import { MailAdd } from "../cmps/MailAdd.jsx"
import { MailFilter } from "../cmps/MailFilter.jsx"
import { MailFolder } from "../cmps/MailFolder.jsx"
import { MailList } from "../cmps/MailList.jsx"
import { mailService } from "../services/mail.service.js"
import { showSuccessMsg } from "../../../services/event-bus.service.js"
const { useState, useEffect } = React
const { Link, useSearchParams } = ReactRouterDOM

export function MailIndex() {
  const [mails, setMails] = useState(null)
  const [trashMails, setTrashMails] = useState([])
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

  function onRemoveMail(mailId) {
    mailService
      .remove(mailId)
      .then(() => {
        setMails((prevMails) => {
          //   showSuccessMsg("mail succssefuly removed!")
          // console.log("prevBooks:", prevBooks)
          return prevMails.filter((mail) => mail.id !== mailId)
        })
      })
      .catch((err) => console.log("err:", err))
  }

  function onMoveMailtoTrash(mail) {
    mail.isTrash = true
    onUpdateMail(mail)
  }
  function onMarkMailAsRead(mail) {
    mail.isRead = true

    onUpdateMail(mail)
  }
  function onMarkMailAsUnRead(mail) {
    mail.isRead = false
    onUpdateMail(mail)
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
      <MailFolder
        onSetFilter={onSetFilter}
        filterBy={filterBy}
        mails={mails}
        trashMails={trashMails}
      />
      <MailList
        mails={mails}
        onUpdateMail={onUpdateMail}
        onRemoveMail={onRemoveMail}
        onMoveMailtoTrash={onMoveMailtoTrash}
        onMarkMailAsRead={onMarkMailAsRead}
        onMarkMailAsUnRead={onMarkMailAsUnRead}
      />
    </section>
  )
}
