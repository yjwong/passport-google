var vows = require('vows');
var assert = require('assert');
var util = require('util');
var NUSNETStrategy = require('passport-nusnet/strategy');


vows.describe('NUSNETStrategy').addBatch({
  
  'strategy': {
    topic: function() {
      return new NUSNETStrategy({ returnURL: 'https://www.example.com/auth/nusnet/return' },
        function() {}
      );
    },
    
    'should be named nusnet': function (strategy) {
      assert.equal(strategy.name, 'nusnet');
    },
    'should have correct provider URL': function (strategy) {
      assert.equal(strategy._providerURL, 'https://openid.nus.edu.sg/auth');
    },
  },
  
}).export(module);
