import { GoogleGenerativeAI } from "@google/generative-ai";
import { Router } from "express"

const router = Router();

//feed gemini the new user questionare answer to get user's pet preference
router.get('/', async (req, res) => {
    const response = await fetch('http://localhost:3001/api/pets')
    const petData = JSON.stringify(await response.json())
    console.log(petData)
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const message = req.body.message;
    console.log(message)
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = 'Analyze the user\'s words to recommend three most relavant dog or cat from the given data , don\'t explain.' 
    const result = await model.generateContent([prompt, message, petData])
    console.log(result.response.text());
    res.json(result.response.text())
}) 

export default router;