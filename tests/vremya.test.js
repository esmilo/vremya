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
  it('isDate(\'2020-08-28\').after(\'2020-08-20\') should return true', function() {
    expect(isDate('2020-08-28').after('2020-08-20')).toEqual(true);
  });

  it('isDate(\'2020-08-28\').afterOrEqual(\'2020-08-28\') should return true', function() {
    expect(isDate('2020-08-28').afterOrEqual('2020-08-28')).toEqual(true);
  });
});
