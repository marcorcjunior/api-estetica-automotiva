const router = require("express").Router();
const controller = require("../controller/usuario.controller");

router.get("/find", controller.findAll);

router.get("/find/:id", controller.find);

router.post("/create", controller.create);

router.put("/update/:id", controller.update);

router.delete("/delete/:id", controller.remove);

module.exports = router;