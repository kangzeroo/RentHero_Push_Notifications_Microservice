const sendNotification = require('../api/firebase/firebase_send').sendNotification
const getFirebaseClientIDFromTenantId = require('./Queries/FirebaseClientIdQueries').getFirebaseClientIDFromTenantId
const saveFirebaseClientIDAndTenantRelationship = require('./Queries/FirebaseClientIdQueries').saveFirebaseClientIDAndTenantRelationship


// POST /send_notification
exports.send_notification = function(req, res, next){
  const notification = req.body.notification
  const tenant_id = req.body.tenant_id
  getFirebaseClientIDFromTenantId(tenant_id).then((clientID) => {
    return sendNotification(notification, clientID)
  }).then((data) => {
    res.json({
      message: "Successfully sent notification"
    })
  }).catch((err) => {
    console.log(err)
    res.status(500).send({
      message: 'An error occurred'
    })
  })
}

// POST /save_firebase_client
exports.save_firebase_client = function(req, res, next){
  const firebase_client_id = req.body.firebase_client_id
  const tenant_id = req.body.tenant_id
  saveFirebaseClientIDAndTenantRelationship(tenant_id, firebase_client_id).then((data) => {
    res.json(data)
  }).catch((err) => {
    console.log(err)
    res.status(500).send({
      message: 'An error occurred'
    })
  })
}
