const express = require("express");
const cors = require("cors"); // 1. Imported CORS package
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Import Routes
const authRoutes = require("./routes/authRoutes");
const testRoutes = require("./routes/testRoutes"); 
const doctorRoutes = require("./routes/doctorRoutes"); 
const patientRoutes = require("./routes/patientRoutes"); 
const appointmentRoutes = require("./routes/appointmentRoutes"); 
const treatmentRoutes = require("./routes/treatmentRoutes"); 
const prescriptionRoutes = require("./routes/prescriptionRoutes"); 
const notificationRoutes = require("./routes/notificationRoutes"); // Added notification routes

// Load environment variables
dotenv.config();

// Connect to Database
connectDB();

const app = express();

// Middleware
// 2. Configured CORS to allow your Next.js/React frontend (localhost:3000)
app.use(cors({
    origin: "http://localhost:3000", 
    credentials: true
}));

app.use(express.json());

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes); 
app.use("/api/doctors", doctorRoutes); 
app.use("/api/patients", patientRoutes); 
app.use("/api/appointments", appointmentRoutes); 
app.use("/api/treatments", treatmentRoutes); 
app.use("/api/prescriptions", prescriptionRoutes); 
app.use("/api/notifications", notificationRoutes); // Connected notification routes

// Base Route
app.get("/", (req, res) => {
    res.send("Hospital Management API Running");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});