import React, { useState } from "react";
import { FaSearch } from 'react-icons/fa'; // Note: FaSearch should start with capital letters
import "./SearchBar.css"
export const SearchBar = () => {
    const [input, setInput] = useState("");
    const fetchData = (value) => {
        // change to allow for ebay api
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => {
                const results = json.filter((user) => {
                    return value &&
                        user &&
                        user.name &&
                        user.name.toLowerCase().includes(value)
                })
                console.log(results)
            });
    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }



    return (
        <div className="input-wrapper"> {/* Changed class to className */}

            <FaSearch id="search-icon" />
            <input placeholder="Type to search..." value={input} onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    );
}
