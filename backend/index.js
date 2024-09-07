import 'dotenv/config'
import './database/db.js'
import './chatbot.js'
import express from 'express';
import z from "zod"
import bodyParser from 'body-parser';
import cors from 'cors';
import { create, findAll, get } from './database/models/petModel.js';

const port = 3001;

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get("/api/pet", async (req, res) => {
    const id = req.body.id
    if(!id) return res.json({ data: "invalid id provided", status: 404 })
    const pet = await get(id)
    res.json({ data: pet ? pet : null, status: pet ? 200 : 404 })
})

app.get("/api/pets", async (req, res) => {
    const pet = await findAll()
    res.json({ data: pet, status: 200 })
})

app.post("/api/pets", async (req, res) => {
    const validate = z.object({
        breed: z.string(),
        name: z.string(),
        type: z.string(),
        feature: z.string()
    })
    console.log(req.body)
    const data = await validate.safeParseAsync(req.body);
    if(data.error) return res.json({ data: data.error.issues, status: 400 })
    const pet = await create(req.body)
    res.json({ data: pet, status: 200 })
})


app.listen(port, () => console.log(`Server is running on port ${port}`));