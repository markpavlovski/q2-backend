exports.seed = function(knex, Promise) {

  return knex('messages').del()
    .then(function () {
      return knex('users').del()
    })
}
