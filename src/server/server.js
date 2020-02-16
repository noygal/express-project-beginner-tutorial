const express = require('express')
const passport = require('passport')
const session = require('express-session')
const { init: authInit, authenticationMiddleware } = require('./router/auth')
const configurations = {
  server: {
    staticPath: process.env.STATIC_PATH || require('path').join(__dirname, '../../dist/'),
    port: process.env.PORT || 3000,
    healthCheckEndpoints: ['/health-check', '/hc']
  },
  auth: {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/github/callback'
  },
  logger: console
}

const create = async (config) => {
  const { logger } = config
  const { healthCheckEndpoints, staticPath, port } = config.server
  logger.info('Starting Server...')
  const app = express()

  logger.info('Mounting json body parser')
  app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }))
  app.use(express.json())
  app.use(passport.initialize())
  app.use(passport.session())

  logger.info(`Mounting health check endpoints on: ${healthCheckEndpoints}`)
  app.get(healthCheckEndpoints, (req, res) => res.json({ status: 'OK', error: false }))

  if (config.auth.clientID) {
    logger.info('Mounting github authentication')
    authInit(app, config.auth)
    app.use(authenticationMiddleware)
  } else logger.warn('NOTICE: no authentication configuration detected, server is not secured!')

  logger.info('Mounting RESTFul tasks route')
  app.use('/api/tasks', require('./router/tasks'))

  logger.info(`Mounting static middleware at: ${staticPath}`)
  app.use(express.static(staticPath))

  logger.info(`Starting listening on port: ${port}`)
  const server = app.listen(port, () => logger.info(`Serving on: http://localhost:${port}`))

  return server
}

module.exports = create(configurations)
