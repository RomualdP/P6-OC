const Sauce = require("../models/sauce");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, "PIIQUANTE_TOKEN");
  const userId = decodedToken.userId;
  req.auth = { userId };
  Sauce.findOne({ _id: req.params.id })
    .then((sauce) => {
      console.log(req.body);
      if (sauce.userId !== userId) {
        throw "User unauthorized";
      } else {
        next();
      }
    })
    .catch((error) => res.status(403).json({ error }));
};
