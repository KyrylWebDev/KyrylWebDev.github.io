var app = require('../js/script.js')

describe("app", function() {
  it("it calls function sayMyName", function() {
      // prepare
      var result;
      console.log("app", app);

      // act
     result = app.sayMyName('walter white');
     console.log(result);

      // assert
    expect(result).toBe('you goddamn right');
  });
      it("POW function", function() {
      // prepare
      var result;
      console.log("app", app);

      // act
     result = app.pow(2,8);
     console.log(result);

      // assert
    expect(result).toBe(256);
  });
});
