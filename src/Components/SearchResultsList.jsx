import React from "react";
import "./SearchResultsList.css";
import { ProductCard } from "./productCard";

export const SearchResultsList = ({ results }) => {
    return (
        <div className="results-list">
            {results && results.length > 0 ? (
                results.map((product, id) => (
                    <ProductCard product={product} key={id} />
                ))
            ) : (
                <p>No results found</p>
            )}
        </div>
    );
};
