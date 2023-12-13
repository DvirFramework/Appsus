export function MailPreview({ mail }) {
  const options = { hour: "numeric", minute: "numeric" }
  return (
    <article className="mail-preview mail-preview-layout">
      <div className="signal-mail flex align-center">
        <button>⭐</button>
      </div>

      <div className="from-mail flex align-center">
        <h1>{mail.from}</h1>
      </div>

      <div className="mail-body flex align-center">
        <div className="mail-subject">
          <h1>{mail.subject}-</h1>
        </div>
        <div className="mail-txt">
          <p>{mail.body}</p>
        </div>
      </div>

      <div className="date-mail flex align-center">
        <h3> {new Date(mail.sentAt).toLocaleString(undefined, options)}</h3>
      </div>
    </article>
  )
}
