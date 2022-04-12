const express = require("express");
const router = express.Router();
const sauceCtrl = require('../controllers/sauce');
const auth = require('../middleware/auth');
const isAuthorized = require("../middleware/isAuthorized");
const multer = require('../middleware/multer-config');

router.post("/", auth, multer,  sauceCtrl.createSauce); 
router.post('/:id/like', auth, sauceCtrl.likeSauce);
router.put("/:id", auth, isAuthorized, multer, sauceCtrl.modifySauce);  
router.delete("/:id", auth, isAuthorized, sauceCtrl.deleteSauce);
router.get("/:id",auth, sauceCtrl.getOneSauce);
router.get('/', auth, sauceCtrl.getAllSauces );

module.exports = router;