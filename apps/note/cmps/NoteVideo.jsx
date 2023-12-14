
export function NoteVideo(props) {
    const { note, backgroundColor } = props
    return (
        <article className="note-video" style={{ backgroundColor }}>
            <h4>Type: {note.type}</h4>
            <h4>Title: {note.info.title}</h4>
            <video src={note.info.url} />
        </article>
    )
}