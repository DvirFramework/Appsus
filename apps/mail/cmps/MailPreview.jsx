const { useState, useEffect } = React
const { useRef } = React
export function MailPreview({ mail, onUpdateMail }) {
  const styles = {
    color: "#3498db"
  }

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

  return (
    <article
      className={
        (mail.isRead ? "mail-read-bg" : "") +
        " mail-preview mail-preview-layout"
      }
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
        {/* <button onClick={onStarMail}>
          <i className="fa-regular fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </button> */}
      </div>

      <div className="from-mail flex align-center">
        <h1>{mail.from}</h1>
      </div>

      <div className="mail-body flex align-center">
        <div className="mail-subject">
          <h1>{mail.subject} - </h1>
        </div>
        <div className="mail-txt">
          <p>{mail.body}</p>
        </div>
      </div>

      <div className="date-mail flex align-center">
        {/* <h3> {new Date(mail.sentAt).toLocaleString("en-US", options)}</h3> */}
        <h3>{formattedDate}</h3>
      </div>
    </article>
  )
}
