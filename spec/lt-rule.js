if (typeof require !== 'undefined') {
  var Validator = require('../src/validator.js');
  var expect = require('chai').expect;
} else {
  var Validator = window.Validator;
  var expect = window.chai.expect;
}

describe('lt validation rule', function() {
  it('should fail when value is too big.', function() {
    var validator = new Validator({
      age: 2,
      bar: 1
    }, {
      age: 'lt:bar'
    });
    expect(validator.passes()).to.be.false;
  });

  it('should fail when value is equal', function() {
    var validator = new Validator({
      age: 2,
      bar: 2
    }, {
      age: 'lt:bar'
    });
    expect(validator.passes()).to.be.false;
  });

  it('should pass when value is smaller', function() {
    var validator = new Validator({
      age: 2,
      bar: 3
    }, {
      age: 'lt:bar'
    });
    expect(validator.passes()).to.be.true;
  });

  it('should pass when values are not numbers', function() {
    var validator = new Validator({
      age: 'foo',
      bar: 'something'
    }, {
      age: 'lt:bar'
    });
    expect(validator.passes()).to.be.true;
  });
});
