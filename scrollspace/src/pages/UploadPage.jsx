import React, { useState } from 'react';
import axios from '../axiosConfig';
import { useNavigate } from 'react-router-dom';
import './UploadPage.css';

function UploadPage() {
  const navigate = useNavigate();
  const [bookData, setBookData] = useState({
    title: '',
    description: '',
    author: '',
    price: '',
    genre: '',
    releaseDate: '',
    coverImageUrl: '',
  });
  const [bookFile, setBookFile] = useState(null); // For file upload

  const handleChange = (e) => {
    setBookData({
      ...bookData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setBookFile(e.target.files[0]); // Update the selected file
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    // Append all the book data
    Object.keys(bookData).forEach((key) => {
      formData.append(key, bookData[key]);
    });

    // Append the file, if any
    if (bookFile) {
      formData.append('bookFile', bookFile);
    }

    axios.post('/books', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then((response) => {
        console.log('Book uploaded:', response.data);
        navigate('/');
      })
      .catch((error) => {
        console.error('Error uploading book:', error);
      });
  };

  return (
    <div className="upload-page-container">
      <h2>Upload a New Book</h2>
      <form className="upload-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input id="title" name="title" placeholder="Enter book title" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input id="author" name="author" placeholder="Enter author name" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          <input id="genre" name="genre" placeholder="Enter book genre" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input id="price" name="price" type="number" placeholder="Enter price" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="releaseDate">Release Date</label>
          <input id="releaseDate" name="releaseDate" type="date" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="coverImageUrl">Cover Image URL</label>
          <input id="coverImageUrl" name="coverImageUrl" placeholder="Enter cover image URL" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter book description"
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="bookFile">Upload Book File</label>
          <input id="bookFile" type="file" onChange={handleFileChange} />
        </div>
        <button className="submit-button" type="submit">Upload Book</button>
      </form>
    </div>
  );
}

export default UploadPage;
