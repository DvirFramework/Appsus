
export function NoteImg(props) {
    const { note, backgroundColor } = props
    return (
        <article className="note-img" style={{ backgroundColor }}>
            <h4 className="h4">Note Type: {note.type}</h4>
            <h4 className="h4">Note Title: {note.info.title}</h4>
            <img className="img" src={note.info.url} alt="" />
        </article>
    )

}