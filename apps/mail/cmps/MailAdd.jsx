const { useState, useEffect } = React
export function MailAdd() {
  let [isModalShow, setModalShow] = useState(false)
  const dynClass = isModalShow ? "" : "hidden"

  function onCompose() {
    console.log(isModalShow)
    setModalShow((isModalShow = !isModalShow))
  }
  return (
    <section className="mail-add">
      <button onClick={onCompose}>Compose</button>
      <div className={dynClass + " newMail-modal"}>
        <h1>New Message</h1>
        <form action="">
          <label htmlFor="fromMail"></label>
          <input type="email" />
        </form>
      </div>
    </section>
  )
}
