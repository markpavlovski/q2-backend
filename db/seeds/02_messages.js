const TABLE_NAME = 'messages'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, users_id: 1, location: '47.614445, -122.322622', message: 'hello'},
        {id: 2, users_id: 1, location: '47.614445, -122.322622', message: 'world'},
        {id: 3, users_id: 2, location: '47.614445, -122.322622', message: 'woof'},
        {id: 4, users_id: 2, location: '47.614445, -122.322622', message: 'woof woof'}
      ])
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
}
