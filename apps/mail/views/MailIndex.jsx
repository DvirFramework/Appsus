import { MailAdd } from "../cmps/MailAdd.jsx"
import { MailFilter } from "../cmps/MailFilter.jsx"
import { MailFolder } from "../cmps/MailFolder.jsx"
import { MailList } from "../cmps/MailList.jsx"
import { mailService } from "../services/mail.service.js"
const { useState, useEffect } = React
const { Link, useSearchParams } = ReactRouterDOM

export function MailIndex() {
  const [mails, setMails] = useState(null)
  //   const [searchParams, setSearchParams] = useSearchParams()
  //   const [filterBy, setFilterBy] = useState(
  //     mailService.getFilterFromQueryString(searchParams)
  //   )

  useEffect(() => {
    loadMails()
    // setSearchParams(filterBy)
    return () => {
      console.log("Bye Bye")
    }
  }, [])

  function loadMails() {
    console.log("load mails")
    mailService
      //   .query(filterBy)
      .query()
      .then((mails) => setMails(mails))
      .catch((err) => console.log("err:", err))
  }

  function onRemoveMail(mailId) {
    mailService
      .remove(mailId)
      .then(() => {
        // const newCars = mails.filter(car => car.id !== carId)
        // setMails(newCars)
        setMails((prevMails) => {
          return prevMails.filter((mail) => mail.id !== mailId)
        })
        //   showSuccessMsg(`Mail successfully removed! ${mailId}`)
      })
      .catch((err) => console.log("err:", err))
  }

  //   function onSetFilter(filterBy) {
  //     // setFilterBy(filterBy)
  //     setFilterBy((prevFilter) => ({ ...prevFilter, ...filterBy }))
  //   }

  //   const { txt, minSpeed, maxPrice } = filterBy

  if (!mails) return <div>Loading...</div>
  return (
    <section className="mail-index main-mail-layout ">
      <MailAdd />
      <MailFilter />
      <MailFolder />
      <MailList mails={mails} onRemoveCar={onRemoveMail} />
    </section>
  )
}
