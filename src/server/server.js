const express = require('express')

const configurations = {
  server: {
    staticPath: process.env.STATIC_PATH || require('path').join(__dirname, '../../dist/'),
    port: process.env.PORT || 3000,
    healthCheckEndpoints: ['/health-check', '/hc']
  },
  logger: console
}

const create = async (config) => {
  const { logger } = config
  const { healthCheckEndpoints, staticPath, port } = config.server
  logger.info('Starting Server...')
  const app = express()

  logger.info(`Mounting health check endpoints on: ${healthCheckEndpoints}`)
  app.get(healthCheckEndpoints, (req, res) => res.json({ status: 'OK', error: false }))

  logger.info(`Mounting static middleware at: ${staticPath}`)
  app.use(express.static(staticPath))

  logger.info(`Starting listening on port: ${port}`)
  const server = app.listen(port, () => logger.info(`Serving on: http://localhost:${port}`))

  return server
}

module.exports = create(configurations)
