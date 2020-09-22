var jwt = require('express-jwt');
var secret = require('../config').secret;

function getTokenFromHeader(req) {
  console.log(req.headers);
  if (req.headers.authorization)
    return req.headers.authorization;
  return null;
}

function isRevokedCallback(req, payload, done) {
//  if (!req.session.userId || req.session.userId !== payload.id)
//    return done(null, true);
  return done(null, false);
}

var auth = {
  required: jwt({
    secret: secret,
    userProperty: 'payload',
    getToken: getTokenFromHeader,
    isRevoked: isRevokedCallback
  }),
  optional: jwt({
    secret: secret,
    userProperty: 'payload',
    credentialsRequired: false,
    getToken: getTokenFromHeader,
    isRevoked: isRevokedCallback
  })
};

module.exports = auth;
