import { utilService } from '../../../services/util.service.js'
import { asyncStorageService } from '../../../services/async-storage.service.js'
import { storageService } from '../../../services/storage.service.js'

const NOTE_KEY = 'noteDB'
_createNotes()

export const noteService = {
    query,
    get,
    remove,
    save,
    getEmptyNote,
    getDefaultFilter,
    getFilterFromQueryString
}

function query(filterBy) {
    return asyncStorageService.query(NOTE_KEY)
        .then(notes => {
            if (filterBy.type) {
                notes = notes.filter(note => note.type===filterBy.type)
            }
            return notes
        })
}

function get(noteId) {  
    return asyncStorageService.get(NOTE_KEY, noteId)
}

function remove(noteId) {
    return asyncStorageService.remove(NOTE_KEY, noteId)
}

function save(note) {
    if (note.id) {
        return asyncStorageService.put(NOTE_KEY, note)
    } else {
        return asyncStorageService.post(NOTE_KEY, note)
    }
}

// function getEmptyNote() {
//     return {
//         createdAt: Date.now(),
//         type: '',
//         isPinned: false,
//         style: {  },
//         info: {
//             title: '',
//             txt: ''
//         }
//     }
// }

function getEmptyNote(type = 'NoteTxt') {
    const emptyNote = {
        createdAt: Date.now(),
        type: type,
        isPinned: false,
        style: {},
        info: {
            title: '',
            txt: '',
        }
    }

    
    switch (type) {
        case 'NoteImg':
            emptyNote.info.url = '' 
            emptyNote.info.title = '' 
            break;

        case 'NoteVideo':
            emptyNote.info.url = '' 
            emptyNote.info.title = '' 
            break;

        case 'NoteTodos':
            emptyNote.info.title = {}
            emptyNote.info.todos = {} 
            break;

        default:
            break;
    }

    return emptyNote
}

function getDefaultFilter() {
    return { txt: '' }
}

function getFilterFromQueryString(searchParams) {
    const txt = searchParams.get('txt') || ''
    return { txt }
}



// function getDefaultFilter() {
//     return { txt: '', minSpeed: '', maxPrice: '' }
// }

// function getFilterFromQueryString(searchParams) {
//     const txt = searchParams.get('txt') || ''
//     const minSpeed = searchParams.get('minSpeed') || ''
//     const maxPrice = searchParams.get('maxPrice') || ''
//     return {
//         txt,
//         minSpeed,
//         maxPrice
//     }
// }


function _createNote(type, data, backgroundColor = '#00d') {
    return {
        id: utilService.makeId(),
        createdAt: Date.now(),
        type,
        isPinned: false,
        style: { backgroundColor },
        info: data
    }
}

function _createVideoNote(url, title, backgroundColor = '#00d') {
    return _createNote('NoteVideo', { url, title }, backgroundColor)
}

function _createTextNote(title ,txt, backgroundColor = '#00d') {
    return _createNote('NoteTxt', { title,txt }, backgroundColor)
}

function _createImageNote(url, title, backgroundColor = '#00d') {
    return _createNote('NoteImg', { url, title }, backgroundColor)
}

function _createTodosNote(title, todos, backgroundColor = '#00d') {
    return _createNote('NoteTodos', { title, todos }, backgroundColor)
}

function _createNotes() {
    let notes = storageService.loadFromStorage(NOTE_KEY)
    if (!notes || !notes.length) {
        notes = []

        // Create a text note
        notes.push(_createTextNote('Have Fun ','Fullstack!'))

        // Create an image note
        notes.push(_createImageNote('http://some-img/me', 'Bobi and Me'))

        // Create a todos note
        notes.push(_createTodosNote('Get my stuff together', [
            { txt: 'Driving license', doneAt: null },
            { txt: 'Coding power', doneAt: 187111111 }
        ]))

        notes.push(_createVideoNote('https://some-video-url', 'My Video Title'))

        storageService.saveToStorage(NOTE_KEY, notes)
    }
}

const notes = [
    {
        id: 'n101',
        createdAt: 1112222,
        type: 'NoteTxt',
        isPinned: true,
        style: {
            backgroundColor: '#00d'
        },
        info: {
            txt: 'Fullstack Me Baby!'
        }
    },
    {
        id: 'n102',
        type: 'NoteImg',
        isPinned: false,
        info: {
            url: 'http://some-img/me',
            title: 'Bobi and Me'
        },
        style: {
            backgroundColor: '#00d'
        }
    },
    {
        id: 'n103',
        type: 'NoteTodos',
        isPinned: false,
        info: {
            title: 'Get my stuff together',
            todos: [
                {
                    txt: 'Driving license'
                    , doneAt: null
                },
                { txt: 'Coding power', doneAt: 187111111 }
            ]
        }
    }
]