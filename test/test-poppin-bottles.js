var assert = require("chai").assert;
var bottlesLib = require("../lib/bottlesLib");

describe("Poppin Bottles", function () {
  it("should return 1", function() {
    assert.equal(bottlesLib.buyBottles(2), 1);
  });

  it("should return 0", function() {
    assert.equal(bottlesLib.buyBottles(1), 0);
  });

  it("should return 1", function() {
    assert.equal(bottlesLib.buyBottles(3), 1);
  });

  it("should return 3", function() {
    assert.equal(bottlesLib.buyBottles(4), 3);
  });

  it("should return 3", function() {
    assert.equal(bottlesLib.buyBottles(5), 3);
  });

  it("should return 35", function() {
    assert.equal(bottlesLib.buyBottles(20), 35);
  });
});