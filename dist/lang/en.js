require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./lang/en":[function(require,module,exports){
module.exports = {
  accepted: 'The :attribute must be accepted.',
  after: 'The :attribute must be after :after.',
  after_or_equal: 'The :attribute must be equal or after :after_or_equal.',
  alpha: 'The :attribute field must contain only alphabetic characters.',
  alpha_dash: 'The :attribute field may only contain alpha-numeric characters, as well as dashes and underscores.',
  alpha_num: 'The :attribute field must be alphanumeric.',
  before: 'The :attribute must be before :before.',
  before_or_equal: 'The :attribute must be equal or before :before_or_equal.',
  between: 'The :attribute field must be between :min and :max.',
  confirmed: 'The :attribute confirmation does not match.',
  email: 'The :attribute format is invalid.',
  date: 'The :attribute is not a valid date format.',
  def: 'The :attribute attribute has errors.',
  digits: 'The :attribute must be :digits digits.',
  different: 'The :attribute and :different must be different.',
  gt: {
    numeric: 'The :attribute must be greater than :value.',
    file: 'The :attribute must be greater than :value kilobytes.',
    string: 'The :attribute must be greater than :value characters.',
    array: 'The :attribute must have more than :value items.',
  },
  gte: {
    numeric: 'The :attribute must be greater than or equal :value.',
    file: 'The :attribute must be greater than or equal :value kilobytes.',
    string: 'The :attribute must be greater than or equal :value characters.',
    array: 'The :attribute must have :value items or more.',
  },
  'in': 'The selected :attribute is invalid.',
  integer: 'The :attribute must be an integer.',
  lt :{
    numeric: 'The :attribute must be less than :value.',
    file: 'The :attribute must be less than :value kilobytes.',
    string: 'The :attribute must be less than :value characters.',
    array: 'The :attribute must have less than :value items.',
  },
  lte: {
    'numeric': 'The :attribute must be less than or equal :value.',
    'file': 'The :attribute must be less than or equal :value kilobytes.',
    'string': 'The :attribute must be less than or equal :value characters.',
    'array': 'The :attribute must not have more than :value items.',
  },
  hex: 'The :attribute field should have hexadecimal format',
  min: {
    numeric: 'The :attribute must be at least :min.',
    string: 'The :attribute must be at least :min characters.'
  },
  max: {
    numeric: 'The :attribute may not be greater than :max.',
    string: 'The :attribute may not be greater than :max characters.'
  },
  not_in: 'The selected :attribute is invalid.',
  numeric: 'The :attribute must be a number.',
  present: 'The :attribute field must be present (but can be empty).',
  required: 'The :attribute field is required.',
  required_if: 'The :attribute field is required when :other is :value.',
  required_unless: 'The :attribute field is required when :other is not :value.',
  required_with: 'The :attribute field is required when :field is not empty.',
  required_with_all: 'The :attribute field is required when :fields are not empty.',
  required_without: 'The :attribute field is required when :field is empty.',
  required_without_all: 'The :attribute field is required when :fields are empty.',
  same: 'The :attribute and :same fields must match.',
  size: {
    numeric: 'The :attribute must be :size.',
    string: 'The :attribute must be :size characters.'
  },
  string: 'The :attribute must be a string.',
  url: 'The :attribute format is invalid.',
  regex: 'The :attribute format is invalid.',
  attributes: {}
};

},{}]},{},[]);
