
export function NoteVideo({ note }) {
    return (
        <article className="note-video">
            <h2>Note Type: {note.type}</h2>
            <h4>Note Title: {note.info.title}</h4>
            <video src={note.info.url} />
        </article>
    )
}