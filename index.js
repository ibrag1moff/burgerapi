import express from "express";
import bodyParser from "body-parser";

import burgers from "./routes/burgers.js";

const app = express();
const PORT = 8080;

app.use(bodyParser.json());

app.use("/burgers", burgers);

app.get("/", (req, res) => {
    res.send("Welcome to Burger API");
    res.send("Created by ibrag1moff");
});

app.listen(PORT, () =>
    console.log(`Server is running on http://localhost:${PORT}`)
);
