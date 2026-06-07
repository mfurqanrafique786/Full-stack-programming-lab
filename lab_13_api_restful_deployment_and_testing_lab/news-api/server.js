const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

console.log("🚀 Starting News API server...");

/*
Health Check Route
*/
app.get("/", (req, res) => {
    res.json({ message: "News API is running ✅" });
});

/*
GET NEWS BY COUNTRY
Example: /api/news/pk
*/
app.get("/api/news/:country", async (req, res) => {
    try {
        const country = req.params.country.toLowerCase();
        const apiKey = process.env.NEWS_API_KEY;

        if (!apiKey) {
            return res.status(500).json({
                message: "❌ News API key missing in .env file"
            });
        }

        const url = `https://newsapi.org/v2/top-headlines?country=${country}&pageSize=5&apiKey=${apiKey}`;

        const response = await axios.get(url);

        const articles = response.data.articles || [];

        const result = articles.map((item) => ({
            title: item.title,
            source: item.source?.name,
            url: item.url,
            publishedAt: item.publishedAt
        }));

        return res.json({
            country,
            totalResults: result.length,
            articles: result
        });

    } catch (error) {
        console.log("❌ ERROR:", error.response?.data || error.message);

        return res.status(500).json({
            message: error.response?.data?.message || "News API failed"
        });
    }
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`✅ News API running on http://localhost:${PORT}`);
});