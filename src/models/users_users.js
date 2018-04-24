const db = require('../../db')
const bcrypt = require('bcrypt-as-promised')
const userModel = require('./users')


function create(friends_id,id){

  return userModel.getOneById(id)
  .then(function(user){
    return (
      db('users_users')
      .insert({ users_id: user.id, friends_id })
      .returning('*')
    )
  })
}

module.exports = {
  create
}
