import express from "express";
import connectDatabase from "./config/database";
import route from "./router";

const app = express();
const port = process.env.PORT || 3000;

connectDatabase();

route(app);

app.listen(port, () => {
  console.log("listening on port http://localhost:" + port);
});
