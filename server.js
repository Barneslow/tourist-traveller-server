const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const dotenv = require("dotenv");
const { randomThreeFromArray } = require("./math");
dotenv.config({ path: "./.env" });

app.use(express.json());
app.use(
  cors({
    origin: "https://barneslow-travels.netlify.app/",
  })
);

app.post("/", async (req, res) => {
  const { query } = req.body;

  const { data } = await axios(
    ` https://maps.googleapis.com/maps/api/place/textsearch/json?query=points+of+interest+in+${query}&key=${process.env.GOOGLE_PLACES_API_KEY}`
  );

  const { results } = data;

  if (!results) res.json("NO RESULTS");

  if (results < 3) {
    return;
  }

  if (results && results.length > 3) {
    const randomThreeResults = randomThreeFromArray(results);
    res.json(randomThreeResults);
  } else {
    res.json("NO RESULTS");
  }
});

app.get("/", (req, res) => {
  res.send("lol");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
