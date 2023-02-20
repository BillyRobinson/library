const addBookSubmit = document.querySelector("#input-submit");


addBookSubmit.addEventListener("click", addBookToLibrary);

let myLibrary = [];

function Book(title, author, read){
    this.title = title;
    this.author = author;
    this.read = read;


}
function addBookToLibrary(){
    let title = document.querySelector("#input-book-title").value;
    let author = document.querySelector("#input-author").value;
    let read = document.querySelector("#input-book-read").checked;

    let newBook = new Book(title,author,read);
    myLibrary.push(newBook);
    renderBook();

    console.log(title)
    console.log(myLibrary)
    console.log("clicksubmit")
}

function renderBook(){
    let libraryElement = document.querySelector("#library");
    libraryElement.innerHTML = "";
    for (let index = 0; index < myLibrary.length; index++) {
        let book = myLibrary[index];
        const newBookContainer = document.createElement("div");
        newBookContainer.innerHTML =`<div class=bookHeader><h1>${book.title}<h1><h1>${book.author}<h1></div>`;
        libraryElement.appendChild(newBookContainer);
    }
}