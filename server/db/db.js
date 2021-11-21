const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

/* EXAMPLES

const getAll = (db = connection) => {
  return db('table')
}

const getById = (id, db = connection) => {
  return db('table')
    .where('id', id)
    .first()
}

const add = (item, db = connection) => {
    return db('table')
      .insert(item)
}

const update = (id, item, db = connection) => {
  return db('table')
    .update(item)
    .where('id', id)
}

const remove = (id, db = connection) => {
  return db('table')
    .delete()
    .where('id', id)
}

module.exports = {
    getAll,
    getById,
    add,
    update,
    remove
}

*/
