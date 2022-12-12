'use strict'

module.exports = async function plugin (app) {
  app.log.info('plugin loaded')

  app.get('/hello', async function (request, response) {
    return { hello: 'world' }
  })
}
