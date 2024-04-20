import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';
import "./SearchBar.css"

export const SearchBar = ({ onSearch }) => {
    const [input, setInput] = useState("");

    const handleChange = (value) => {
        setInput(value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting search form...');
        try {
          const response = await axios.get(`https://fakestoreapi.com/products?title=${input}`);
          console.log('Search results:', response.data);
          onSearch(input); // Passing the search input value to the parent component
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      };
      

    return (
        <form className="input-wrapper" onSubmit={handleSubmit}>
            <FaSearch id="search-icon" />
            <input placeholder="Type to search..." value={input} onChange={(e) => handleChange(e.target.value)} />
            <button type="submit" style={{ display: "none" }} />
        </form>
    );
}
