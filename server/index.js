import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

// components
import Connection from "./database/connection.js";
import router from "./routes/route.js";

const app = express();

app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});

Connection(MONGO_URL);
