

export function NoteFilter({ onSetFilter, filterBy }) {
    const { type } = filterBy

    function handleChange(event){
        const { name, value } = event.target
        onSetFilter({ [name]: value })
    }

    return (
        <div className="note-filter">
            <label className="label" htmlFor="type">Filter by Type:</label>
            <select className="select" id="type" name="type" value={type} onChange={handleChange}>
                <option value="">All Types</option>
                <option value="NoteTxt">Text Note</option>
                <option value="NoteImg">Image Note</option>
                <option value="NoteVideo">Video Note</option>
                <option value="NoteTodos">Todos Note</option>
            </select>
        </div>
    )

    
}