//variables 

const savedNotes = document.getElementById('saved_notes')

//eventListener

eventListener()

function eventListener(){
    document.getElementById('btn').addEventListener('click', newNote)
    savedNotes.addEventListener('click', removeNote)
    document.addEventListener('DOMContentLoaded', localStorageOnLoad)
}

//functions

function newNote(e){
    e.preventDefault()

    //textarea value
    const notes = document.getElementById('notes').value

    //remove notes element
    const removeBtn = document.createElement('a')
    removeBtn.classList = 'remove-note'
    removeBtn.textContent = 'x'

    //create li element
    const li = document.createElement('li')
    li.textContent = notes
    li.style.position = 'relative'

    //add removeBtn to li
    li.appendChild(removeBtn)

    savedNotes.appendChild(li)

    addNoteLocalStorage(notes)
}
//remove notes
function removeNote(e){
    if(e.target.classList.contains('remove-note')){
        e.target.parentElement.remove()
    }
}

//adding the notes to the local storage

function addNoteLocalStorage(notes){
    let note = getNotesFromStorage()

    note.push(notes)
    localStorage.setItem('notes', JSON.stringify(notes))
}

function getNotesFromStorage(){
    let note;
    const noteLs = localStorage.getItem('note')

    if(noteLs === null){
        note = []
    }
    else{
        note = JSON.parse(noteLs)
    }
    return note
}

//printing from  localStorage

function localStorageOnLoad(){
    let note = getNotesFromStorage()

     note.forEach(function(notes){
        // create remove notes element
        const removeBtn = document.createElement('a')
        removeBtn.classList = 'remove-note'
        removeBtn.textContent = 'x'

        //create li element
        const li = document.createElement('li')
        li.textContent = notes
        li.style.position = 'relative'

        //add removeBtn to li
        li.appendChild(removeBtn)

        savedNotes.appendChild(li)
     })
}
