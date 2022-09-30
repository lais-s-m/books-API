import createBookService from "../services/books/createBook.service";
import deleteBookService from "../services/books/deleteBook.service";
import listBookService from "../services/books/listBook.service";
import updateBookService from "../services/books/updateBook.service";

//Create
export const createBookController = (req, res) => {
  try {
    const book = req.validatedBody;
    const owner_id = req.user.id;
    const createdBook = createBookService(book, owner_id);

    return res.status(201).json(createdBook);
  } catch (err) {
    return res.status(403).json({
      message: err.message,
    });
  }
};

//Read
export const listBookController = (req, res) => {
  const books = listBookService();
  return res.json(books);
};

//Update
export const updateBookController = (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const updatedBook = updateBookService(id, updatedData);

    return res.json(updatedBook);
  } catch (err) {
    return res.status(401).json({
      message: err.message,
    });
  }
};

//Delete
export const deleteBookController = (req, res) => {
  try {
    const { id } = req.params;
    deleteBookService(id);

    return res.json({
      message: "Book deleted with success",
    });
  } catch (err) {
    return res.status(401).json({
      message: err.message,
    });
  }
};
