import jwt from 'jsonwebtoken';
import users from '../model/user';

// this auth business logic
class UserController {
  // this is signup
  static postAllUser(req, res) {
    const newUserId = users.length + 1;
    const token = jwt.sign({ newUserId }, process.env.JWT_SECRET_KEY, {
      expiresIn: '1h',
    });
    const user = {
      token,
      id: newUserId,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    };
    users.push(user);
    delete user.password;
    return res.status(201).send({
      status: 201,
      Message: 'Account created succesfully',
      data: user,
    });
  }
}
// }

export default UserController;
