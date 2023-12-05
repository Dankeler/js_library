const myLibrary = [];
const bookButton = document.getElementById("btn")
const bookHolder = document.getElementById("bookHolder")
const modal = document.querySelector(".modal")
const closeBtn = document.querySelector(".close")
const submitBtn = document.querySelector(".submitBtn")


function displayBooks(book) {
    const newBook = document.createElement("div")
    const classes = ["bookTitle", "bookAuthor", "bookPages", "btnContainer"]
    bookHolder.appendChild(newBook)
    newBook.setAttribute("class", "oneBook")

    classes.forEach(function(className) {
        const newP = document.createElement("p")
        
        newP.setAttribute("class", className)
        newBook.appendChild(newP)
        
        switch(className) {
            case "bookTitle":
                newP.textContent = book.title;
                break;
            case "bookAuthor":
                newP.textContent = "by " + book.author
                break;
            case "bookPages":
                newP.textContent = "Number of pages: " + book.pages
                break;
            case "btnContainer":
                const buttonsDiv = document.createElement("div");
                buttonsDiv.setAttribute("class", "buttonsDiv");

                const readButton = document.createElement("button");
                readButton.textContent = book.read ? "Read: Yes" : "Read: No";
                readButton.setAttribute("class", "readButton");

                readButton.style.backgroundColor = book.read ? "green" : "red";

                readButton.addEventListener("click", function() {
                    book.read = !book.read
                    readButton.textContent = book.read ? "Read: Yes" : "Read: No"
                    readButton.style.backgroundColor = book.read ? "limegreen" : "red"
                })


                

            

                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete";
                deleteButton.setAttribute("class", "deleteButton");
                buttonsDiv.appendChild(readButton);
                buttonsDiv.appendChild(deleteButton);
                deleteButton.addEventListener("click" ,function() {
                    newBook.remove()
                })
                newP.appendChild(buttonsDiv);
                break;
        }


    })

    
};
function Book(author, title, pages, read) {
    this.author = author
    this.title = title
    this.pages = pages
    this.read = read
};


function addBookToLibrary() {
    let author = document.getElementById("author").value
    let title = document.getElementById("title").value
    let pages = document.getElementById("pages").value
    let read = document.getElementById("read").checked

    let newBook = new Book(author, title, pages, read)
    displayBooks(newBook)



};

bookButton.addEventListener("click", function() {
    modal.style.display = "block";
    console.log("chuj");
});

closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
})

submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    let author = document.getElementById("author").value.trim()
    let title = document.getElementById("title").value.trim()

    if (author !== "" && title !== "") {
        modal.style.display = "none";
        addBookToLibrary()
    } else {
        alert("Please fill in all necessary fields.")
    }


})

const readButtonEvent = document.querySelector(".readButton")

