const bcrypt = require('bcryptjs')


function hashPassword(password){
      return bcrypt.hashSync(password,12);
}

function comparePassword(password,hashedpassword){
      return bcrypt.compareSync(password,hashedpassword);
}


module.exports = {
  hashPassword,
  comparePassword
}