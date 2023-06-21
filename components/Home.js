import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';
import './Home.css'; // Import the CSS file for styling

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
    <div className="home-container">
      <input type="text" placeholder="Search books" value={searchTerm} onChange={handleSearch} />
      <div className="book-list">
        {filteredBooks.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
