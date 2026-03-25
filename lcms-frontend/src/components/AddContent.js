import React, { useState } from "react";
import { addContent } from "../services/api";

function AddContent({ refresh }) {
  const [form, setForm] = useState({
    title: "",
    course: "",
    description: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContent(form).then(() => {
      setForm({ title: "", course: "", description: "" });
      refresh(); // reload list
    });
  };

  return (
    <div
      className="p-4 mb-4"
      style={{
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
        borderRadius: "15px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3)"
      }}
    >
      <h4 style={{ color: "#00e6ff", marginBottom: "15px" }}>
        ➕ Add New Course
      </h4>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          name="title"
          placeholder="📘 Enter Title"
          value={form.title}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="course"
          placeholder="🎓 Enter Course"
          value={form.course}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="description"
          placeholder="📝 Enter Description"
          value={form.description}
          onChange={handleChange}
        />

        <button
          className="btn w-100"
          style={{
            background: "linear-gradient(90deg, #00c6ff, #0072ff)",
            color: "white",
            borderRadius: "10px"
          }}
        >
          🚀 Add Content
        </button>
      </form>
    </div>
  );
}

export default AddContent;