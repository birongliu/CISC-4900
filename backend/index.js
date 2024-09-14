import 'dotenv/config'
import './database/db.js'
import './chatbot.js'
import express from 'express';
import z from "zod"
import bodyParser from 'body-parser';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import { create, findAll, get } from './database/models/petModel.js';

const port = 3001;

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const user = {
    userID: "21211"
}
app.use(cors({
    origin: process.env.FRONTEND_URL
}));

app.post('/api/login', async(req, res) => {
    const { body } = req;
        const { userID } = body;

        //checking to make sure the user entered the correct username
        if(userID === user.userID) { 
            //if user log in success, generate a JWT token for the user with a secret key
            jwt.sign({user}, process.env.JWT_KEY, { expiresIn: '1h' },(err, token) => {
                if(err) { console.log(err) }    
                res.send(token);
            });
        } else {
            console.log('ERROR: Could not log in');
        }
})

app.get('/user/data', (req, res) => {
        //verify the JWT token generated for the user
        jwt.verify(req.headers.authorization?.split(" ")[1], process.env.JWT_KEY, (err, authorizedData) => {
            if(err){
                //If error send Forbidden (403)
                console.log('ERROR: Could not connect to the protected route');
                res.sendStatus(403);
            } else {
                //If token is successfully verified, we can send the autorized data 
                res.json({
                    message: 'Successful log in',
                    authorizedData
                });
                console.log('SUCCESS: Connected to protected route');
            }
        })
    });

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
    const data = await validate.safeParseAsync(req.body);
    if(data.error) return res.json({ data: data.error.issues, status: 400 })
    const pet = await create(req.body)
    res.json({ data: pet, status: 200 })
})


app.listen(port, () => console.log(`Server is running on port ${port}`));
