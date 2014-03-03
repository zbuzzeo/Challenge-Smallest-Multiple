var challenge_5 = require("../challenge_5");
 
describe("Smallest number", function () {
  
  it("that can be divided by each of the numbers from 1 to 10 without any remainder", function () {
    var smallestNumber = challenge_5.smallestMultiple(10);
    expect(smallestNumber).toEqual(2520);
  });

  it("that can be divided by each of the numbers from 1 to 20 without any remainder", function () {
    var smallestNumber = challenge_5.smallestMultiple(20);
    expect(smallestNumber).toEqual(232792560);
  });

});    