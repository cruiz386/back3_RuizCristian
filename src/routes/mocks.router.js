import express from "express";
import User from "../models/user.js";
import Pet from "../models/pet.js";
import {generateUser, generatePet}  from "../utils/mocking.js";
import { faker } from "@faker-js/faker";



const router = express.Router();

// GET /mockingusers - Genera 50 usuarios
router.get("/mockingusers", async (req, res) => {
  const users = [];
  for (let i = 0; i < 50; i++) {
    users.push(await generateUser());
  }
  res.json(users);
});

router.get("/mockingpets", async (req, res) => {
  const pets = [];
  for (let i = 0; i < 50; i++) {
    pets.push(await generatePet());
  }
  res.json(pets);
 
})

// POST /generateData - Genera usuarios y mascotas en la BD segun los parámetros users y pets en el body
router.post("/generateData", async (req, res) => {
  const { users, pets } = req.body;
  if (!users || !pets) return res.status(400).json({ error: "Parámetros requeridos" });

  const createdUsers = [];
  for (let i = 0; i < users; i++) {
    const newUser = new User(await generateUser());
    await newUser.save();
    createdUsers.push(newUser);
  }

  for (let i = 0; i < pets; i++) {
    const owner = createdUsers[Math.floor(Math.random() * createdUsers.length)];
    const newPet = new Pet({ name: faker.person.firstName(), owner: owner._id });
    await newPet.save();
    owner.pets.push(newPet._id);
    await owner.save();
  }

  res.json({ status: "success", message: "Datos generados exitosamente en la BD de MongoDB" }); 
   

});


router.get("/pets", async (req, res) => {
    try {
        const pets = await Pet.find(); // Obtener todas las mascotas
        res.json(pets);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener mascotas", error });
    }
});

router.get("/users", async (req, res) => {
    try {
        const users = await User.find(); // Obtener todos los usuarios
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener usuarios", error });
    }
});

export default router;
