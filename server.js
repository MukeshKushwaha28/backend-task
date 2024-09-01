import express from "express";
// import colors from "colors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import taskRoutes from "./routes/taskRoute.js";

import cors from "cors";

//configure env
dotenv.config();

//databse config
connectDB();



//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());


//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/task", taskRoutes);


//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to task management dashboard</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on  mode on port ${PORT}`
  );
});
