import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import route from "./router/userRoute.js";
import path from "path";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4050;
const URL = process.env.MONGO_URL;
app.use(bodyParser.json());
app.use(cors());


mongoose.connect(URL).then(() => {
    console.log("Database Connected Successfully");
}).catch(err => {
    console.log(err);
});


app.use("/api", route)
const __dirname = path.resolve();
app.get('/', (req, res) => {
    app.use(express.static(path.join(__dirname, 'client', 'build')))
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


