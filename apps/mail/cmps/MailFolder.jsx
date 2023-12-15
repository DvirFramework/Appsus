import { mailService } from "../services/mail.service.js"
const { useState, useEffect } = React
export function MailFolder({ filterBy, onSetFilter, mails }) {
  const starrdMails = mails.filter((mail) => mail.isStar)
  const trashMails = mails.filter((mail) => mail.isTrash)
  const [loggedInUserMails, setLoggedInUserMails] = useState([])

  mailService.getMailsFromLoggedInUser().then((userMails) => {
    setLoggedInUserMails(userMails)
  })

  return (
    <section className="mail-folder">
      <div className="mail-folderBy">
        <div className="box">
          <div className="symbol">
            <i className="fa-solid fa-inbox"></i> Inbox
          </div>
          <div className="count">{mails.length}</div>
        </div>

        <div className="box">
          <div className="symbol">
            <i className="fa-regular fa-star"></i> Starred
          </div>
          <div className="count">{starrdMails.length}</div>
        </div>

        <div className="box">
          <div className="symbol">
            <i className="fa-regular fa-paper-plane"></i> Sent
          </div>
          <div className="count">{loggedInUserMails.length}</div>
        </div>

        <div className="box">
          <div className="symbol">
            <i className="fa-solid fa-trash"></i> Trash
          </div>
          <div className="count">{trashMails.length}</div>
        </div>

        <div className="box">
          <div className="symbol">
            <i className="fa-regular fa-file"></i> Draft
          </div>
          <div className="count">4</div>
        </div>
      </div>
    </section>
  )
}
