const passwordValidator = require('password-validator');
const schema = new passwordValidator();

schema
.is().min(8)                                    // Minimum length 8
.is().max(100)                                  // Maximum length 100
.has().uppercase()                              // Must have uppercase letters
.has().lowercase()                              // Must have lowercase letters
.has().digits(1)                                // Must have at least 1 digits
.has().not().spaces()                           // Should not have spaces
.is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values


module.exports = (req, res, next) => {
    try {
      const password = req.body.password
      if (schema.validate(password) !== true) {
          throw "Invalid password format";
      } else {
          next()
      }
    } catch {
      res.status(403).json({
        error: new Error('Invalid password format')
      });
    }
  };