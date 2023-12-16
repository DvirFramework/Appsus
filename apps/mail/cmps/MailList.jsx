import { MailDetail } from "./MailDetail.jsx"
import { MailPreview } from "./MailPreview.jsx"
const { useState, useEffect } = React
const { Link } = ReactRouterDOM
export function MailList({
  mails,
  onUpdateMail,
  onRemoveMail,
  onMoveMailtoTrash,
  onMarkMailAsRead,
  onMarkMailAsUnRead
}) {
  const ulProps = {
    className: "mail-list , mail-list-main-layout"
  }

  const detailProp = {
    className: "mail-list , mail-list-main-layout"
  }

  const [isMailClick, setIsMailClick] = useState(false)
  const [selectedMail, setSelectedMail] = useState(null)

  function showMailDetail(mail) {
    setSelectedMail(mail)
    setIsMailClick(true)
  }

  function hideMailDetail() {
    setSelectedMail(null)
    setIsMailClick(false)
  }

  function passMailDetail(mail) {
    console.log("mail:", mail)
    return mail
  }

  if (isMailClick)
    return (
      <section {...detailProp}>
        <MailDetail
          hideMailDetail={hideMailDetail}
          passMailDetail={passMailDetail}
          selectedMail={selectedMail}
        />
        {/* <button onClick={hideMailDetail}>x</button> */}
      </section>
    )
  return (
    <ul {...ulProps}>
      {mails.map((mail) => (
        <li key={mail.id}>
          <MailPreview
            mail={mail}
            onUpdateMail={onUpdateMail}
            onRemoveMail={onRemoveMail}
            onMoveMailtoTrash={onMoveMailtoTrash}
            onMarkMailAsRead={onMarkMailAsRead}
            onMarkMailAsUnRead={onMarkMailAsUnRead}
            showMailDetail={showMailDetail}
            passMailDetail={passMailDetail}
          />
        </li>
      ))}
    </ul>
  )
}
