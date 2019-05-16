import jwt from 'jsonwebtoken';


class AuthMiddleware {
  static generateToken(req, res, next) {
    req.token = jwt.sign(req.body, process.env.JWT_SECRET_KEY, {
      expiresIn: '1h',
    });
    return next();
  }
}

export default AuthMiddleware;
