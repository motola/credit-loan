import jwt from 'jsonwebtoken';


class AuthMiddleware {
  static generateToken(req, res, next) {
    const { id, isAdmin } = req.params;
    req.token = jwt.sign({ id, isAdmin }, process.env.JWT_SECRET_KEY, {
      expiresIn: '1h',
    });
    return next();
  }

//   static protectRoute(req, res, next) {
//     const token = req.header('x-auth-token');
//     if (!token) res.status(401).send('Acess denied');
//     try {
//       const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
//       req.user = decoded;
//       next();
//     } catch (ex) {
//       res.status(400).send('invalid token.');
//     }
//   }
}

export default AuthMiddleware;
