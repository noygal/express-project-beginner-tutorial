const express = require('express')

const configurations = {
  server: {
    staticPath: process.env.STATIC_PATH || '../../dist',
    port: process.env.PORT || 3000,
    healthCheckEndpoints: ['/health-check', '/hc']
  },
  logger: console
}

const create = async (config) => {
  const { server, logger } = config
  const { healthCheckEndpoints, staticPath, port } = server
  logger.info('Starting Server...')
  const app = express()

  logger.info(`Mounting health check endpoints on: ${healthCheckEndpoints}`)
  app.get(healthCheckEndpoints, (req, res) => res.json({ status: 'OK', error: false }))

  logger.info(`Mounting static middleware at: ${staticPath}`)
  app.use(express.static(staticPath))

  logger.info(`Starting listening on port: ${port}`)
  await app.listen(port)

  logger.info(`Serving on: http://localhost:${port}`)
}

create(configurations)
