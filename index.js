// importing packages
const express = require("express");
const axios = require("axios");
const { response } = require("express");
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors({
  origin: '*'
}));

require("dotenv").config();

// API Key for openWeather API
const apiKey = `${process.env.API_KEY}`;
// Port to run the app on
const PORT = process.env.PORT || 3001;

// Making API endpoints
app.post("/current", function(req, res){
  
  let lat = req.body.lat;
  let lon = req.body.lon;

  // api url to get the weather
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
  
  // hit the url to get the weather data
  axios.get(url)
  .then((response) => {
    let data = response.data;
    res.json({"data": data});
    return;
  })
  .catch((err) => {
    console.log(err);
    res.json({"error": err});
    return;
  })

});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// Making API endpoints
app.post("/forecast", function(req, res){
  
  let lat = req.body.lat;
  let lon = req.body.lon;

  // api url to get the weather
  let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
  
  // hit the url to get the weather data
  axios.get(url)
  .then((response) => {
    let data = response.data;
    res.json({"data": data});
    return;
  })
  .catch((err) => {
    console.log(err);
    res.json({"error": err});
    return;
  })

});

// Making the app to listen on Port 3001
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });