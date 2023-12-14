import { noteService } from "../services/note.service.js"
const { useState, useEffect } = React

export function AddNote({ onAddNote }) {
    const [type, setNoteType] = useState('NoteTxt')
    const [noteToAdd, setNoteToAdd] = useState(noteService.getEmptyNote(type))
    const [imageFile, setImageFile] = useState(null)
    const [videoFile, setVideoFile] = useState(null)
    const [selectedColor, setSelectedColor] = useState('#fff')
    const colorOptions = ['#fff', '#ff9999', '#99ff99', '#9999ff', '#ffff99']
    // const [todos, setTodos] = useState([])
    // const [newTodo, setNewTodo] = useState('')

    console.log('noteToAdd:', noteToAdd)

    function onSubmit(ev) {
        ev.preventDefault()
        noteToAdd.type = type
        noteToAdd.style.backgroundColor = selectedColor
        onAddNote(noteToAdd)
    }

    function handleImageChange(ev) {
        const file = ev.target.files[0]
        setImageFile(file)
    }

    function handleVideoChange(ev) {
        const file = ev.target.files[0]
        setVideoFile(file)
    }

    function handleChangeColor(color){
        setSelectedColor(color)
    }

    // function handleAddTodo() {
    //     if (newTodo.trim() !== '') {
    //         setTodos((prevTodos) => [...prevTodos, newTodo.trim()])
    //         setNewTodo('')
    //     }
    // }



    function handleChange({ target }) {
        const field = target.name
        let value = target.value

        switch (target.type) {
            case 'number':
            case 'range':
                value = +value
                break;

            case 'checkbox':
                value = target.checked
                break

            default:
                break;
        }
        setNoteToAdd(prevNote => ({ ...prevNote, info: { ...prevNote.info, [field]: value } }))
    }

    switch (type) {
        case 'NoteTxt':
            return (
                <section className="add-note">
                    <h2>Add Note</h2>
                    <form onSubmit={onSubmit}>
                        <label htmlFor="txt">Title: </label>
                        <input onChange={handleChange} type="text" id="text" name="title" value={noteToAdd.info.title} />
                        <label htmlFor="txt">Take a note: </label>
                        <input onChange={handleChange} type="text" id="txt" name="txt" value={noteToAdd.info.txt} />
                        <button>Submit</button>
                    </form>

                    <button onClick={() => setNoteType('NoteTxt')}>Add Txt</button>
                    <button onClick={() => setNoteType('NoteImg')}>Add image</button>
                    <button onClick={() => setNoteType('NoteVideo')}>Add video</button>
                    {/* <button onClick={() => setNoteType('NoteTodos')}>Add ToDo</button> */}
                    {/* <button type="button" onClick={handleChangeColor}>Change Color</button> */}
                    <label htmlFor="color">Select Color:</label>
                    <select id="color" name="color" value={selectedColor} onChange={(ev) => handleChangeColor(ev.target.value)}>
                    <option value="#fff">White</option>
                    <option value="#ff0000">Red</option>
                    <option value="#00ff00">Green</option>
                    <option value="#0000ff">Blue</option></select>
                    </section>
            )
        case 'NoteImg':
            return (
                <section className="add-note">
                    <h2>Add Note</h2>
                    <form onSubmit={onSubmit}>
                        <label htmlFor="txt">Title: </label>
                        <input onChange={handleChange} type="text" id="text" name="title" value={noteToAdd.info.title} />
                        <label htmlFor="txt">Take a note: </label>
                        <input onChange={handleChange} type="text" id="txt" name="txt" value={noteToAdd.info.txt} />
                        <button>Submit</button>
                    </form>

                    <button onClick={() => setNoteType('NoteTxt')}>Add Txt</button>
                    <button onClick={() => setNoteType('NoteImg')}>Add image</button>
                    <button onClick={() => setNoteType('NoteVideo')}>Add video</button>
                    {/* <button onClick={() => setNoteType('NoteTodos')}>Add ToDo</button> */}
                    <label htmlFor="image">Add Image: </label>
                    <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} />
                    <label htmlFor="color">Select Color:</label>
                    <select id="color" name="color" value={selectedColor} onChange={(ev) => handleChangeColor(ev.target.value)}>
                    <option value="#fff">White</option>
                    <option value="#ff0000">Red</option>
                    <option value="#00ff00">Green</option>
                    <option value="#0000ff">Blue</option></select>
                   </section>
            )
        case 'NoteVideo':
            return (
                <section className="add-note">
                    <h2>Add Note</h2>
                    <form onSubmit={onSubmit}>
                        <label htmlFor="txt">Title: </label>
                        <input onChange={handleChange} type="text" id="text" name="title" value={noteToAdd.info.title} />
                        <label htmlFor="txt">Take a note: </label>
                        <input onChange={handleChange} type="text" id="txt" name="txt" value={noteToAdd.info.txt} />
                        <label htmlFor="video">Add Video: </label>
                        <input type="file" id="video" name="video" accept="video/*" onChange={handleVideoChange} />
                        <button>Submit</button>
                    </form>

                    <button onClick={() => setNoteType('NoteTxt')}>Add Txt</button>
                    <button onClick={() => setNoteType('NoteImg')}>Add image</button>
                    <button onClick={() => setNoteType('NoteVideo')}>Add video</button>
                    {/* <button onClick={() => setNoteType('NoteTodos')}>Add ToDo</button> */}
                    {/* <button type="button" onClick={handleChangeColor}>Change Color</button> */}
                    <label htmlFor="color">Select Color:</label>
                    <select id="color" name="color" value={selectedColor} onChange={(ev) => handleChangeColor(ev.target.value)}>
                    <option value="#fff">White</option>
                    <option value="#ff0000">Red</option>
                    <option value="#00ff00">Green</option>
                    <option value="#0000ff">Blue</option></select>
                </section>
            )
        // case 'NoteTodos':
        //     return (
        //         <section className="add-note">
        //             <h2>Add Note</h2>
        //             <form onSubmit={onSubmit}>
        //                 <label htmlFor="txt">Title: </label>
        //                 <input onChange={handleChange} type="text" id="text" name="title" value={noteToAdd.info.title} />
        //                 <label htmlFor="txt">Take a note: </label>
        //                 <input onChange={handleChange} type="text" id="txt" name="txt" value={noteToAdd.info.txt} />
        //                 <label htmlFor="todos">Add Todos: </label>
        //                 <ul>{todos.map((todo, index) => (
        //                     <li key={index}>{todo}</li>))}
        //                 </ul>
        //                 <input type="text" id="newTodo" name="newTodo" value={newTodo} onChange={(ev) => setNewTodo(ev.target.value)} />
        //                 <button>Submit</button>
        //             </form>

        //             <button onClick={() => setNoteType('NoteTxt')}>Add Txt</button>
        //             <button onClick={() => setNoteType('NoteImg')}>Add image</button>
        //             <button onClick={() => setNoteType('NoteVideo')}>Add video</button>
        //             <button onClick={() => setNoteType('NoteTodos')}>Add ToDo</button>
        //             <button type="button" onClick={handleChangeColor}>Change Color</button>
        //         </section>
        //     )
    }

    // return (
    //     <section className="add-note">
    //         <h2>Add Note</h2>
    //         <form onSubmit={onSubmit}>
    //             <label htmlFor="txt">Title: </label>
    //             <input onChange={handleChange} type="text" id="text" name="title" value={noteToAdd.info.title} />
    //             <label htmlFor="txt">Take a note: </label>
    //             <input onChange={handleChange} type="text" id="txt" name="txt" value={noteToAdd.info.txt} />
    //             <button>Submit</button>
    //         </form>

    //         <button onClick={() => setNoteType('NoteTxt')}>Add Txt</button>
    //         <button onClick={() => setNoteType('NoteImg')}>Add image</button>
    //         <button onClick={() => setNoteType('NoteVideo')}>Add video</button>
    //         <button onClick={() => setNoteType('NoteTodos')}>Add ToDo</button>
    //         <button >Change color</button>
    //     </section>
    // )
}

