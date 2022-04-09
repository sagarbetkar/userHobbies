import express, { Application } from "express";
import morgan from "morgan";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { userController } from "./controllers/userController";
import { hobbyController } from "./controllers/hobbyController";


// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({
  path: ".env"
});

const PORT = process.env.PORT || 8000;

const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));

// MongoDB Connection
mongoose.connect(`${process.env.MONGOURI}`).catch(error => console.error(error));
mongoose.connection.on('open', () => console.log("Success in connecting to mongodb"));


// hobbies Routes
app.get('/api/v1/users', userController.getUsers);
app.post('/api/v1/create/user', userController.createUser);
app.put('/api/v1/update/user/:id', userController.updateUser);
app.delete('/api/v1/delete/user/:id', userController.deleteUser);

// Hobbies Routes
app.get('/api/v1/hobbies', hobbyController.getHobbies);
app.post('/api/v1/:userId/create/hobby', hobbyController.createHobby);
app.put('/api/v1/update/hobby/:id', hobbyController.updateHobby);
app.delete('/api/v1/delete/hobby/:id', hobbyController.deleteHobby);


app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});