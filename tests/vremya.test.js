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

describe('after() and afterOrEqual()', function () {
  it('isDate(\'2020-08-28\').after(\'2020-08-20\') should return true', function () {
    expect(isDate('2020-08-28').after('2020-08-20')).toEqual(true);
  });

  it('isDate(\'2020-08-28\').afterOrEqual(\'2020-08-28\') should return true', function () {
    expect(isDate('2020-08-28').afterOrEqual('2020-08-28')).toEqual(true);
  });
});

describe('before()', function () {
  it('isDate(\'2020-08-28\').before(\'2020-08-29\') should return true', function () {
    expect(isDate('2020-08-28').before('2020-08-29')).toEqual(true);
  })

  it('isDate(\'2020-08-28\').before(\'2020-09-28\') should return true', function () {
    expect(isDate('2020-08-28').before('2020-09-28')).toEqual(true);
  })

  it('isDate(\'2020-08-28\').before(\'2021-08-28\') should return true', function () {
    expect(isDate('2020-08-28').before('2021-08-28')).toEqual(true);
  })

  it('isDate(\'2020-08-28\').before(\'2020-08-27\') should return false', function () {
    expect(isDate('2020-08-28').before('2020-08-27')).toEqual(false);
  })

  it('isDate(\'2020-08-28\').before(\'2020-07-28\') should return false', function () {
    expect(isDate('2020-08-28').before('2020-07-28')).toEqual(false);
  })

  it('isDate(\'2020-08-28\').before(\'2012-12-12\') should return false', function () {
    expect(isDate('2020-08-28').before('2012-12-12')).toEqual(false);
  })
})

describe('beforeOrEqual()', function () {
  it('isDate(\'2020-08-28\').beforeOrEqual(\'2020-08-28\') should return true', function () {
    expect(isDate('2020-08-28').beforeOrEqual('2020-08-28')).toEqual(true);
  })

  it('isDate(\'2020-08-28\').beforeOrEqual(\'2020-08-29\') should return true', function () {
    expect(isDate('2020-08-28').beforeOrEqual('2020-08-29')).toEqual(true);
  })

  it('isDate(\'2020-08-28\').beforeOrEqual(\'2021-01-21\') should return true', function () {
    expect(isDate('2020-08-28').beforeOrEqual('2021-01-21')).toEqual(true);
  })

  it('isDate(\'2020-08-28\').beforeOrEqual(\'2020-08-27\') should return false', function () {
    expect(isDate('2020-08-28').beforeOrEqual('2020-08-27')).toEqual(false);
  })

  it('isDate(\'2020-08-28\').beforeOrEqual(\'2020-07-28\') should return false', function () {
    expect(isDate('2020-08-28').beforeOrEqual('2020-07-28')).toEqual(false);
  })

  it('isDate(\'2020-08-28\').beforeOrEqual(\'2012-12-12\') should return false', function () {
    expect(isDate('2020-08-28').beforeOrEqual('2012-12-12')).toEqual(false);
  })
})

describe('equal()', function() {
  it('isDate(\'2020-08-28\').equal(\'2020-08-28\') should return true', function () {
    expect(isDate('2020-08-28').equal('2020-08-28')).toEqual(true);
  })

  it('isDate(\'2021-01-21\').equal(\'2021-01-21\') should return true', function () {
    expect(isDate('2021-01-21').equal('2021-01-21')).toEqual(true);
  })

  it('isDate(\'2012-12-12\').equal(\'2012-12-12\') should return true', function () {
    expect(isDate('2012-12-12').equal('2012-12-12')).toEqual(true);
  })

  it('isDate(\'2020-08-28\').equal(\'2020-08-29\') should return true', function () {
    expect(isDate('2020-08-28').equal('2020-08-29')).toEqual(true);
  })

  it('isDate(\'2020-08-28\').equal(\'2020-08-27\') should return true', function () {
    expect(isDate('2020-08-28').equal('2020-08-27')).toEqual(true);
  })

  it('isDate(\'2020-08-28\').equal(\'2019-08-28\') should return true', function () {
    expect(isDate('2020-08-28').equal('2019-08-28')).toEqual(true);
  })
})
