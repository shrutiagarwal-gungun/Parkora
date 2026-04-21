function Login() {
  return (
    <div style={{ padding: "70px 80px" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
        <h1 style={title}>Login / Register</h1>

        <p style={sub}>
          Access your bookings, receipts and parking history.
        </p>
      </div>

      <div style={box}>
        <input placeholder="Email Address" style={input} />
        <input placeholder="Password" type="password" style={input} />

        <button style={btn}>Login</button>

        <p style={{
          marginTop: "22px",
          textAlign: "center",
          color: "#666"
        }}>
          New user? Create account
        </p>
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
  fontSize: "22px",
  marginBottom: "38px"
};

const box = {
  maxWidth: "700px",
  margin: "0 auto",
  background: "white",
  padding: "35px",
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

export default Login;