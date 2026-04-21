import { useState } from "react";
import axios from "axios";

function BookSlot() {
  const [form, setForm] = useState({
    full_name: "",
    phone: "",
    vehicle_no: "",
    vehicle_type: "Car",
    location_id: "1",
    hours: "1"
  });

  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const update = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const bookNow = async () => {
    try {
      setLoading(true);
      setMsg("");

      const res = await axios.post(
        "http://127.0.0.1:5000/book",
        form
      );

      setMsg(
        `Booking Successful | Slot: ${res.data.slot_number} | Amount ₹${res.data.amount}`
      );
    } catch (e) {
      setMsg("Booking Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "70px 80px" }}>
      <div style={{ textAlign: "center", marginBottom: "35px" }}>
        <h1 style={title}>Book Parking Slot</h1>
        <p style={sub}>
          Choose location & vehicle. Slot assigned automatically.
        </p>
      </div>

      <div style={box}>
        <input
          style={inp}
          placeholder="Full Name"
          onChange={(e) => update("full_name", e.target.value)}
        />

        <input
          style={inp}
          placeholder="Phone Number"
          onChange={(e) => update("phone", e.target.value)}
        />

        <input
          style={inp}
          placeholder="Vehicle Number"
          onChange={(e) => update("vehicle_no", e.target.value)}
        />

        <select
          style={inp}
          onChange={(e) => update("vehicle_type", e.target.value)}
        >
          <option>Bike</option>
          <option>Car</option>
          <option>SUV</option>
          <option>EV</option>
        </select>

        <select
          style={inp}
          onChange={(e) => update("location_id", e.target.value)}
        >
          <option value="1">City Mall Parking</option>
          <option value="2">Metro Plaza Parking</option>
          <option value="3">Airport Parking Zone</option>
          <option value="4">Business Park Parking</option>
        </select>

        <select
          style={inp}
          onChange={(e) => update("hours", e.target.value)}
        >
          <option value="1">1 Hour</option>
          <option value="2">2 Hours</option>
          <option value="3">3 Hours</option>
          <option value="4">4 Hours</option>
          <option value="5">5 Hours</option>
        </select>

        <button style={btn} onClick={bookNow}>
          {loading ? "Booking..." : "Confirm Booking"}
        </button>

        {msg && <div style={msgBox}>{msg}</div>}
      </div>
    </div>
  );
}

const title = {
  fontSize: "58px",
  color: "#7b4b54",
  marginBottom: "10px"
};

const sub = {
  color: "#666",
  fontSize: "21px"
};

const box = {
  background: "white",
  padding: "35px",
  borderRadius: "24px",
  boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
  display: "grid",
  gap: "15px"
};

const inp = {
  padding: "15px",
  borderRadius: "12px",
  border: "1px solid #ddd",
  background: "white",
  color: "#333",
  fontSize: "16px"
};

const btn = {
  padding: "16px",
  border: "none",
  borderRadius: "12px",
  background: "#b76e79",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer"
};

const msgBox = {
  textAlign: "center",
  color: "#7b4b54",
  fontWeight: "bold",
  paddingTop: "6px"
};

export default BookSlot;