import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";


dotenv.config();

const app = express();


app.use(express.json()); // accept json related body
app.use(cookieParser()); // as a miidlelware

// make 1st End point
app.get("/", (req, res)=>{
	res.send("Hello Guys welcome to leetlab🚩")
}) // home route


// Make 1st route of --> Authentication
app.use("/api/v1/auth", authRoutes);

app.listen(process.env.PORT, () =>{
	console.log("Server is running on port 8080");
})