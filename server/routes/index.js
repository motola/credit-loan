import express from 'express';
import validator from '../middleware/validator';
import auth from '../middleware/auth';
import admin from '../middleware/admin';
import userController from '../controllers/authcontrollers';
import loanController from '../controllers/loancontrollers';

const route = express.Router();
route.post('/api/v1/auth/signup', [validator.postUser, auth.generateToken], userController.postAllUser);
route.post('/api/v1/auth/signin', validator.loginUser, userController.loginAUser);
route.patch('/api/v1/users/:email/verify', [auth.generateToken, admin.isAdmin], userController.verifyUser);

// loans route and controllers

route.get('/api/v1/loans', [auth.generateToken, admin.isAdmin], loanController.getallLoans);
route.get('/api/v1/loans/:id', loanController.getSingleLoan);

export default route;
