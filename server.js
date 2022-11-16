const express = require("express");
require("dotenv").config();
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
mongoose.connect(
   process.env.MONGO_URL,
   {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
   },
   () => {
      console.log("MongoDB Connected!");
   }
);

//middleware
app.use(express.json());

app.get("/", (req, res) => {
   res.send("Welcome to Homepage...");
});

app.listen(port, () => {
   console.log("[1] Backend is running!!");
   console.log(`Server running on ${port}, http://localhost:${port}`);
});