import { MailDetail } from "./MailDetail.jsx"
const { useState, useEffect } = React
const { useRef } = React
export function MailPreview({
  mail,
  onUpdateMail,
  onRemoveMail,
  onMoveMailtoTrash,
  onMarkMailAsRead,
  onMarkMailAsUnRead,
  showMailDetail,
  passMailDetail
}) {
  const [isHovered, setIsHovered] = useState(false)
  const sentDate = new Date(mail.sentAt)
  const currentDate = new Date()

  const isToday =
    sentDate.getDate() === currentDate.getDate() &&
    sentDate.getMonth() === currentDate.getMonth() &&
    sentDate.getFullYear() === currentDate.getFullYear()

  const formattedDate = isToday
    ? new Date(mail.sentAt).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric"
      })
    : new Date(mail.sentAt).toLocaleString("en-US", {
        month: "long",
        day: "numeric"
      })

  function onStarMail() {
    const newMail = { ...mail, isStar: !mail.isStar }
    onUpdateMail(newMail)
  }

  function handleMouseEnter() {
    setIsHovered(true)
  }

  function handleMouseLeave() {
    setIsHovered(false)
  }

  function onToggleReadStatus() {
    const updatedMail = { ...mail, isRead: !mail.isRead }
    if (mail.isRead) {
      onMarkMailAsUnRead(updatedMail)
    } else {
      onMarkMailAsRead(updatedMail)
    }
  }

  function removeToTrash() {
    mail.isTrash === true
  }

  // if (mail.isTrash) return null
  return (
    <article
      className={
        (mail.isRead ? "mail-read-bg" : "") +
        (mail.isTrash ? "trashMail" : "") +
        " mail-preview mail-preview-layout"
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="star-mail flex align-center">
        <button onClick={onStarMail}>
          {" "}
          {mail.isStar ? (
            <i className="fa-solid fa-star"></i>
          ) : (
            <i className="fa-regular fa-star"></i>
          )}
        </button>
      </div>

      <div
        className="from-mail flex align-center"
        onClick={() => {
          passMailDetail(mail)
          showMailDetail(mail)
        }}
      >
        <h1>{mail.from}</h1>
      </div>

      <div
        className="mail-body flex align-center"
        onClick={() => showMailDetail(mail)}
      >
        <div className="mail-subject">
          <h1>{mail.subject} - </h1>
        </div>
        <div className="mail-txt">
          <p>{mail.body}</p>
        </div>
      </div>

      {isHovered ? (
        <div className="mail-actions">
          <button
            className="dltMail-btn"
            title="Move to Trash"
            onClick={() => {
              removeToTrash()
              onMoveMailtoTrash(mail)
            }}
          >
            🗑
          </button>
          <button
            className="readMail-btn"
            title={mail.isRead ? "Mark as unread" : "Mark as read"}
            onClick={onToggleReadStatus}
          >
            {mail.isRead ? "📧" : "📩"}
          </button>
        </div>
      ) : (
        <div className="date-mail flex align-center">
          <h3>{formattedDate}</h3>
        </div>
      )}
    </article>
  )
}
