import { useEffect, useState } from "react";
import axios from "axios";

function Reports() {
  const [data, setData] = useState({
    revenue: 0,
    bookings: 0,
    occupied: 0,
    total_slots: 0
  });

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/reports")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const available = data.total_slots - data.occupied;
  const percent =
    data.total_slots > 0
      ? Math.round((data.occupied / data.total_slots) * 100)
      : 0;

  return (
    <div style={{ padding: "70px 80px" }}>
      <div style={{ textAlign: "center", marginBottom: "38px" }}>
        <h1 style={{
          fontSize: "58px",
          color: "#7b4b54",
          marginBottom: "12px"
        }}>
          Reports Dashboard
        </h1>

        <p style={{ color: "#666", fontSize: "21px" }}>
          Live analytics from database
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(5,1fr)",
        gap: "18px"
      }}>
        <Card t={`₹${data.revenue}`} s="Revenue" />
        <Card t={data.bookings} s="Bookings" />
        <Card t={data.occupied} s="Occupied" />
        <Card t={available} s="Available" />
        <Card t={`${percent}%`} s="Occupancy" />
      </div>
    </div>
  );
}

function Card({ t, s }) {
  return (
    <div style={{
      background: "white",
      padding: "26px",
      borderRadius: "20px",
      textAlign: "center",
      boxShadow: "0 10px 24px rgba(0,0,0,0.06)"
    }}>
      <h2 style={{ color: "#b76e79" }}>{t}</h2>
      <p>{s}</p>
    </div>
  );
}

export default Reports;