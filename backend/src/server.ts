import express from "express";
import cors from 'cors';

import { routes } from "./routes";

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
    console.log(`HTTP Server started on port ${process.env.PORT || 3333}`);
});
