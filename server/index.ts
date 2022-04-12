import express, { Application } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import usersRouter from './routes/users';
import hobbiesRouter from './routes/hobbies';


// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({
  path: ".env"
});


const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

// MongoDB Connection
mongoose.connect(`${process.env.MONGOURI}`).catch(error => console.error(error));
mongoose.connection.on('open', () => console.log("Success in connecting to mongodb"));


const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'UserHobbies API',
      version: '1.0.0',
      description: "A samll UserHobbies app API"
    },
    servers: [
      {
        url: 'http://localhost:4000/api/v1',
        description: "Development Server"
      }
    ]
  },
  apis: ["./routes/*.ts"] // files containing annotations as above
};

const openapiSpecification = swaggerJSDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));
app.use('/api/v1/users', usersRouter); // Users Routes
app.use('/api/v1/hobbies', hobbiesRouter); // Hobbies Routes

export default app