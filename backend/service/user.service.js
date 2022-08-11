const bcrypt = require("bcrypt");
const jwtUtil = require("../util/jwt.util.js");
const userRepository = require("../repository/user.repository");
const cloudinaryConfig = require("../config/cloudinary.config.js");

exports.createUser = async (payload) => {
  const salt = await bcrypt.genSalt(10);
  const encryptedPassword = await bcrypt.hash(payload.fields.password, salt);

  const user = {
    nama: payload.fields.nama,
    email: payload.fields.email,
    password: encryptedPassword
  };

  return await userRepository.save(user);
};

exports.signInUser = async (payload) => {
  const user = await userRepository.findByEmail(payload.fields.email);

  if (user != null) {
    const checkPassword = await bcrypt.compare(payload.fields.password, user.password);

    if (checkPassword) {
      return user;
    } else {
      return null;
    }
  } else {
    return null;
  }
};

exports.updateUser = async (payload, ids) => {
  try {
    const uploadFoto = await cloudinaryConfig.uploader.upload(payload.files.foto.path);

    const user = {
      nama: payload.fields.nama,
      kota: payload.fields.kota,
      alamat: payload.fields.alamat,
      no_hp: payload.fields.no_hp,
      foto: uploadFoto.secure_url,
    };

    const userById = await userRepository.findById(ids);

    if (userById == null) {
      return null;
    } else {
      return await userRepository.update(user, ids);
    }
  } catch (err) {
    console.error(err);
  }
};

exports.currentUser = async (request) => {
  const token = request.headers.authorization.substring(7, request.headers.authorization.length);
  const decodedToken = await jwtUtil.decodeToken(token);
  const user = await userRepository.findById(decodedToken.id);

  return user;
};
