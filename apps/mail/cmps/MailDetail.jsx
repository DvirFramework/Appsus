export function MailDetail({ hideMailDetail, passMailDetail, selectedMail }) {
  const timestamp = selectedMail.sentAt
  const date = new Date(timestamp)
  const dayOfMonth = date.getDate()
  const monthString = new Intl.DateTimeFormat("en-US", {
    month: "long"
  }).format(date)

  return (
    <section className="mail-detail">
      <div className="mail-detail-box">
        <h1>From : {selectedMail.from}</h1>
        <h2>Sent at : {monthString + " " + dayOfMonth}</h2>
        <p>{selectedMail.body}</p>
        <img className="mailMan" src="../assets/img/mail.png" alt="" />
        <button className="closeMail-btn" onClick={hideMailDetail}>
          X
        </button>
      </div>
    </section>
  )
}
