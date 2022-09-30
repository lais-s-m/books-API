import books from "../../database/books";

const updateBookService = (id, updatedData) => {
  const bookIndex = books.findIndex((book) => book.id === id);

  if (bookIndex === -1) {
    throw new Error("Book not found");
  }

  const book = books[bookIndex];

  const updatedBook = { ...book, ...updatedData };
  const treatedBook = {
    title: updatedBook.title,
    author: updatedBook.author,
    year: updatedBook.year,
    owner_id: updatedBook.owner_id,
  };
  return treatedBook;
};

export default updateBookService;
