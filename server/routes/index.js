import express from 'express';
import validator from '../middleware/validator';
import auth from '../middleware/auth';
import userController from '../controllers/authcontrollers';


const route = express.Router();
route.post('/api/v1/auth/signup', [validator.postUser, auth.generateToken], userController.postAllUser);


export default route;
