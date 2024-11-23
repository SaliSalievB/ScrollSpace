import React from 'react';
import './HomePage.css';
import BookList from './BookList';

function HomePage() {
  return (
    <div className="homepage">
      <section className="hero">
        <h2>Explore Top Reads</h2>
        <p>Discover captivating stories and insights</p>
        <button>See More</button>
      </section>
      <section className="popular-books">
        <h3>Popular Books</h3>
        <BookList />
      </section>
    </div>
  );
}

export default HomePage;