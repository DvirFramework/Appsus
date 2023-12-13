
export function NoteTodos({ note }) {

    return (
        <article  className='note-todos' style={{ backgroundColor: note.style.backgroundColor }}>
          <h3>{note.type}</h3>
          <h3>{note.info.title}</h3>
          <ul>
            {note.info.todos.map((todo, index) => (
              <li key={index}>
                {todo.doneAt ? <s>{todo.txt}</s> : todo.txt}
              </li>
            ))}
          </ul>
        </article >
      )
}