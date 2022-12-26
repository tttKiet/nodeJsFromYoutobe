import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/web";
import connection from "./configs/connectDB";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// co the dung body parser

// setup view engine
configViewEngine(app);

// init web routes
initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
