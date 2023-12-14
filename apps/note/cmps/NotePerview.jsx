import { NoteImg } from './NoteImg.jsx'
import { NoteTodos } from './NoteTodos.jsx'
import { NoteTxt } from './NoteTxt.jsx'
import { NoteVideo } from './NoteVideo.jsx'

export function NotePreview({ note }) {

    console.log(note.type)
    switch(note.type){
        case 'NoteTxt':
            return <NoteTxt note={note}/>
        case 'NoteImg':
            return <NoteImg note={note}/>
        case 'NoteVideo':
            return <NoteVideo note={note}/>
        case 'NoteTodos':
            return <NoteTodos note={note}/>
    }
    
}