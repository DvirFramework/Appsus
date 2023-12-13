export function MailPreview({ mail }) {
  return (
    <article className="mail-preview">
      <h1>Subject: {mail.subject}</h1>
      <p>
        Text's Mail:
        {mail.body}
        <span>sent At: {new Date(mail.sentAt).toLocaleString()}</span>
      </p>
    </article>
  )
}
