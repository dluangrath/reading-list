import BookShow from './BookShow.js'

function BookList({ books, onDelete }) {
    const renderedBooks = books.map((book) => {
        return <BookShow onDelete={onDelete} key={book.id} book={book} />;
    });

    return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;