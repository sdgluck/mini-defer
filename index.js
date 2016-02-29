'use strict'

/* global Promise:false */

/**
 * Create a deferred.
 * @returns {Object}
 */
module.exports = function defer () {
  var res, rej, promise = new Promise(function (resolve, reject) {
    res = resolve
    rej = reject
  })
  return {
    promise: promise,
    resolve: res,
    reject: rej
  }
}
