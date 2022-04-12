const express = require("express");
const router = express.Router();
const userCtrl = require('../controllers/user');
const passvalid = require("../middleware/passvalid");

router.post("/signup", passvalid, userCtrl.signup);
router.post("/login",  userCtrl.login);


module.exports = router;