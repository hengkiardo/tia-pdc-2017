'use strict'

const moment = require('moment')
const started = {}

const timing = {
  start: function (name) {
    started[name] = moment()
  },

  finish: function (name) {
    var finished = moment()
    var duration = moment.duration(finished.diff(started[name]))

    return duration
  }
}

module.exports = timing
