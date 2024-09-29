import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("el diavlo");
});

app.listen(PORT, () => {
    console.log(`server alojao en ${PORT}`);
})
