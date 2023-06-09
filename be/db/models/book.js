const { Schema, model } = require("mongoose");

const nameLink = {
  name: {
    type: String,
    default: "",
  },
  link: {
    type: String,
  },
};

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  authors: [nameLink],
  narrators: [nameLink],
  description: {
    type: String,
    default: ''
  },
  purchased_at: {
    type: Date,
    required: false,
  },
});

const Book = model("book", BookSchema);

module.exports = Book;
