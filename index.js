/* global define:false window:false, Promise:false */
'use strict'

function defer () {
  var res, rej, promise = new Promise(function (rs, rj) { res = rs; rej = rj })
  return { promise: promise, resolve: res, reject: rej }
}

if (typeof define === 'function' && define.amd) {
  define('miniDefer', function () { return defer })
} else if (typeof module === 'object' && module.exports) {
  module.exports = defer
} else if (typeof window !== 'undefined') {
  window.miniDefer = defer
} else {
  console.log('[mini-defer] env unsupported')
}
