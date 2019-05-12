import express from 'express';
import validator from '../middleware/validator';
import userController from '../controllers/authcontrollers';

const route = express.Router();
route.post('/api/v1/auth/signup', validator.postUser, userController.postAllUser);


export default route;
