var smallestMultiple = require('./../smallest_multiple.js');
var chai = require('chai');
var expect = chai.expect;

describe('Smallest number', function(){

  it('that can be divided by each of the numbers from 1 to 10 without any remainder', function(){
    var result = smallestMultiple(10);
    expect(result).to.equal(2520);
  });

  it('that can be divided by each of the numbers from 1 to 20 without any remainder', function(){
    var result = smallestMultiple(20);
    expect(result).to.equal(232792560);
  });
});