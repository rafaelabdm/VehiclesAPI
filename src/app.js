const { json } = require("express");
const express = require("express");
const vehicles = require("./routes/vehicles");

// Express
const app = express();

// Setting Middlewares

app.use(express.json());


// Routes

app.use("/vehicles", vehicles);


// App Startup
app.listen(80, () => console.log(`Server running at port 80...`));


