const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// 👇 check if API key is loaded
console.log("API KEY LOADED:", process.env.WEATHER_API_KEY);

app.get("/api/weather/:city", async (req, res) => {
    try {
        const city = req.params.city;

        if (!city) {
            return res.status(400).json({
                message: "City is required"
            });
        }

        const apiKey = process.env.WEATHER_API_KEY;

        if (!apiKey) {
            return res.status(500).json({
                message: "API key missing in .env file"
            });
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        console.log("Request URL:", url);

        const response = await axios.get(url);

        const data = response.data;

        res.json({
            city: data.name,
            temperature: data.main.temp,
            weather: data.weather[0].main,
            humidity: data.main.humidity
        });

    } catch (error) {
        console.log("ERROR DETAILS:", error.response?.data || error.message);

        return res.status(500).json({
            message: error.response?.data?.message || error.message
        });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Weather API running on port ${PORT}`);
});