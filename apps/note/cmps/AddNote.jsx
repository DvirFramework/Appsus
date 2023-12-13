import { noteService } from "../services/note.service.js"
const { useState, useEffect } = React

export function AddNote() {

    return (
        <section className="add-note">
            <h2>Add Note</h2>
            <form >
                <label htmlFor="txt">Title: </label>
                <input type="text" id="text" name="text" />
                <label htmlFor="txt">Take a note: </label>
                <input type="text" id="txt" name="txt" />
                <button>Submit</button>
                <button>Add image</button>
                <button>Add video</button>
                <button>Change color</button>
            </form>
        </section>
    )
}

