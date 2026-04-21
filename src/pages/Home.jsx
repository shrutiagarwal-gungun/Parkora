import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* Hero */}
      <div style={{
        padding: "85px 80px",
        background: "linear-gradient(90deg,#b76e79,#d8a7b1)",
        color: "white",
        textAlign: "center"
      }}>
        <h1 style={{
          fontSize: "56px",
          marginBottom: "16px"
        }}>
          Parking Slot Booking System
        </h1>

        <p style={{
          fontSize: "20px",
          maxWidth: "850px",
          margin: "auto"
        }}>
          Smart parking platform for malls, offices, airports
          and business zones with online and offline booking.
        </p>

        <div style={{
          marginTop: "28px",
          display: "flex",
          justifyContent: "center",
          gap: "16px"
        }}>
          <Link to="/book">
            <button style={btn1}>Book Now</button>
          </Link>

          <Link to="/locations">
            <button style={btn2}>Explore Locations</button>
          </Link>
        </div>
      </div>

      {/* Steps */}
      <div style={{ padding: "60px 80px" }}>
        <h2 style={heading}>How It Works</h2>

        <div style={grid3}>
          {[
            ["1️⃣", "Choose Location"],
            ["2️⃣", "Select Slot & Time"],
            ["3️⃣", "Park & Pay Easily"]
          ].map((item, i) => (
            <div key={i} style={card}>
              <h1>{item[0]}</h1>
              <p>{item[1]}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose */}
      <div style={{ padding: "0px 80px 60px" }}>
        <h2 style={heading}>Why Choose Us</h2>

        <div style={grid4}>
          {[
            "Real-time Availability",
            "Fast Online Booking",
            "Offline Entry Support",
            "Secure Billing"
          ].map((item, i) => (
            <div key={i} style={card}>{item}</div>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div style={{ padding: "0px 80px 70px" }}>
        <h2 style={heading}>Customer Reviews</h2>

        <div style={grid3}>
          {[
            "⭐ Smooth booking experience.",
            "⭐ Saved my time during rush hour.",
            "⭐ Clean interface and easy use."
          ].map((item, i) => (
            <div key={i} style={card}>{item}</div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{
        background: "#ffffff",
        padding: "30px 80px",
        borderTop: "1px solid #eee"
      }}>
        <h3 style={{ color: "#b76e79" }}>Parkora</h3>
        <p>Email: support@parkora.com</p>
        <p>Phone: +91 98765 43210</p>
      </div>

    </div>
  );
}

const heading = {
  color: "#7b4b54",
  marginBottom: "24px"
};

const grid3 = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "20px"
};

const grid4 = {
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  gap: "20px"
};

const card = {
  background: "white",
  padding: "25px",
  borderRadius: "18px",
  boxShadow: "0 8px 18px rgba(0,0,0,0.05)",
  textAlign: "center"
};

const btn1 = {
  padding: "14px 28px",
  border: "none",
  borderRadius: "10px",
  background: "white",
  color: "#b76e79",
  fontWeight: "bold",
  cursor: "pointer"
};

const btn2 = {
  padding: "14px 28px",
  border: "1px solid white",
  borderRadius: "10px",
  background: "transparent",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer"
};

export default Home;