'use strict';

var expect = require('chai').expect;
var startIterator = require('../index');


describe('#firstIterator', function() {

  it('test new', function() {
    var result = startIterator({
      "options": {
       "clearDest": true,
       "fontsBase64": true
      },
      "src": "test/filesStart/",
      "dest": "test/filesEnd/"
    });
  });


});
