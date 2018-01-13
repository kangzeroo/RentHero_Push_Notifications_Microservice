const bodyParser = require('body-parser')
// routes
const Test = require('./routes/test_routes')
const Notifications = require('./routes/notification_routes')


// bodyParser attempts to parse any request into JSON format
const json_encoding = bodyParser.json({type:'*/*'})
// bodyParser attempts to parse any request into GraphQL format
// const graphql_encoding = bodyParser.text({ type: 'application/graphql' })

module.exports = function(app){

	// routes
	app.get('/test', [json_encoding], Test.test)
	app.post('/save_firebase_client', [json_encoding], Notifications.save_firebase_client)

	// send notifications
	app.post('/send_notification', [json_encoding], Notifications.send_notification)
}
