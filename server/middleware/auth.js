import jwt from 'jsonwebtoken';
import users from '../model/user';


class AuthMiddleware {
  static generateToken(req, res, next) {
    req.token = jwt.sign({ isAdmin: users.isAdmin, id: users.id }, process.env.JWT_SECRET_KEY, {
      expiresIn: '48h',
    });
    return next();
  }
}

export default AuthMiddleware;
