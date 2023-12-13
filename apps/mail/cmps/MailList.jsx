import { MailPreview } from "./MailPreview.jsx"
const { Link } = ReactRouterDOM
export function MailList({ mails }) {
  return (
    <ul>
      {mails.map((mail) => (
        <li key={mail.id}>
          <MailPreview mail={mail} />
        </li>
      ))}
    </ul>
  )
}
