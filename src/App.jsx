import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Locations from "./pages/Locations";
import BookSlot from "./pages/BookSlot";
import Reports from "./pages/Reports";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div style={{
        minHeight: "100vh",
        background: "#f8f6f4",
        fontFamily: "Arial, sans-serif",
        color: "#2d2d2d"
      }}>

        {/* Navbar */}
        <div style={{
          background: "white",
          padding: "18px 50px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          position: "sticky",
          top: 0,
          zIndex: 100
        }}>
          <h2 style={{ color: "#b76e79", margin: 0 }}>
            🚗 Parkora
          </h2>

          <div style={{
            display: "flex",
            gap: "24px",
            fontWeight: "500"
          }}>
            <Link to="/" style={link}>Home</Link>
            <Link to="/locations" style={link}>Locations</Link>
            <Link to="/book" style={link}>Book Slot</Link>
            <Link to="/reports" style={link}>Reports</Link>
            <Link to="/contact" style={link}>Contact</Link>
            <Link to="/login" style={link}>Login</Link>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/book" element={<BookSlot />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>

      </div>
    </Router>
  );
}

const link = {
  textDecoration: "none",
  color: "#333"
};

export default App;