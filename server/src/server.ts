import "dotenv/config";
import env from "./helpers/validateEnv";
import cors from "cors";
import mongoose from "mongoose";
import express from "express";

// Server configuration
const app = express();
app.use(cors());
app.use(express.json());

// Server call
app.get("/", (req, res) => {
  return res.json({
    succes: true,
    message: "Backend is running well",
  });
});

app.use("*", (req, res) => {
  return res.status(404).send({
    success: false,
    message: "Resource not found",
  });
});

const port = env.PORT;
mongoose
  .connect(env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("Mongoose connected");
    app.listen(port, () => {
      console.log(`Server is running well on Port: ${port}`);
    });
  })
  .catch(console.error);
