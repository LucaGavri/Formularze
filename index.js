//DOM elems
const form = document.querySelector('.main__form');
const booksDiv = document.querySelector('.main__books');
const nameInput = form['name'];
const authorInput = form['author'];
const priorityInput = form['priority'];
const categoryInput = form['category'];

const books = [
    // {
    //     name: "Hobbit",
    //     author: "Tolkien",
    //     priority: 5,
    //     category: "Fantasy"
    // }
];

const addBook = (name, author, priority, category) => {
    books.push({
        name: name,
        author: author,
        priority: priority,
        category: category
    });

    return {name, author, priority, category}
};

const createBook = ({name, author, priority, category}) => {
    const bookDiv = document.createElement('div');
    const bookName = document.createElement('h3');
    const bookAuthor = document.createElement('p');
    const bookPriority = document.createElement('p');
    const bookCategory = document.createElement('p');

    bookName.innerText = 'Title: ' + name;
    bookAuthor.innerText = 'Author: ' + author;
    bookCategory.innerText = 'Category: ' + category;
    bookPriority.innerText = 'Priority: ' + priority;

    bookDiv.append(bookName, bookAuthor, bookPriority, bookCategory);

    booksDiv.appendChild(bookDiv);
}

books.forEach(createBook);

form.onsubmit = e => {
    e.preventDefault();

    const newBook = addBook(
        nameInput.value,
        authorInput.value,
        priorityInput.value,
        categoryInput.value
    );

    createBook(newBook);

    nameInput.value = "";
    authorInput.value = "";
    priorityInput.value = "";
    categoryInput.value = "";
}