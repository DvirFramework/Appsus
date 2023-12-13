
export function NoteTxt({ note }) {
    

  return (
    <article className="note-txt">
            <h2>Note Type: {note.type}</h2>
            <h4>Note Text {note.info.txt}</h4>
        </article>
  )
}