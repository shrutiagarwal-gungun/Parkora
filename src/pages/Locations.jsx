import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Locations() {
  const [slots, setSlots] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    axios.get("http://127.0.0.1:5000/locations")
      .then((res) => setSlots(res.data));
  };

  const places = [
    {
      id: 1,
      name: "City Mall Parking",
      icon: "🛍️",
      address: "Main Road, City Center",
      img: "https://images.unsplash.com/photo-1519583272095-6433daf26b6e?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 2,
      name: "Metro Plaza Parking",
      icon: "🏢",
      address: "Corporate Avenue, Metro Area",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 3,
      name: "Airport Parking Zone",
      icon: "✈️",
      address: "Airport Terminal Gate 2",
      img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 4,
      name: "Business Park Parking",
      icon: "🏙️",
      address: "Tech Hub Business District",
      img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=900&q=80"
    }
  ];

  const pricing = {
    1: { Bike: 15, Car: 40, SUV: 55, EV: 35 },
    2: { Bike: 12, Car: 35, SUV: 50, EV: 30 },
    3: { Bike: 20, Car: 60, SUV: 80, EV: 50 },
    4: { Bike: 10, Car: 30, SUV: 45, EV: 25 }
  };

  const stats = (id) => {
    const data = slots.filter(
      (s) => Number(s.location_id) === id
    );

    const total = data.length;
    const occupied = data.filter(
      (s) => s.status === "Occupied"
    ).length;

    return {
      total,
      occupied,
      available: total - occupied,
      slots: data
    };
  };

  return (
    <div style={{ padding: "70px 80px" }}>
      <div style={{ textAlign: "center", marginBottom: "35px" }}>
        <h1 style={{
          fontSize: "58px",
          color: "#7b4b54",
          marginBottom: "10px"
        }}>
          Parking Locations
        </h1>

        <p style={{ color: "#666", fontSize: "21px" }}>
          Smart locations with live slots & pricing
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        gap: "26px"
      }}>
        {places.map((loc) => {
          const s = stats(loc.id);

          return (
            <div key={loc.id} style={card}>
              <img src={loc.img} alt="" style={img} />

              <div style={{ padding: "22px" }}>
                <h2 style={{ color: "#7b4b54" }}>
                  {loc.icon} {loc.name}
                </h2>

                <p style={{ color: "#666" }}>
                  📍 {loc.address}
                </p>

                <p>Total Slots: {s.total}</p>
                <p style={{ color:"#16a34a" }}>
                  Available: {s.available}
                </p>
                <p style={{ color:"#dc2626" }}>
                  Occupied: {s.occupied}
                </p>

                <div style={priceBox}>
                  <b>Rates / Hour</b><br/>
                  Bike ₹{pricing[loc.id].Bike} | Car ₹{pricing[loc.id].Car}<br/>
                  SUV ₹{pricing[loc.id].SUV} | EV ₹{pricing[loc.id].EV}
                </div>

                <div style={{
                  display:"flex",
                  gap:"12px",
                  marginTop:"16px"
                }}>
                  <Link to="/book">
                    <button style={btn1}>Book Now</button>
                  </Link>

                  <button
                    style={btn2}
                    onClick={() => setSelected({
                      name: loc.name,
                      slots: s.slots
                    })}
                  >
                    View Slots
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selected && (
        <div style={overlay}>
          <div style={modal}>
            <h2 style={{ color:"#7b4b54" }}>
              {selected.name}
            </h2>

            <div style={{
              display:"grid",
              gridTemplateColumns:"repeat(4,1fr)",
              gap:"12px",
              marginTop:"20px"
            }}>
              {selected.slots.map((slot)=>(
                <div key={slot.slot_id}
                  style={{
                    padding:"12px",
                    borderRadius:"12px",
                    textAlign:"center",
                    background:
                    slot.status==="Occupied"
                    ? "#fee2e2"
                    : "#dcfce7"
                  }}>
                  {slot.slot_number}<br/>
                  {slot.slot_type}<br/>
                  {slot.status}
                </div>
              ))}
            </div>

            <button
              style={{
                ...btn1,
                width:"100%",
                marginTop:"20px"
              }}
              onClick={()=>setSelected(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const card = {
  background:"white",
  borderRadius:"24px",
  overflow:"hidden",
  boxShadow:"0 10px 24px rgba(0,0,0,0.06)"
};

const img = {
  width:"100%",
  height:"220px",
  objectFit:"cover"
};

const priceBox = {
  background:"#f8f6f4",
  padding:"12px",
  borderRadius:"14px",
  marginTop:"12px",
  lineHeight:"1.8"
};

const btn1 = {
  padding:"12px 18px",
  border:"none",
  borderRadius:"10px",
  background:"#b76e79",
  color:"white",
  fontWeight:"bold",
  cursor:"pointer"
};

const btn2 = {
  padding:"12px 18px",
  border:"1px solid #b76e79",
  borderRadius:"10px",
  background:"white",
  color:"#b76e79",
  fontWeight:"bold",
  cursor:"pointer"
};

const overlay = {
  position:"fixed",
  inset:0,
  background:"rgba(0,0,0,0.45)",
  display:"flex",
  justifyContent:"center",
  alignItems:"center"
};

const modal = {
  background:"white",
  padding:"30px",
  borderRadius:"24px",
  width:"800px",
  maxHeight:"80vh",
  overflowY:"auto"
};

export default Locations;