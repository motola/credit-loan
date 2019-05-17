import express from 'express';
import validator from '../middleware/validator';
import auth from '../middleware/auth';
import admin from '../middleware/admin';
import userController from '../controllers/authcontrollers';
import loanController from '../controllers/loancontrollers';
import repayment from '../controllers/repaymentscontroller';

const route = express.Router();
route.post('/api/v1/auth/signup', [validator.postUser, auth.generateToken], userController.postAllUser);
route.post('/api/v1/auth/signin', [validator.loginUser, auth.generateToken], userController.loginAUser);
route.patch('/api/v1/users/:email/verify', [auth.generateToken, admin.isAdmin], userController.verifyUser);

// loans route and controllers

route.get('/api/v1/loans', [auth.generateToken, admin.isAdmin], loanController.getallLoans);
route.get('/api/v1/loans/:id', loanController.getSingleLoan);
route.post('/api/v1/loans', loanController.postLoans);

// route for repayments
route.get('/api/v1/loans/:loanId/repayments', [auth.generateToken, admin.isAdmin], repayment.viewHistory);
route.patch('/api/v1/loans/:id', loanController.checkStatus);
route.post('/api/v1/loans/:id/repayment', repayment.loanRecord);

export default route;
