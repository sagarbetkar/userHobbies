import express, { Application } from "express";
import morgan from "morgan";
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({
  path: ".env"
});

const PORT = process.env.PORT || 8000;

const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));

// MongoDB Connection
mongoose.connect('mongodb+srv://sagarbetkar:oozou%40123@cluster0.7xpb7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .catch(error => console.error(error));
mongoose.connection.on('open', () => console.log("Success in connecting to mongodb"));

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});