import { NotePreview } from './NotePerview.jsx'

const { Link } = ReactRouterDOM

export function NoteList({ notes, onRemoveNote }) {
  return (
    <ul className="note-list">
      {notes.map((note) => (
        <li className="note-preview-wrapper" key={note.id}>
          <NotePreview note={note} />
          <button onClick={() => onRemoveNote(note.id)}>Remove Note</button>
        </li>
      ))}
    </ul>
  )

}
