import { mailService } from "../services/mail.service.js"
const { useState, useEffect } = React

export function MailFolder({ filterBy, onSetFilter, mails }) {
  const starrdMails = mails.filter((mail) => mail.isStar)
  const trashMails = mails.filter((mail) => mail.isTrash)
  const [loggedInUserMails, setLoggedInUserMails] = useState([])
  const [filterByToEdit, setFilterByToEdit] = useState({
    query: filterBy.query || "", // Combine subject and body into a single property
    isStar: filterBy.isStar || false, // Set initial checkbox state
    isTrash: filterBy.isTrash || false // Set initial trash state
  })

  useEffect(() => {
    onSetFilter(filterByToEdit)
  }, [filterByToEdit, onSetFilter])

  mailService.getMailsFromLoggedInUser().then((userMails) => {
    setLoggedInUserMails(userMails)
    // console.log(userMails)
  })

  function handleChange(name) {
    setFilterByToEdit((prevFilter) => ({
      ...prevFilter,
      [name]: !prevFilter[name] // Toggle the checkbox value
    }))
  }

  function handleSubmit(ev) {
    ev.preventDefault()
    onSetFilter(filterByToEdit)
  }

  function handleInboxClick() {
    onSetFilter({
      query: "",
      isStar: false,
      isTrash: false
    })
    setFilterByToEdit({
      query: "",
      isStar: false,
      isTrash: false
    })
  }

  const { isStar, isTrash } = filterByToEdit
  return (
    <section className="mail-folder">
      <div className="mail-folderBy">
        <div className="box" onClick={handleInboxClick}>
          <div className="symbol">
            <i className="fa-solid fa-inbox"></i> Inbox
          </div>
          <div className="count">{mails.length}</div>
        </div>

        <div className="box" onClick={() => handleChange("isStar")}>
          <form onSubmit={handleSubmit}>
            <input
              type="checkbox"
              name="isStar"
              id="isStar"
              checked={isStar}
              onChange={() => {}}
              style={{ display: "none" }}
            />
          </form>
          <div className={`symbol ${isStar ? "checked" : ""}`}>
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

        <div className="box" onClick={() => handleChange("isTrash")}>
          <form onSubmit={handleSubmit}>
            <input
              type="checkbox"
              name="isTrash"
              id="isTrash"
              checked={isTrash}
              onChange={() => {}}
              style={{ display: "none" }}
            />
          </form>
          <div className={`symbol ${isTrash ? "checked" : ""}`}>
            <i className="fa-solid fa-trash"></i> Trash
          </div>
          <div className="count">{trashMails.length}</div>
        </div>

        {/* <div className="box">
          <div className="symbol">
            <i className="fa-regular fa-file"></i> Draft
          </div>
          <div className="count">4</div>
        </div> */}
      </div>
    </section>
  )
}
