const Shelf = ({ currentShelf }) => (
  <section className="px-4 pt-6">
    <div>
      <h2 className="font-bold text-3xl w-full border-b-2 pb-2">
        {
          {
            currentlyReading: "Currently Reading",
            wantToRead: "Want to Read",
            read: "Read",
          }[currentShelf[0]]
        }
      </h2>
      <div className="flex justify-center my-12">
        {currentShelf[1].map((book) => (
          <div
            key={book.id}
            className="flex flex-col items-center text-center mx-5 w-64 bg-gray-50 shadow-md rounded-xl p-2"
          >
            <img alt={book.title} src={book.imageLinks.smallThumbnail} />
            <h3>{book.title}</h3>
            {book.authors.map((author) => {
              return <p key={author}>{author}</p>;
            })}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Shelf;
