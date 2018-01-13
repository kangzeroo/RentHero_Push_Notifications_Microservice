const axios = require('axios')
const authHeaders = require('../authHeaders').authHeaders

exports.sendNotification = function(notification, clientTokenId){
  clientTokenId = "fpHksZA11pY:APA91bFJEfbRWW2YMRxqm0Zr73RfjNb4DMddMqGdJFOY4jtlbO4Z86rq0cmlVIhRC4cTw84gzx6FwNrHKCK8QcpWhvK7fgzpta8KU2TUh3d-NSsxKskI0of3QTj_KwW-83FQnCguoOiT"
  const msg = {
    "notification": notification,
    "to" : clientTokenId
  }

  const p = new Promise((res, rej) => {
    // axios.post(`${SEARCH_MICROSERVICE}/search_buildings`, { lat, long })
    axios.post('https://fcm.googleapis.com/fcm/send', msg, authHeaders()) // { httpsAgent: agent })
      .then((data) => {
        console.log(data)
        // once we have the response, only then do we dispatch an action to Redux
        res(data)
      })
      .catch((err) => {
        rej(err)
      })
  })
  return p
}
