import express from "express";
import connectDatabase from "./config/database";
import route from "./router";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connectDatabase();

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
route(app);

console.log(process.env.TEST);

app.listen(port, () => {
  console.log("listening on port http://localhost:" + port);
});
