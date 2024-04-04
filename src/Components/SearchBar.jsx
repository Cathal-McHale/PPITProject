import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';
import "./SearchBar.css"

export const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("");

    const handleChange = (value) => {
        setInput(value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`https://fakestoreapi.com/products?title=${input}`);
            setResults(response.data);
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
