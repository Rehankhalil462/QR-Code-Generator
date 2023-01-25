import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { createQR } from "./controllers/QRCodeController.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/public", express.static(`${process.cwd()}/public`));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.get("/heartbeat", (req, res) => {
  res.send("QR Code Generation Microservice is working.");
});

app.get("/qr", createQR);

app.listen(port, () => {
  console.log(`Server is listening at PORT ${port}`);
});
