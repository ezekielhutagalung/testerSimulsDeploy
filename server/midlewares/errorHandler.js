module.exports = (err, req, res, next)=>{
     if(err.name === 'SequelizeValidationError' || err.name === 'SequelizeUniqueConstraintError'){
          const errors = err.errors.map(e=> e.message)
          res.status(400).json({message :errors})        
     } else if ( err.name === 'LoginError'){
        res.status(400).json({message : 'wrong email/password'})
     } else if ( err.name === 'NoJWT'){
          res.status(400).json({message : 'access token is required'})
     } else if ( err.name ===  'invalidJWT'){
          res.status(400).json({message : 'invalid access token'})
     } else {
         res.status(500).json({message : err.message || 'internal server error'})
     }



}