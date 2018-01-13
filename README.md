# Push Notifications Microservice (Part of Orchestra)
Try it with this POST request on POSTMAN while using an insecure Google Chrome:

1. $ /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --user-data-dir=/tmp/foo --ignore-certificate-errors --unsafely-treat-insecure-origin-as-secure=https://localhost:4000

2. POSTMAN: `
{ "notification": {
  "title": "Upcoming Tour",
  "body": "115 Albert St",
  "click_action" : "https://localhost:4000/app/dates/tours/overview",
  "icon": "https://s3.amazonaws.com/rentburrow-static-assets/Icons/favicon.png"
},

"tenant_id" : "1ebe695b-05b7-48e3-bcfa-57cb8f9828b1"

}
`
