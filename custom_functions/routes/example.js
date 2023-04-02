'use strict';

const diffHelper = require('../helpers/diff');

// eslint-disable-next-line no-unused-vars,require-await
module.exports = async (server, { hdbCore, logger }) => {
  server.route({
    url: '/',
    method: 'POST',
    handler: (request) => diffHelper(request.body.before, request.body.after)
  });
}
