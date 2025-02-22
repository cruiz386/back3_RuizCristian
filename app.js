import express from 'express';
import dotenv from 'dotenv';
import mocksRouter from "./src/routes/mocks.router.js";
import mongoose from "mongoose";


dotenv.config(); 
const app = express(); 
const PORT = process.env.PORT || 8080; 

// Middleware para permitir recibir JSON
app.use(express.json()); 

// Middleware para recibir datos codificados en URL (si es necesario)
app.use(express.urlencoded({ extended: true }));

app.use("/api/mocks", mocksRouter);


const startServer = async () => {
    try {
        await mongoose.connect(process.env.DB_LINK, {

            serverSelectionTimeoutMS: 5000, // Espera máximo 5s para conectar
        });
        console.log("✅ Conectado a MongoDB");

        // Iniciar servidor solo si la conexión es exitosa
        app.listen(PORT, () => {
            console.log(`🚀 Servidor listo en http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error("❌ Error de conexión a MongoDB:", error);
        process.exit(1); // Cerrar la app si falla la conexión
    }
};

// Iniciar conexión y servidor
startServer();
