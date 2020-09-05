const { isDate, getCurrentDate, zeroPrefixer } = require('../index.js');

const dateObject = new Date();
const yyyy = dateObject.getFullYear();
let mm = dateObject.getMonth() + 1;
mm = mm < 10 ? '0' + mm : String(mm);

let dd = dateObject.getDate();
dd = dd < 10 ? '0' + dd : String(dd);

const currentDate = `${yyyy}-${mm}-${dd}`;

describe('after()', function () {
  it("isDate('2020-08-28').after('2020-08-20') should return true", function () {
    expect(isDate('2020-08-28').after('2020-08-20')).toEqual(true);
  });

  it("isDate('2020-11-26').after('2020-11-25') should return true", function () {
    expect(isDate('2020-11-26').after('2020-11-25')).toEqual(true);
  });

  it("isDate('2020-02-29').after('2019-02-28') should return true", function () {
    expect(isDate('2020-02-29').after('2019-02-28')).toEqual(true);
  });

  it("isDate('2020-08-20').after('2020-08-28') should return false", function () {
    expect(isDate('2020-08-20').after('2020-08-28')).toEqual(false);
  });

  it("isDate('2020-11-25').after('2020-11-26') should return false", function () {
    expect(isDate('2020-11-25').after('2020-11-26')).toEqual(false);
  });

  it("isDate('2019-02-28').after('2020-02-29') should return false", function () {
    expect(isDate('2019-02-28').after('2020-02-29')).toEqual(false);
  });
});

describe('afterOrEqual()', function () {
  it("isDate('2020-08-28').afterOrEqual('2020-08-28') should return true", function () {
    expect(isDate('2020-08-28').afterOrEqual('2020-08-28')).toEqual(true);
  });

  it("isDate('2020-11-26').afterOrEqual('2020-11-25') should return true", function () {
    expect(isDate('2020-11-26').afterOrEqual('2020-11-25')).toEqual(true);
  });

  it("isDate('2020-02-29').afterOrEqual('2019-02-28') should return true", function () {
    expect(isDate('2020-02-29').afterOrEqual('2019-02-28')).toEqual(true);
  });

  it("isDate('2020-08-20').afterOrEqual('2020-08-28') should return false", function () {
    expect(isDate('2020-08-20').afterOrEqual('2020-08-28')).toEqual(false);
  });

  it("isDate('2020-11-25').afterOrEqual('2020-11-26') should return false", function () {
    expect(isDate('2020-11-25').afterOrEqual('2020-11-26')).toEqual(false);
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

describe('today()', function () {
  it('isDate(getCurrentDate()).today() should return true', function () {
    expect(isDate(getCurrentDate()).today()).toEqual(true);
  });
});

describe('before()', function () {
  it("isDate('2020-08-28').before('2020-08-29') should return true", function () {
    expect(isDate('2020-08-28').before('2020-08-29')).toEqual(true);
  });

  it("isDate('2020-08-28').before('2020-09-28') should return true", function () {
    expect(isDate('2020-08-28').before('2020-09-28')).toEqual(true);
  });

  it("isDate('2020-08-28').before('2021-08-28') should return true", function () {
    expect(isDate('2020-08-28').before('2021-08-28')).toEqual(true);
  });

  it("isDate('2020-08-28').before('2020-08-27') should return false", function () {
    expect(isDate('2020-08-28').before('2020-08-27')).toEqual(false);
  });

  it("isDate('2020-08-28').before('2020-07-28') should return false", function () {
    expect(isDate('2020-08-28').before('2020-07-28')).toEqual(false);
  });

  it("isDate('2020-08-28').before('2012-12-12') should return false", function () {
    expect(isDate('2020-08-28').before('2012-12-12')).toEqual(false);
  });
});

describe('beforeOrEqual()', function () {
  it("isDate('2020-08-28').beforeOrEqual('2020-08-28') should return true", function () {
    expect(isDate('2020-08-28').beforeOrEqual('2020-08-28')).toEqual(true);
  });

  it("isDate('2020-08-28').beforeOrEqual('2020-08-29') should return true", function () {
    expect(isDate('2020-08-28').beforeOrEqual('2020-08-29')).toEqual(true);
  });

  it("isDate('2020-08-28').beforeOrEqual('2021-01-21') should return true", function () {
    expect(isDate('2020-08-28').beforeOrEqual('2021-01-21')).toEqual(true);
  });

  it("isDate('2020-08-28').beforeOrEqual('2020-08-27') should return false", function () {
    expect(isDate('2020-08-28').beforeOrEqual('2020-08-27')).toEqual(false);
  });

  it("isDate('2020-08-28').beforeOrEqual('2020-07-28') should return false", function () {
    expect(isDate('2020-08-28').beforeOrEqual('2020-07-28')).toEqual(false);
  });

  it("isDate('2020-08-28').beforeOrEqual('2012-12-12') should return false", function () {
    expect(isDate('2020-08-28').beforeOrEqual('2012-12-12')).toEqual(false);
  });
});

describe('equal()', function () {
  it("isDate('2020-08-28').equal('2020-08-28') should return true", function () {
    expect(isDate('2020-08-28').equal('2020-08-28')).toEqual(true);
  });

  it("isDate('2021-01-21').equal('2021-01-21') should return true", function () {
    expect(isDate('2021-01-21').equal('2021-01-21')).toEqual(true);
  });

  it("isDate('2012-12-12').equal('2012-12-12') should return true", function () {
    expect(isDate('2012-12-12').equal('2012-12-12')).toEqual(true);
  });

  it("isDate('2020-08-28').equal('2020-08-29') should return false", function () {
    expect(isDate('2020-08-28').equal('2020-08-29')).toEqual(false);
  });

  it("isDate('2020-08-28').equal('2020-08-27') should return false", function () {
    expect(isDate('2020-08-28').equal('2020-08-27')).toEqual(false);
  });

  it("isDate('2020-08-28').equal('2019-08-28') should return false", function () {
    expect(isDate('2020-08-28').equal('2019-08-28')).toEqual(false);
  });
});

describe('Invalid dates', function () {
  it('isDate().equal() should throw an error', function () {
    expect(() => isDate().equal()).toThrowError('Invalid date');
  });
  it("isDate('foobar').after('foobar') should throw an error", function () {
    expect(() => isDate('foobar').equal('foobar')).toThrowError('Invalid date');
  });
  it('isDate([]).afterOrEqual([]) should throw an error', function () {
    expect(() => isDate([]).equal([])).toThrowError('Invalid date');
  });
  it('isDate(new Date).beforeOrEqual(new Date) should throw an error', function () {
    expect(() => isDate(new Date()).equal(new Date())).toThrowError(
      'Invalid date'
    );
  });
  it('isDate(0).today(0) should throw an error', function () {
    expect(() => isDate(0).equal(0)).toThrowError('Invalid date');
  });
});

it('zeroPrefixer', function () {
  expect(zeroPrefixer(9)).toEqual('09');
  expect(zeroPrefixer(10)).toEqual('10');
});
