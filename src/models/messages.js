const db = require('../../db')
const bcrypt = require('bcrypt-as-promised')
const userModel = require('./users')
const location = '47.614445, -122.322622'

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////
//
// function getOneByUserName(username){
//   return (
//     db('users')
//     .where({ username })
//     .first()
//   )
// }

//////////////////////////////////////////////////////////////////////////////
// Create a user
//
// 1. Check to see if user already exists
//   a. if so, return a 400 with appropriate error message
// 2. Hash password
// 3. Insert record into database
// 4. strip hashed password away from object
// 5. "return/continue" promise
//////////////////////////////////////////////////////////////////////////////


function create(message,id){

  return userModel.getOneById(id)
  .then(function(user){
    return (
      db('messages')
      .insert({ users_id: user.id, message, location })
      .returning('*')
    )
  })
}

module.exports = {
  create
}
