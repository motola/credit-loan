import users from '../model/user';
import hash from '../helper/helper';

// this auth business logic
class UserController {
  // this is signup
  static postAllUser(req, res) {
    const newUserId = users.length + 1;
    const {
      firstName, lastName, email, address,
    } = req.body;
    const hashedPassword = hash.hashPassword(req.body.password);
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
    const userPass = hash.verifyPassword(userMail.password, password);
    if (userMail && userPass) {
      const member = users.find(user => user.email === email);
      const { token } = req;
      return res.status(200).send({
        status: 200,
        data: {
          token,
          id: member.id,
          firstName: member.firstName,
          lastName: member.lastName,
          email: member.email,

        },
      });
    // });
    }
    return res.status(404).send({
      status: 404,
      errors: 'user unseen',
    });
  }

  // mark a user as verify
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
          // Date: new Date().toLocaleString(),
        },
      });
    }
  }
}


export default UserController;
