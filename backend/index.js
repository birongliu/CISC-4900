import 'dotenv/config'
import './database/db.js'
import './chatbot.js'
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { findAll, get } from './database/models/petModel.js';

const port = 3001;

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/api/pet", async (req, res) => {

    const id = req.body.id
    if(!id) return res.json({ data: "invalid id provided", status: 404 })
    const pet = await get(id)
    res.json({ data: pet ? pet : "no ", status: pet ? 200 : 500 })
})

app.get("/api/pets", async (req, res) => {
    const pet = await findAll()
    res.json({ data: pet, status: 200 })
})

app.listen(port, () => console.log("Listening"))