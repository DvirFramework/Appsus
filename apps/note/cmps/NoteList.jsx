import { NotePreview } from './NotePerview.jsx'

const { Link } = ReactRouterDOM

export function NoteList({ notes, onRemoveNote }) {
  return (
    <ul className="note-list">
      {notes.map((note) => (
        <li key={note.id}>
          <NotePreview note={note} />
          <section>
          <button onClick={() => onRemoveNote(note.id)}>Remove Note</button>
          </section>
        </li>
      ))}
    </ul>
  )

}
