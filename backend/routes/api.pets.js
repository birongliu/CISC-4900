import { Router } from "express"
import { findAll, get, create } from "../database/models/petModel.js"
import { z } from "zod"

const router = Router()

// example api for pets: http://localhost:3001/api/pets/apple
// will return: { "breed": "dog", "name": "apple", "type": "puppy", "feature": "cute" }
router.get("/:id",  async (req, res) => {
    const id = req.params.id
    console.log("id", id)
    if(!id) return res.json({ data: "invalid id provided", status: 404 })
    const pet = await get(id)
    res.json({ data: pet ? pet : null, status: pet ? 200 : 404 })
})

// example api for pets: http://localhost:3001/api/pets
// will return: [{ "breed": "dog", "name": "apple", "type": "puppy", "feature": "cute" }]
router.get("/", async (req, res) => {
    const pet = await findAll()
    res.json({ data: pet })
})

// example api for pets: http://localhost:3001/api/pets
// with body: { "breed": "dog", "name": "apple", "type": "puppy", "feature": "cute" }
router.post("/", async (req, res) => {
    const validate = z.object({
        breed: z.string(),
        name: z.string(),
        type: z.string(),
        feature: z.string()
    })
    const data = await validate.safeParseAsync(req.body);
    if(data.error) return res.json({ data: data.error.issues, status: 400 })
    const pet = await create(req.body)
    res.json({ data: pet})
})

export default router
