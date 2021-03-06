require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./lang/nl":[function(require,module,exports){
module.exports = {
  accepted: 'Het :attribute veld moet geaccepteerd worden.',
  after: ':attribute moet een datum na :after zijn.',
  after_or_equal: 'De :attribute datum moet op of na :after_or_equal zijn.',
  alpha: 'Het :attribute veld mag alleen maar letters bevatten.',
  alpha_dash: 'Het :attribute veld mag alleen maar letters, cijfers en (liggende) streepjes bevatten.',
  alpha_num: 'Het :attribute veld mag alleen maar letters en cijfers bevatten.',
  before: ':attribute moet vòòr :before zijn.',
  before_or_equal: ':attribute moet vòòr of op :before_or_equal zijn.',
  between: 'Het :attribute veld moet tussen :min en :max liggen.',
  confirmed: 'Het :attribute veld komt niet met de bevestiging overeen.',
  email: 'Het :attribute veld moet een geldig emailadres zijn.',
  date: 'Het :attribute veld moet een geldige datum zijn.',
  def: 'Het :attribute veld bevat fouten.',
  digits: 'Het :attribute veld moet :digits cijfers hebben.',
  different: 'Het :attribute en :different veld moeten verschillend zijn.',
  gt: {
    numeric: ':attribute moet groter zijn dan :value.',
    file: ':attribute moet groter zijn dan :value kilobytes.',
    string: ':attribute moet meer dan :value karakters bevatten.',
    array: ':attribute moet meer dan :value waardes bevatten.',
  },
  gte: {
    numeric: ':attribute moet groter of gelijk zijn aan :value.',
    file: ':attribute moet groter of gelijk zijn aan :value kilobytes.',
    string: ':attribute moet :value karakters of meer bevatten.',
    array: ':attribute moet :value waardes of meer bevatten.',
  },
  hex: 'Het :attribute veld moet hexadecimaal zijn',
  'in': 'De gekozen waarde voor :attribute is ongeldig.',
  integer: 'Het :attribute veld moet een geheel getal zijn.',
  lt :{
    numeric: ':attribute moet kleiner zijn dan :value.',
    file: ':attribute moet kleiner zijn dan :value kilobytes.',
    string: ':attribute moet minder dan :value karakters bevatten.',
    array: 'attribute moet minder dan :value waardes bevatten.',
  },
  lte: {
    'numeric': ':attribute moet kleiner of gelijk zijn aan :value.',
    'file': ':attribute moet kleiner of gelijk zijn aan :value kilobytes.',
    'string': ':attribute moet :value karakters of minder bevatten.',
    'array': ':attribute moet :value waardes of minder bevatten.',
  },
  min: {
    numeric: 'Het :attribute veld moet minstens :min zijn.',
    string: 'Het :attribute veld moet minstens :min karakters bevatten.'
  },
  max: {
    numeric: 'Het :attribute veld mag maximaal :max zijn.',
    string: 'Het :attribute veld mag niet meer dan :max karakters bevatten.'
  },
  not_in: 'De gekozen waarde voor :attribute is ongeldig.',
  numeric: 'Het :attribute veld moet een getal zijn.',
  present: 'Het :attribute veld moet aanwezig zijn (maar mag leeg zijn).',
  required: 'Het :attribute veld moet ingevuld zijn.',
  required_if: 'Het :attribute veld moet ingevuld zijn, wanneer :other :value is.',
  required_unless: 'Het :attribute veld moet ingevuld zijn, wanneer :other niet :value is.',
  required_with: 'Het :attribute veld moet ingevuld zijn, wanneer :field niet leeg is.',
  required_with_all: 'Het :attribute veld moet ingevuld zijn, wanneer :fields niet leeg zijn.',
  required_without: 'Het :attribute veld moet ingevuld zijn, wanneer :field leeg is.',
  required_without_all: 'Het :attribute veld moet ingevuld zijn, wanneer :fields leeg zijn.',
  same: 'De :attribute en :same velden moeten overeenkomen.',
  size: {
    numeric: 'Het :attribute veld moet :size zijn.',
    string: 'Het :attribute veld moet :size karakters bevatten.'
  },
  string: 'Het :attribute veld moet een woord of zin zijn.',
  url: 'Het :attribute veld is geen geldige URL.',
  regex: 'Het :attribute veld heeft een ongeldig formaat.',
  attributes: {}
};

},{}]},{},[]);
