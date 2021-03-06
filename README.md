# mini-defer

> Tiny module for creating a deferred with no polyfilling

Made with ❤ at [@outlandish](http://www.twitter.com/outlandish)

<a href="http://badge.fury.io/js/mini-defer"><img alt="npm version" src="https://badge.fury.io/js/mini-defer.svg"></a>
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Install

    npm install mini-defer --save

Exported using UMD pattern, otherwise available on `window` as `miniDefer`.

## Usage

`defer() : Object`

Create a deferred.

## Example

    function operation ()
      const deferred = defer()
      const eventBasedOperation = doOperation()

      eventBasedOperation.onsuccess = deferred.resolve
      eventBasedOperation.onerror = deferred.reject

      return deferred.promise
    }

## Contributing

All pull requests and issues welcome!

If you're not sure how, check out Kent C. Dodds' [great video tutorials on egghead.io](https://egghead.io/lessons/javascript-identifying-how-to-contribute-to-an-open-source-project-on-github)!
