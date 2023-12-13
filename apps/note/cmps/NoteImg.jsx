
export function NoteImg({ note }) {
    return (
        <article className="note-img">
            <h4>Note Type: {note.type}</h4>
            <h4>Note Title: {note.info.title}</h4>
            <img src={note.info.url} alt="" />
        </article>
    )

}