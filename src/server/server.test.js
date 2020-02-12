const test = require('tape')
const fetch = require('node-fetch')
const fs = require('fs')

process.env.STATIC_PATH = require('path').join(__dirname, '../../resources/')
process.env.PORT = 3001

const serverPromise = require('./server')

test('server running', t => {
  t.plan(1)
  serverPromise
    .then(() => t.pass())
    .catch(() => t.fail())
})

test('static directory serving', t => {
  t.plan(1)
  fetch('http://localhost:3001/index.html')
    .then(res => res.text())
    .then(data => t.equal(data, fs.readFileSync(process.env.STATIC_PATH + '/index.html', 'utf-8'), 'file served'))
})

test('health check endpoint', t => {
  t.plan(1)
  fetch('http://localhost:3001/hc')
    .then(res => t.equal(res.status, 200))
})

test.onFinish(
  () => serverPromise
    .then(server => server.close())
)
