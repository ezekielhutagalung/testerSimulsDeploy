const {Photo} = require('../models')


class PhotoController{
  
     static findAll(req,res,next){
        //console.log(req.user) 
        Photo.findAll ({
             where : {
                 UserId : req.user.id
             }
         }).then(photos =>{
             console.log(photos)
             res.status(200).json({photos})
         }).catch(err=>{
             next(err)
         })

    // console.log(req.body, req.query)
     }
   

}


module.exports = PhotoController