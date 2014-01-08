describe("Numbers", function() {
  var number;
  
  beforeEach(function() {
    numbers = new Numbers();    
  });

  it("Should return false when passed (null)", function() {
    expect(numbers.evaluateArgs(null)).toEqual(false);
  });

  it("Should return true when passed (1)", function() {
    expect(numbers.evaluateArgs(1)).toEqual(true);
  });

  it("Should return true when passed (1, 2, 3, 9999)", function() {
    expect(numbers.evaluateArgs(1, 2, 3, 9999)).toEqual(true);
  });

  it("Should return false when passed ('1', '2', '3', '9999')", function() {
    expect(numbers.evaluateArgs("1", "2", "3", "9999")).toEqual(false);
  });

  it("Should return false when passed (1, 2, [3, 4])", function() {
    expect(numbers.evaluateArgs(1, 2, [3, 4])).toEqual(false);
  });

  it("Should return true when passed (1, NaN, 3)", function() {
    expect(numbers.evaluateArgs(1, NaN, 3)).toEqual(true);
  });
});