const express = require("express");
const cors = require("cors");
const router = express.Router();
const authMiddleware = require("../middleware/middleware.js");
const userController = require("../controller/user.controller.js");
const productController = require("../controller/product.controller.js");
const orderController = require("../controller/order.controller.js");

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

router.use(cors(corsOptions));

router.get("/", (request, response) => {
  response.json("Index page");
});

router.post("/auth/signup", userController.createNewUserApi);
router.post("/auth/signin", userController.signUserApi);
router.put("/auth/updateprofile", authMiddleware.authorizationToken, userController.updateUserApi);
router.get("/auth/profile", authMiddleware.authorizationToken, userController.userProfileApi);

router.post("/api/v1/product", authMiddleware.authorizationToken, productController.createNewProductApi);
router.get("/api/v1/product", authMiddleware.authorizationToken, productController.findAllProductApi);
router.get("/api/v1/product/:id", authMiddleware.authorizationToken, productController.findProductByIdApi);
router.put("/api/v1/product/:id", authMiddleware.authorizationToken, productController.updateProductApi);
router.delete("/api/v1/product/:id", authMiddleware.authorizationToken, productController.deleteProduct);
router.post("/api/v1/orders", authMiddleware.authorizationToken, orderController.createOrderApi);
router.get("/api/v1/orders", authMiddleware.authorizationToken, orderController.findOrderByUserIdApi);
router.put("/api/v1/orders/:id", authMiddleware.authorizationToken, orderController.updateStatusOrderApi);

module.exports = router;
