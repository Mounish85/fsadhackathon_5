import React, { useState } from "react";
import AddContent from "./components/AddContent";
import ContentList from "./components/ContentList";
import SearchBar from "./components/SearchContent";
import Analytics from "./components/Analytics";

function App() {
  const [data, setData] = useState([]);

  return (
    <div className="container mt-4">
      <h2 style={{ textAlign: "center", color: "#00e6ff" }}>
        🚀 LCMS Dashboard
      </h2>

      <AddContent refresh={() => window.location.reload()} />

      <SearchBar setData={setData} />

      <Analytics />

      <ContentList externalData={data} />
    </div>
  );
}

export default App;