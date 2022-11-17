const express = require("express");
require("dotenv").config();
const app = express();
const userRoute = require("./routes/users");
const mongoose = require("mongoose");
const port = process.env.PORT || 5500;
const db = mongoose.connection;
mongoose.connect(
   process.env.MONGO_URL,
   {
      useUnifiedTopology: true,
      useNewUrlParser: true
   },
   () => {
      console.log("[3] MongoDB Connected!");
   }
);

//middleware
app.use(express.json());
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
   res.send(`Welcome to App...`);
});


// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));


app.listen(port, () => {
   console.log("[1] Backend is running!!");
   console.log(`[2] Server running on ${port}`);
});