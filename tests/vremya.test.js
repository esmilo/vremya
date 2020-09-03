/**
 *
 * getCurrentDate();
 *
 * isDate(firstDate).after(secondDate);
 * isDate(firstDate).afterOrEqual(secondDate);
 * isDate(firstDate).before(secondDate);
 * isDate(firstDate).beforeOrEqual(secondDate);
 *
 * isDate(firstDate).equal(secondDate);
 * isDate(firstDate).equal(getCurrentDate());
 * isDate(date).today();
 *
 */
const currentDateObject = new Date();
const currentDateISOString = new Date(
  `${currentDateObject.getFullYear()}-${currentDateObject.getMonth()}-${currentDateObject.getDate()} GMT`
).toISOString();
const currentDate = currentDateISOString.slice(
  0,
  currentDateISOString.indexOf('T')
);

describe('after()', function () {
  it("isDate('2020-08-28').after('2020-08-20') should return true", function () {
    expect(isDate('2020-08-28').after('2020-08-20')).toEqual(true);
  });

  it("isDate('2020-11-25').after('2020-11-26') should return true", function () {
    expect(isDate('2020-11-25').after('2020-11-26')).toEqual(true);
  });

  it("isDate('2020-02-29').after('2019-02-28') should return true", function () {
    expect(isDate('2020-02-29').after('2019-02-28')).toEqual(true);
  });

  it("isDate('2020-08-20').after('2020-08-28') should return false", function () {
    expect(isDate('2020-08-20').after('2020-08-28')).toEqual(false);
  });

  it("isDate('2020-11-26').after('2020-11-25') should return false", function () {
    expect(isDate('2020-11-26').after('2020-11-25')).toEqual(false);
  });

  it("isDate('2019-02-28').after('2020-02-29') should return false", function () {
    expect(isDate('2019-02-28').after('2020-02-29')).toEqual(false);
  });
});

describe('afterOrEqual()', function () {
  it("isDate('2020-08-28').afterOrEqual('2020-08-28') should return true", function () {
    expect(isDate('2020-08-28').afterOrEqual('2020-08-28')).toEqual(true);
  });

  it("isDate('2020-11-25').afterOrEqual('2020-11-26') should return true", function () {
    expect(isDate('2020-11-25').afterOrEqual('2020-11-26')).toEqual(true);
  });

  it("isDate('2020-02-29').afterOrEqual('2019-02-28') should return true", function () {
    expect(isDate('2020-02-29').afterOrEqual('2019-02-28')).toEqual(true);
  });

  it("isDate('2020-08-20').afterOrEqual('2020-08-28') should return false", function () {
    expect(isDate('2020-08-20').afterOrEqual('2020-08-28')).toEqual(false);
  });

  it("isDate('2020-11-26').afterOrEqual('2020-11-25') should return false", function () {
    expect(isDate('2020-11-26').afterOrEqual('2020-11-25')).toEqual(false);
  });

  it("isDate('2019-02-28').afterOrEqual('2020-02-29') should return false", function () {
    expect(isDate('2019-02-28').afterOrEqual('2020-02-29')).toEqual(false);
  });
});

describe('getCurrentDate()', function () {
  it("getCurrentDate() should return correct date taken from user's machine", function () {
    expect(getCurrentDate()).toEqual(currentDate);
  });
});

describe('today()', function() {
  it("isDate(getCurrentDate()).today()", function() {
    expect(isDate(getCurrentDate()).today()).toEqual(true);
  });
});
