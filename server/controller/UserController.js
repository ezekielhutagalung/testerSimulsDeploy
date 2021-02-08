const {User} = require('../models')
const {signJWT} = require('../helpers/jwt')
const {comparePassword} = require('../helpers/bcyrpt')


class UserController{

      static UserRegisterHandler(req,res,next){

          User.create({

            email: req.body.email,
            password: req.body.password

          }).then(user=>{
              console.log(user.password)
              res.status(201).json({
                  id: user.id,
                  email : user.email
              })
          }).catch(err=>{
              next(err)
          })

      }

      static UserLoginHandler(req,res,next){
          User.findOne({
              where: { email :req.body.email}
          })
          .then(user=>{
              //console.log(user)
              if(user && comparePassword(req.body.password,user.password)){
                const access_token = signJWT({
                    id: user.id
                });
                res.status(200).json({access_token})
              }else{
                 next({name:"LoginError"})
              }
          }).catch(err=>{
              next(err)
          })
      }
}

module.exports = UserController