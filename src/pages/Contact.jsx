function Contact() {
  return (
    <div style={{ padding: "70px 80px" }}>
      <div style={{ textAlign: "center", marginBottom: "38px" }}>
        <h1 style={title}>Contact Us</h1>
        <p style={sub}>
          Need help with booking, pricing or support? Send us a message.
        </p>
      </div>

      <div style={layout}>
        <div style={card}>
          <input placeholder="Full Name" style={input} />
          <input placeholder="Email Address" style={input} />
          <input placeholder="Phone Number" style={input} />

          <textarea
            placeholder="Write your query..."
            style={{
              ...input,
              height: "150px",
              resize: "none"
            }}
          />

          <button style={btn}>Send Message</button>
        </div>

        <div style={card}>
          <h2 style={{ color: "#7b4b54", marginBottom: "18px" }}>
            Support Details
          </h2>

          <p>📧 support@parkora.com</p>
          <p>📞 +91 98765 43210</p>
          <p>📍 Jamshedpur, Jharkhand</p>
          <p>🕒 24 x 7 Customer Support</p>
        </div>
      </div>
    </div>
  );
}

const title = {
  color: "#7b4b54",
  fontSize: "58px",
  marginBottom: "12px"
};

const sub = {
  color: "#666",
  fontSize: "22px"
};

const layout = {
  display: "grid",
  gridTemplateColumns: "1.2fr 1fr",
  gap: "24px"
};

const card = {
  background: "white",
  padding: "28px",
  borderRadius: "24px",
  boxShadow: "0 10px 24px rgba(0,0,0,0.06)"
};

const input = {
  width: "100%",
  padding: "14px",
  marginBottom: "14px",
  borderRadius: "12px",
  border: "1px solid #ddd",
  background: "white",
  color: "#222",
  fontSize: "15px"
};

const btn = {
  width: "100%",
  padding: "15px",
  border: "none",
  borderRadius: "12px",
  background: "#b76e79",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer"
};

export default Contact;