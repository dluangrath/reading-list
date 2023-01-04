function BookShow({ book, onDelete }) {
    const handleCLick = () => {
        onDelete(book.id);
    };

    return <div className="book-show">
        {book.title}
        <div className="actions">
            <button className="delete" onClick={handleCLick}>
                Delete
            </button>

        </div>
    </div>;
}

export default BookShow;