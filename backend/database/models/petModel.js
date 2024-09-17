import { Schema, model } from "mongoose";

const petModel = new Schema({
    breed: String,
    name: String,
    type: String,
    feature: String,
    
});

const pets = model("pets", petModel);


export async function create(data) {
    const result = await pets.create(data)
    return result;
}

export async function findAll() {
    return await pets.find()
} 

export async function get(name) {
    const data = await pets.findOne({
        name: { $eq: name }
    })
    if (!data) return null
    return data;
}

export async function update(name, data) {
    const pet = await get(name);
    if(!pet) return null;
    return await pets.updateOne({ name: { $eq: name } }, data);
}