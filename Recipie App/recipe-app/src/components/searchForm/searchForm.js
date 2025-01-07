import React, { useState } from "react";

const SearchForm = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform search with query
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;