const v = {
  getCurrentDate() {
    const dateObject = new Date();
    const yyyy = dateObject.getFullYear();
    let mm = dateObject.getMonth() + 1;
    mm = v.zeroPrefixer(mm);

    let dd = dateObject.getDate();
    dd = v.zeroPrefixer(dd);

    return `${yyyy}-${mm}-${dd}`;
  },
  zeroPrefixer(n) {
    return n < 10 ? '0' + n : String(n);
  },
  getTimestamp(date) {
    const timestamp = new Date(date + ' GMT').getTime();
    if (typeof date !== 'string') throw new Error('Invalid date');

    if (isNaN(timestamp)) throw new Error('Invalid date');

    return timestamp;
  },
  isDate(x) {
    return {
      after(y) {
        return v.getTimestamp(x) > v.getTimestamp(y);
      },
      afterOrEqual(y) {
        return v.getTimestamp(x) >= v.getTimestamp(y);
      },
      before(y) {
        return v.getTimestamp(x) < v.getTimestamp(y);
      },
      beforeOrEqual(y) {
        return v.getTimestamp(x) <= v.getTimestamp(y);
      },
      equal(y) {
        return v.getTimestamp(x) === v.getTimestamp(y);
      },
      today() {
        return x === v.getCurrentDate();
      },
    };
  },
};

module.exports = v;
