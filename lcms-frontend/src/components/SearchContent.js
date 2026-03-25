import React, { useState } from "react";
import { searchContent } from "../services/api";

function SearchBar({ setData }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (!query.trim()) return;

    searchContent(query)
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.error("Search error:", err);
      });
  };

  return (
    <div
      className="d-flex align-items-center mb-4"
      style={{
        gap: "10px",
        width: "100%"
      }}
    >
      {/* 🔍 Search Input */}
      <input
        className="form-control"
        placeholder="🔍 Search by title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          backgroundColor: "#ffffff",         // white background
          color: "#000000",                   // black text
          border: "2px solid #00e6ff",        // neon border
          borderRadius: "30px",
          padding: "12px 20px",
          boxShadow: "0 0 10px rgba(0,230,255,0.5)",
          outline: "none",
          flex: 1
        }}
      />

      {/* 🔎 Search Button */}
      <button
        className="btn"
        onClick={handleSearch}
        style={{
          background: "linear-gradient(90deg, #00c6ff, #0072ff)",
          color: "white",
          borderRadius: "30px",
          padding: "10px 20px",
          border: "none"
        }}
      >
        🔎 Search
      </button>
    </div>
  );
}

export default SearchBar;