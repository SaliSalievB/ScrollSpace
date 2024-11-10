import React from 'react';
import './HomePage.css';
import BookCard from '../components/BookCard';

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
        <div className="book-list">
          {/* Add book cards with data */}
          <BookCard title="Dystopian Masterpiece" description="A story of surveillance and totalitarianism." />
          <BookCard title="Classic Novel" description="A tale of love, class, and social issues." />
          <BookCard title="Epic Adventure" description="A journey of dragons, dwarves, and a hobbit." />
        </div>
      </section>
    </div>
  );
}

export default HomePage;