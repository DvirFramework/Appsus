
export function NoteTodos({ note }) {

    return (
        <article  className='note-todos' style={{ backgroundColor: note.style.backgroundColor }}>
          <h3 className="h3">{note.type}</h3>
          <h3 className="h3">{note.info.title}</h3>
          <ul className="ul">
            {note.info.todos.map((todo, index) => (
              <li className="li" key={index}>
                {todo.doneAt ? <s>{todo.txt}</s> : todo.txt}
              </li>
            ))}
          </ul>
        </article >
      )
}