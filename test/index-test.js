var vows = require('vows');
var assert = require('assert');
var util = require('util');
var nusnet = require('passport-nusnet');


vows.describe('passport-nusnet').addBatch({
  
  'module': {
    'should report a version': function (x) {
      assert.isString(nusnet.version);
    },
  },
  
}).export(module);
