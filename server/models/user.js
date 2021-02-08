'use strict';
const {
  Model
} = require('sequelize');

 const {hashPassword} = require('../helpers/bcyrpt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Photo)
    }
  };
  User.init({
    email: {
    type :  DataTypes.STRING,
    validate:{
      notEmpty: {msg : 'email is required'},
      isEmail: {msg : 'invalid email format'}
    },
    unique: {
      msg: 'please use another email'
    }

    },  
    password: {
     type : DataTypes.STRING,
     validate : {
      notEmpty: {msg : 'password is required'},
      len : {
        args : [6],
        msg : 'Password must be at least 6 character'
      }
     }

    } 
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate:(instance,option)=>{
        instance.password = hashPassword(instance.password)
      }
    }
  });
  return User;
};