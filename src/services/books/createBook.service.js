import books from "../../database/books";

const createBookService = (book, owner_id) => {
  book.owner_id = owner_id;
  books.push(book);

  return book;
};

export default createBookService;
