var Users = require('./users.model');
import validationHandler from '../validate.handler';

export function setUser(req, res, next) {
  req
    .getValidationResult()
    .then(validationHandler())
    .then(() => {
      const { name, gender, email, phone, address } = req.body;

      var newUser = Users({
        name: name,
        gender: gender,
        email: email,
        phone: phone,
        address: address
      });
      newUser.save(function (err, user) {
        if (err) {
          return res.status(500).send({
            err: true, msg: "Oops some bad happened .. ;)", data: err
          });
        } else {
          res.status(200).send({
            err: false, msg: "User created :)", data: user
          });
        }
      });
    })
    .catch(next)
}

export function getUser(req, res) {
  Users.find(
    {}, function (err, users) {
      if (err) {
        return res.status(500).send(
          { err: true, msg: "Oops some bad happened .. ;)" }
        );
      } else {
        if (users.length > 0) {
          return res.status(200).send({
            err: false, msg: 'Success :)', data: users
          });
        } else {
          return res.status(200).send({
            err: false, msg: 'Users not found :(', data: users
          });
        }
      }
    });
}

export function getUserId(req, res) {
  Users.findById(req.params.id, function (err, user) {
    if (err) return res.status(500).send({
      err: true, msg: "Something wrong :("
    });
    if (!user) return res.status(404).send({
      err: true, msg: "User not found :("
    });
    res.status(200).send({
      err: false, data: user, msg: "Success :)"
    });
  });
}

export function putUserId(req, res) {
  Users.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, user) {
    if (err) return res.status(500).send({
      err: true, msg: "Something wrong :("
    });
    if (!user) return res.status(404).send({
      err: true, msg: "User not found :("
    });
    res.status(200).send({
      err: false, data: user, msg: "Success :)"
    });
  });
}

export function deleteUserId(req, res) {
  Users.remove({ _id: req.params.id }, function (err, user) {
    if (err) return res.status(500).send({
      err: true, msg: "Something wrong :("
    });
    if (!user) return res.status(404).send({
      err: true, msg: "User not found :("
    });
    res.status(200).send({
      err: false, msg: "User deleted :)"
    });
  });
}
