import jwt from 'jsonwebtoken';

class adminAuth {
  static isAdmin(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token) {
      return res.status(401).send({ error: 'token not provided' });
    }
    jwt.verify(token, process.env.JWT_SECRET_KEY, (error, decoded) => {
      req.user = decoded;
      if (error) {
        return res.status(400).send({ error: 'invalid token' });
      }
      if (!req.user.isAdmin === 'true') {
        return next();
      }
    });

    return next();
    // const { isAdmin } = req.user;
    // if (isAdmin === false) return res.status(403).send('Acess denied');
    // next();
  }
}

export default adminAuth;
