const router = require("express").Router();
const controller = require("../controller/auth.controller");

router.post("/login", controller.auth);

router.post("/login-validar", controller.validaToken);

module.exports = router;