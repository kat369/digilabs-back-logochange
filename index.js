import express from "express";
import db from "./DB/Connect.js";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import ImageRoutes from "./Routes/imageupload.route.js";
import ClientRoutes from "./Routes/pro-clientdata.route.js";
import WebsiteRoutes from "./Routes/website.route.js"

dotenv.config();
db();

const app = express();
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}));
app.use(bodyParser.json({limit:'30mb',extended:true}));
app.use(cors());
const PORT = 5002;

app.get("/", function (request, response) {
  response.send("Welcome to the Mode UI server");
});

app.use("/api/image", ImageRoutes);
app.use("/api/clientdata", ClientRoutes);
app.use("/api/Websitedata", WebsiteRoutes);

app.use(express.static('uploads'));
app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));