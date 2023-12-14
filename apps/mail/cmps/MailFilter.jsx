const { useState, useEffect } = React

export function MailFilter({ filterBy, onSetFilter }) {
  const [filterByToEdit, setFilterByToEdit] = useState({
    query: filterBy.query || "" // Combine subject and body into a single property
  })

  useEffect(() => {
    onSetFilter(filterByToEdit)
  }, [filterByToEdit, onSetFilter])

  function onSetFilterBy(ev) {
    ev.preventDefault()
    onSetFilter(filterByToEdit)
  }

  function handleChange({ target }) {
    const value = target.value

    // Break pointer with the spread operator
    setFilterByToEdit((prevFilter) => ({ ...prevFilter, query: value }))
  }

  const { query } = filterByToEdit
  return (
    <section className="mail-filter">
      <span className="search-icon">🔎</span>
      <div className="mail-filterby">
        <form onSubmit={onSetFilterBy}>
          <label htmlFor="query"></label>
          <input
            placeholder="Search"
            value={query}
            onChange={handleChange}
            type="text"
            id="query"
            name="query"
          />
        </form>
      </div>
    </section>
  )
}
