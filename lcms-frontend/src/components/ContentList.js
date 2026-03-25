import React, { useEffect, useState } from "react";
import { getAll, deleteContent } from "../services/api";

function ContentList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    getAll(0, 10).then(res => {
      setData(res.data.content);
    });
  };

  const handleDelete = (id) => {
    deleteContent(id).then(() => loadData());
  };

  return (
    <div className="mt-4">
      <h3 style={{ color: "#00e6ff", marginBottom: "15px" }}>
        📚 All Courses
      </h3>

      <div className="row">
        {data.map((item) => (
          <div className="col-md-4" key={item.id}>
            <div
              className="card shadow mb-3 p-3"
              style={{
                background: "linear-gradient(135deg, #1f1c2c, #928dab)",
                color: "white",
                borderRadius: "15px",
                transition: "0.3s"
              }}
            >
              <h5 style={{ color: "#00e6ff" }}>{item.title}</h5>
              <h6 className="text-light">{item.course}</h6>
              <p>{item.description}</p>

              <button
                className="btn btn-danger btn-sm mt-2"
                onClick={() => handleDelete(item.id)}
              >
                🗑 Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContentList;