from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Shruti@3002",
    database="parking_booking_system"
)

cursor = db.cursor(dictionary=True)

# ---------- PRICING ----------
pricing = {
    1: {"Bike": 15, "Car": 40, "SUV": 55, "EV": 35},
    2: {"Bike": 12, "Car": 35, "SUV": 50, "EV": 30},
    3: {"Bike": 20, "Car": 60, "SUV": 80, "EV": 50},
    4: {"Bike": 10, "Car": 30, "SUV": 45, "EV": 25},
}

# ---------- HOME ----------
@app.route("/")
def home():
    return jsonify({"message": "Backend Running"})


# ---------- LOCATIONS ----------
@app.route("/locations", methods=["GET"])
def locations():
    cursor.execute("""
        SELECT slot_id, location_id, slot_number, slot_type, status
        FROM parking_slots
        ORDER BY slot_id
    """)
    return jsonify(cursor.fetchall())


# ---------- BOOK SLOT AUTO ----------
@app.route("/book", methods=["POST"])
def book():

    data = request.json

    full_name = data["full_name"]
    phone = data["phone"]
    vehicle_no = data["vehicle_no"]
    vehicle_type = data["vehicle_type"]
    location_id = int(data["location_id"])
    hours = int(data["hours"])

    # Find matching free slot automatically
    cursor.execute("""
        SELECT slot_id, slot_number
        FROM parking_slots
        WHERE location_id=%s
        AND slot_type=%s
        AND status='Available'
        LIMIT 1
    """, (location_id, vehicle_type))

    slot = cursor.fetchone()

    if not slot:
        return jsonify({
            "message": "No Slot Available"
        })

    slot_id = slot["slot_id"]
    slot_number = slot["slot_number"]

    amount = pricing[location_id][vehicle_type] * hours

    # create user
    cursor.execute("""
        INSERT INTO users
        (full_name, phone, vehicle_no, vehicle_type)
        VALUES (%s,%s,%s,%s)
    """, (full_name, phone, vehicle_no, vehicle_type))

    user_id = cursor.lastrowid

    # booking entry
    cursor.execute("""
        INSERT INTO bookings
        (user_id, slot_id, booking_mode, booking_date,
        entry_time, exit_time, hours_parked,
        total_amount, payment_status)
        VALUES
        (%s,%s,'Online',CURDATE(),
        NOW(),NOW(),%s,%s,'Paid')
    """, (user_id, slot_id, hours, amount))

    # occupy slot
    cursor.execute("""
        UPDATE parking_slots
        SET status='Occupied'
        WHERE slot_id=%s
    """, (slot_id,))

    db.commit()

    return jsonify({
        "message": "Booking Successful",
        "slot_number": slot_number,
        "amount": amount
    })


# ---------- REPORTS ----------
@app.route("/reports", methods=["GET"])
def reports():

    cursor.execute("""
        SELECT location_id, slot_type
        FROM parking_slots
        WHERE status='Occupied'
    """)
    rows = cursor.fetchall()

    revenue = 0

    for r in rows:
        revenue += pricing[r["location_id"]][r["slot_type"]]

    occupied = len(rows)

    cursor.execute("""
        SELECT COUNT(*) total
        FROM parking_slots
    """)
    total = cursor.fetchone()

    cursor.execute("""
        SELECT COUNT(*) bookings
        FROM bookings
    """)
    bookings = cursor.fetchone()

    return jsonify({
        "revenue": revenue,
        "bookings": bookings["bookings"],
        "occupied": occupied,
        "total_slots": total["total"]
    })


if __name__ == "__main__":
    app.run(debug=True)