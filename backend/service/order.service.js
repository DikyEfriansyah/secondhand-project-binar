const orderRepository = require('../repository/order.repository.js');
const productRepository = require('../repository/product.repository.js');
const jwtUtil = require('../util/jwt.util.js');

exports.createTawar = async(payload) => {
    try{
        const token = payload.headers.authorization.substring(7, payload.headers.authorization.length);
        const decodedToken = await jwtUtil.decodeToken(token);

        const productById = await productRepository.findById(payload.fields.id_product);

        const menawar = {
            harga_tawar: payload.fields.harga_tawar,
            id_product: productById.id,
            id_userPembeli: decodedToken.id
        }

        if(productById.User.id == decodedToken.id){
            return null
        }else{
            return await orderRepository.save(menawar);
        }
        
    } catch (err){
        console.log(err);
    }
}

exports.getOrderByIdUser = async(payload) => {
    try{
        const token = payload.headers.authorization.substring(7, payload.headers.authorization.length);
        const decodedToken = await jwtUtil.decodeToken(token);

        const productByUserId = await orderRepository.findOrderByUserId(decodedToken.id);

        return productByUserId;

    }catch(err){
        console.log(err);
    }
}

exports.updateStatus = async (payload, ids) => {
    try{

        const orderFindById = await orderRepository.findById(ids);

        if(orderFindById != null){
            if(payload.fields.status == 1) {
                orderFindById.isAccept = true;

                console.log(orderFindById);

                await orderRepository.updateStatus(orderFindById);

            } else {
                orderFindById.isAccept = false;

                await orderRepository.updateStatus(orderFindById);
            }

            return orderFindById;

        } else {
            return null;
        }
    }catch(err){
        console.log(err);
    }
}