
export function NoteVideo({ note }) {
    return (
        <article className="note-video">
            <h4>Note Type: {note.type}</h4>
            <h4>Note Title: {note.info.title}</h4>
            <video src={note.info.url} />
        </article>
    )
}