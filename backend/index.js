import 'dotenv/config'
import './database/db.js'
import './chatbot.js'
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import pets from "./routes/api.pets.js"
import users from "./routes/api.users.js"
import auth from "./routes/api.auth.js"
import { authMiddleware } from './middleware/auth.middleware.js';
const port = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(cors({
    origin: process.env.FRONTEND_URL
}));

app.use("/api/auth", auth)
app.use("/api/pets",authMiddleware, pets)
app.use("/api/users", authMiddleware, users)

app.listen(port, () => console.log(`Server is running on port ${port}`));
