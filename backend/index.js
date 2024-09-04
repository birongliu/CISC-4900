import 'dotenv/config'
import './database/db.js'
import './chatbot.js'
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import testModel from './database/models/test.js';

const port = 3001;

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/", async (req, res) => {
    run
})

app.listen(port, () => console.log("Listening"))