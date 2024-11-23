import React from 'react';
import { useLocation } from 'react-router-dom'; // For query string detection
import './HomePage.css';
import BookList from './BookList';

function HomePage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category'); // Get 'category' from query string

  let headingText = 'Popular Books';
  if (category === 'bestsellers') {
    headingText = 'Bestsellers';
  } else if (category === 'new-releases') {
    headingText = 'New Releases';
  }

  return (
    <div className="homepage">
      <section className="hero">
        <h2>Explore Top Reads</h2>
        <p>Discover captivating stories and insights</p>
      </section>
      <section className="popular-books">
        <h3>{headingText}</h3>
        <BookList />
      </section>
    </div>
  );
}

export default HomePage;
