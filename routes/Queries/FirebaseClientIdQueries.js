const Promise = require('bluebird')
const { promisify } = Promise
const pool = require('../db_connect')
const uuid = require('uuid')
const moment = require('moment')

// to run a query we just pass it to the pool
// after we're done nothing has to be taken care of
// we don't have to return any client to the pool or close a connection

const query = promisify(pool.query)

// stringify_rows: Convert each row into a string
const stringify_rows = res => res.rows.map(row => JSON.stringify(row))

const json_rows = res => res.map(row => JSON.parse(row))
//log_through: log each row
const log_through = data => {
  // console.log(data)
  return data
}


exports.saveFirebaseClientIDAndTenantRelationship = (tenant_id, firebase_client_id) => {
  const values = [tenant_id, firebase_client_id]

  const get_landlord = ``

  const return_rows = (rows) => {
    return rows[0]
  }
  return query(get_landlord, values)
    .then((data) => {
      return stringify_rows(data)
    })
    .then((data) => {
      return json_rows(data)
    })
    .then((data) => {
      return return_rows(data)
    })
    .catch((error) => {
      console.log(error)
    })
}


exports.getFirebaseClientIDFromTenantId = (tenant_id) => {
  const values = [tenant_id]

  const get_landlord = ``

  const return_rows = (rows) => {
    return rows[0]
  }
  return query(get_landlord, values)
    .then((data) => {
      return stringify_rows(data)
    })
    .then((data) => {
      return json_rows(data)
    })
    .then((data) => {
      return return_rows(data)
    })
    .catch((error) => {
      console.log(error)
    })
}
