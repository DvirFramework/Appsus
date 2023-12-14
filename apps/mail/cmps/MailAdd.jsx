import { mailService } from "../services/mail.service.js"

const { useNavigate, useParams } = ReactRouterDOM
const { useState, useEffect } = React

export function MailAdd() {
  const [mailToEdit, setMailToEdit] = useState(mailService.getEmptyMail())
  let [isModalShow, setModalShow] = useState(false)
  const dynClass = isModalShow ? "" : "hidden"
  const navigate = useNavigate()

  function handleChange({ target }) {
    const field = target.name
    let value = target.value
    switch (target.type) {
      case "number":
      case "range":
        value = +value
        break

      case "checkbox":
        value = target.checked
        break

      default:
        break
    }

    setMailToEdit((prevMail) => ({
      ...prevMail,
      [field]: value,
      from: "user@appsus.com"
    }))
  }

  function onCompose() {
    setModalShow((isModalShow = !isModalShow))
  }

  function closeCompose() {
    setModalShow((isModalShow = !isModalShow))
  }

  function onSendMail(ev) {
    ev.preventDefault()
    mailService.getEmptyMail()
    mailService
      .save(mailToEdit)
      .then(() => setModalShow((isModalShow = !isModalShow)))
      .catch((err) => console.log("err:", err))
  }

  const { to, subject, body } = mailToEdit
  return (
    <section className="mail-add">
      <button onClick={onCompose}>Compose</button>
      <div className={dynClass + " newMail-modal"}>
        <h1>New Email 📧</h1>
        <form onSubmit={onSendMail} className="newMail-form">
          <p>From : your mail</p>

          <label htmlFor="to">To</label>
          <input type="email" id="to" name="to" onChange={handleChange} />

          <label htmlFor="subject">Subject</label>
          <input
            value={subject}
            type="text"
            id="subject"
            name="subject"
            onChange={handleChange}
          />

          <label htmlFor="body"></label>
          <input
            value={body}
            type="text"
            id="body"
            name="body"
            onChange={handleChange}
          />

          <button className="btn-sendMail">Send</button>
        </form>
        <button className="btn-closeMail" onClick={closeCompose}>
          x
        </button>
      </div>
    </section>
  )
}
