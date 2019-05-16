import users from '../model/user';
import hash from '../helper/helper';

// this auth business logic
class UserController {
  // this is signup
  static postAllUser(req, res) {
    const newUserId = users.length + 1;
    const {
      firstName, lastName, email, address, password,
    } = req.body;
    const hashedPassword = hash.hashPassword(password);
    const { token } = req;
    const checkEmail = users.find(user => user.email === req.body.email);
    if (checkEmail) {
      return res.status(409).send({
        status: 409,
        Message: 'user already exist',
      });
    }
    const user = {
      id: newUserId,
      firstName,
      lastName,
      email,
      password: hashedPassword,
      address,
      status: 'unverified',
      isAdmin: 'false',
    };
    users.push(user);
    // step 4 response speculation of data generated and inpted
    return res.status(201).send({
      status: 201,
      Message: 'Account created succesfully',
      data: {
        id: user.id,
        token,
        lastName: user.lastName,
        firstName: user.firstName,
        email: user.email,
      },
    });
  }
  // end of Auth sign up

  // login a user
  static loginAUser(req, res) {
    const { email, password } = req.body;
    const userMail = users.find(user => user.email === email);
    const userPass = hash.verifyPassword(password, userMail.password);
    if (userMail && userPass) {
      const { token } = req;
      return res.status(200).send({
        status: 200,
        data: {
          token,
          id: userMail.id,
          firstName: userMail.firstName,
          lastName: userMail.lastName,
          email: userMail.email,

        },
      });
    // });
    }
    return res.status(404).send({
      status: 404,
      errors: 'user unseen',
    });
  }

  static verifyUser(req, res) {
    const verifyUser = users.find(user => user.email === req.params.email);

    if (verifyUser) {
      verifyUser.status = 'verified';
      const newStatus = verifyUser.status;
      return res.status(200).send({
        status: 200,
        Message: 'Verified successfully',
        data: {
          email: verifyUser.email,
          firstName: verifyUser.firstName,
          lastName: verifyUser.lastName,
          password: verifyUser.password,
          address: verifyUser.address,
          status: newStatus,
        },
      });
    }
  }
}


export default UserController;
