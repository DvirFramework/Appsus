
export function NoteTxt({ note }) {
    

  return (
    <article className="note-txt">
            <h4>Note Type: {note.type}</h4>
            <h4>Note Text {note.info.txt}</h4>
        </article>
  )
}