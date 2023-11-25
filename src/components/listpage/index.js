import { useEffect, useState } from "react";
import * as BookApi from "../../api/BooksAPI";
import Shelf from "./Shelf";

const ListPage = () => {
  const [books, setBooks] = useState([]);
  const [shelf, setShelf] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BookApi.getAll();
      setBooks(res);
    };

    getBooks();
  }, []);

  useEffect(() => {
    let createShelf = true;

    const groupByShelf = Object.entries(
      books.reduce((shelf, allBooks) => {
        const key = allBooks.shelf;
        shelf[key] = shelf[key] || [];
        shelf[key].push(allBooks);
        return shelf;
      }, {})
    );

    setShelf(groupByShelf);

    return () => {
      createShelf = false;
    };
  }, [books]);

  return (
    <>
      {console.log(shelf)}
      {shelf.map((item) => {
        return <Shelf key={item[0]} currentShelf={item} />;
      })}
    </>
  );
};

export default ListPage;
