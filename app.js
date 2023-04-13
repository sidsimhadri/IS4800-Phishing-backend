import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import HelloController
    from "./controllers/hello-controller.js";
import UserController from './controllers/user/users-controller.js';
import dataController from './controllers/data/data-controller.js';
import PasswordController from './controllers/passwords/password-controller.js'
import mongoose from "mongoose";
dotenv.config()
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
 || 'mongodb://127.0.0.1:27017/logs'
mongoose.connect(CONNECTION_STRING);
const app = express()
app.use(cors())
app.use(express.json());
dataController(app);
HelloController(app)
UserController(app)
PasswordController(app);
app.listen(process.env.PORT || 4000);