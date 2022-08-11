const userService = require("../service/user.service.js");
const jwtUtill = require("../util/jwt.util.js");

exports.createNewUserApi = async (req, res) => {
  const user = await userService.createUser(req);

  res.status(201).json({ data: user });
  console.log(user);
};

exports.signUserApi = async (req, res) => {
  const user = await userService.signInUser(req);
  if (user) {
    const payloadToken = {
      id: user.id,
      email: user.email,
    };

    const tokens = await jwtUtill.generateToken(payloadToken);

    res.status(200).json({ token: tokens });
  } else {
    res.status(401).json({ error: "Unauthorized access" });
  }
};

exports.updateUserApi = async (request, response) => {
  const token = request.headers.authorization.substring(7, request.headers.authorization.length);
  const decodedToken = await jwtUtill.decodeToken(token);
  const user = await userService.updateUser(request, decodedToken.id);

  if (user == null) {
    response.status(404).json({ error: `User not found with ids : ${decodedToken.id}` });
  } else {
    response.json({ message: "Updated successfully" });
  }
};

exports.userProfileApi = async (req, res) => {
  const user = await userService.currentUser(req);

  res.json({ data: user });
};
