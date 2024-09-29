import express from 'express';
import dotenv from 'dotenv';
const app = express();
dotenv.config();

const PORT = process.env.example.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server alojado en ${PORT}`);
});