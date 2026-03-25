import React, { useEffect, useState } from "react";
import { getAnalytics } from "../services/api";

function Analytics() {
  const [data, setData] = useState({});

  useEffect(() => {
    getAnalytics().then(res => setData(res.data));
  }, []);

  return (
    <div className="row mt-4">
      {Object.entries(data).map(([course, count]) => (
        <div className="col-md-3" key={course}>
          <div
            className="card text-center p-3 mb-3 shadow"
            style={{
              background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
              color: "white",
              borderRadius: "15px",
              transition: "0.3s"
            }}
          >
            <h5 style={{ color: "#00e6ff" }}>{course}</h5>
            <h2 style={{ fontWeight: "bold" }}>{count}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Analytics;