
"use strict";
console.log('hello')
let notesObj;
let addBtn = document.getElementById('addBtn')
addBtn.addEventListener("click", function (e) {
    let addTitle = document.getElementById('addTitle')
    let addTxt = document.getElementById("addTxt")
    let notes = localStorage.getItem("notes")

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes)
    }
    let myobj= {
        text: addTxt.value,
        title: addTitle.value
    }
    notesObj.push(myobj);
    localStorage.setItem('notes', JSON.stringify(notesObj))
    addTxt.value = " ";   
    console.log(notesObj);
    shownnotes()
})
function shownnotes() {
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

console.log(notesObj)
    let html = "";
    notesObj.forEach(function (element, index) {
        html += 
         `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title"> ${element.title}</h5>
        <p class="card-text"> ${element.text}</p>
        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
    </div>  
</div>`;

    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}
function deleteNote(index) {

   
    notesObj.splice(index, 1)
    localStorage.setItem('notes', JSON.stringify(notesObj))
    shownnotes()

}
let search = document.getElementById("searchTxt")
search.addEventListener("input", function () {
    let inputVal = search.value;
    let noteCard = document.getElementsByClassName("notecard")
    Array.from(noteCard).forEach(function () {
        let cardtxt = element.getElementByTagName('p')[0].innertext;
        if (cardtxt.includes(inputVal)){
        element.style.display = "block"
    }
        else{
            element.style.display = "none"
        }

    })


    console.log('input fired ', inputVal)
})
