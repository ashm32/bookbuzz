import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const books = useSelector((state) => state.books);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBooks = books.filter((book) => {
    const { title, author, genre } = book;
    const searchLower = searchTerm.toLowerCase();

    return (
      title.toLowerCase().includes(searchLower) ||
      author.toLowerCase().includes(searchLower) ||
      genre.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div>
      <input type="text" placeholder="Search books" value={searchTerm} onChange={handleSearch} />
      {filteredBooks.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Home;
