
const { Link, useSearchParams } = ReactRouterDOM

import { AddNote } from "../cmps/AddNote.jsx"
import { NoteList } from "../cmps/NoteList.jsx"
import { NoteFilter } from "../cmps/NoteFilter.jsx"
import { noteService } from "../services/note.service.js"
import { showSuccessMsg } from "../../../services/event-bus.service.js"

const { useState, useEffect } = React


export function NoteIndex() {
    const [notes, setNotes] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams()
    const [filterBy, setFilterBy] = useState(noteService.getFilterFromQueryString(searchParams))

    // const [noteToAdd, setNoteToAdd] = useState(noteService.getEmptyNote())
    // const [searchParams, setSearchParams] = useSearchParams()
    // const [filterBy, setFilterBy] = useState(noteService.getFilterFromQueryString(searchParams))

    useEffect(() => {
        loadNotes()
        setSearchParams(filterBy)
        return () => {
            console.log('Bye Bye')
        }
    }, [filterBy, searchParams])

    function loadNotes() {
        noteService.query(filterBy)
            .then((notes) => setNotes(notes))
            .catch((err) => console.log('err:', err));
    }

    function onRemoveNote(noteId) {
        noteService.remove(noteId)
            .then(() => {
                setNotes(prevNotes => {
                    return prevNotes.filter(note => note.id !== noteId)
                })
                showSuccessMsg(`Note successfully removed! ${noteId}`)
            })
            .catch(err => console.log('err:', err))

    }

    function onAddNote(note) {
        noteService.save(note)
            .then(() => {
                setNotes(prevNotes => [...prevNotes, note])
                showSuccessMsg(`Note successfully Added! ${note.type}`)
            })
            .catch(err => console.log('err:', err))
    }

    function onSetFilter(filter) {
        setFilterBy((prevFilter) => ({ ...prevFilter, ...filter }))
    }

    
    // function onSetFilter(filterBy) {
    //     // setFilterBy(filterBy)
    //     setFilterBy(prevFilter => ({ ...prevFilter, ...filterBy }))

    // }

    // const { txt, minSpeed, maxPrice } = filterBy

    if (!notes) return <div>Loading...</div>
    return (
        <section className="note-index">
            {/* <NoteFilter filterBy={{ txt, minSpeed }} onSetFilter={onSetFilter} /> */}
            <NoteFilter filterBy={filterBy} onSetFilter={onSetFilter} />
            <AddNote onAddNote={onAddNote}/>
            <NoteList notes={notes} onRemoveNote={onRemoveNote}/>
        </section>
    )
}

