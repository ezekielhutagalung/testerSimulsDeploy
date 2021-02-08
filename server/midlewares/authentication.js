const {verifyJWT} = require('../helpers/jwt')
const {User} = require('../models')

    
const authentication = async(req,res,next)=>{

   try{
      const access_token = req.headers.access_token
        
      let decode = verifyJWT(access_token)

      if(!decode){throw {name : 'NoJWT'} }
   
     const user = await User.findByPk(decode.id)
       if(!user){ throw {name : 'invalidJWT'}}

     req.user = user

      next()

   } catch(err){
      next(err)
   }


}

module.exports= authentication