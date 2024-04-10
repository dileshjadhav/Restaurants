import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {dbconnection} from "./Database/dbconnection.js";
import { errorMiddleware } from "./Errors/error.js";
import reservationrouter from "./Routers/reservationroute.js";
const app = express();
dotenv.config({path: "./config/config.env"});

app.use(
    cors({
     origin:[process.env.FRONTEND_URL],
     methods:["POST"],
     credentials:true,
    })
);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/v1/reservation',reservationrouter);

dbconnection();

app.use(errorMiddleware);



export default app;