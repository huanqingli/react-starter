/**
 * Created by Muc on 17/3/28.
 */
// import compression from 'compression'
const express = require('express')
const path = require('path')

const app = express()

app.use('/public', express.static(path.resolve(__dirname, '../public/')))

app.post('/api/login/:firstName/:lastName/:email', (request, response) => {
  response.send(request.params)
})

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../index.dev.html'))
})

const WEB_PORT = 8000

app.listen(WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${WEB_PORT}.\nKeep "yarn wds" running in an other terminal'.`)
})
