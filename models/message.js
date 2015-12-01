'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var message;

var messageSchema = Schema ({
  messageThread: Array
});

message = mongoose.model('message', messageSchema);

module.exports = message;
