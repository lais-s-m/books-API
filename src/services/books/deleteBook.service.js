import books from "../../database/books";

const deleteBookService = (id) => {
  const bookIndex = books.findIndex((book) => book.id === id);
  if (bookIndex === -1) {
    throw new Error("Book not found");
  }
  books.splice(bookIndex, 1);

  return true;
};

export default deleteBookService;
