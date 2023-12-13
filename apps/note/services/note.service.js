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

function query() {
    return asyncStorageService.query(NOTE_KEY)
        .then(notes => {
            // if (filterBy.txt) {
            //     const regExp = new RegExp(filterBy.txt, 'i')
            //     notes = notes.filter(note => regExp.test(note.vendor))
            // }
            // if (filterBy.minSpeed) {
            //     notes = notes.filter(note => note.maxSpeed >= filterBy.minSpeed)
            // }
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

function getEmptyNote() {
    return _createNote('NoteTxt', { txt: '' })
}

function getDefaultFilter() {
    return { txt: '' }
}

function getFilterFromQueryString(searchParams) {
    const txt = searchParams.get('txt') || ''
    return { txt }
}

// function getEmptyNote(type = '', maxSpeed = '') {
//     return { type, maxSpeed }
// }

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

// function _createNotes() {
//     let notes = utilService.loadFromStorage(NOTE_KEY)
//     if (!notes || !notes.length) {
//         notes = []
//         notes.push(_createNote('audu', 300))
//         notes.push(_createNote('fiak', 120))
//         notes.push(_createNote('subali', 50))
//         notes.push(_createNote('mitsu', 150))
//         utilService.saveToStorage(NOTE_KEY, notes)
//     }
// }

// function _createNote(vendor, maxSpeed = 250) {
//     const note = getEmptyCar(vendor, maxSpeed)
//     note.id = utilService.makeId()
//     return note
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

function _createTextNote(txt, backgroundColor = '#00d') {
    return _createNote('NoteTxt', { txt }, backgroundColor)
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
        notes.push(_createTextNote('Fullstack Me Baby!'))

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