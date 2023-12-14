
export function NoteTxt(props) {
  const { note, backgroundColor } = props
  return (
    <article className="note-txt"style={{ backgroundColor }}>
            <h4>Title: {note.info.title}</h4>
            <h4>Note Text: {note.info.txt}</h4>
        </article>
  )
}