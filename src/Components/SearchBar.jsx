import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios'; // Import Axios
import "./SearchBar.css"

export const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("");

    // Function to handle eBay search
    const handleSearch = async (query) => {
        try {
          const response = await axios.get(`http://localhost:3000/search?query=${query}`);
          setResults(response.data.findItemsByKeywordsResponse[0].searchResult[0].item);
        } catch (error) {
          console.error('Error fetching eBay search results:', error);
        }
      };
      

    const handleChange = (value) => {
        setInput(value);
        // Call handleSearch function with the input value
        handleSearch(value);
    }

    return (
        <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input placeholder="Type to search..." value={input} onChange={(e) => handleChange(e.target.value)} />
        </div>
    );
}
