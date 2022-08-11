const cloudinaryConfig = require("../config/cloudinary.config.js");
const { product } = require("../models/index.js");
const productRepository = require("../repository/product.repository.js");
const jwtUtil = require("../util/jwt.util");

exports.createNewProduct = async (payload) => {
  try {
    const token = payload.headers.authorization.substring(7, payload.headers.authorization.length);
    const decodedToken = await jwtUtil.decodeToken(token);
    const uploadFoto = await cloudinaryConfig.uploader.upload(payload.files.foto.path);

    const product = {
      nama: payload.fields.nama,
      harga: payload.fields.harga,
      deskripsi: payload.fields.deskripsi,
      foto: uploadFoto.secure_url,
      id_user: decodedToken.id,
      id_kategori: payload.fields.id_kategori
    };

    return await productRepository.save(product);
  } catch (err) {
    console.error(err);
  }
};

exports.findAllProduct = async () => {
  return await productRepository.findAll();
};

exports.findProductById = async (id) => {
  return await productRepository.findById(id);
};

exports.updateProduct = async (payload, ids) => {
  try {
    const token = payload.headers.authorization.substring(7, payload.headers.authorization.length);
    const decodedToken = await jwtUtil.decodeToken(token);
    const uploadFoto = await cloudinaryConfig.uploader.upload(payload.files.foto.path);

    const product = {
      nama: payload.fields.nama,
      harga: payload.fields.harga,
      deskripsi: payload.fields.deskripsi,
      foto: uploadFoto.secure_url,
      id_kategori: payload.fields.kategori,
    };

    const productById = await productRepository.findById(ids);

    if(productById.User.id == decodedToken.id){
      if (productById == null) {
      return null;
      } else {
      return await productRepository.update(product, ids);
      }
    }else{
      return null;
    }
    
  } catch (err) {
    console.error(err);
  }
};

exports.deleteProduct = async (product) => {
  productRepository.delete(product);
};
