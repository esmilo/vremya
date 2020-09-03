const vremya = {
  getCurrentDate() {
    const dateObject = new Date();
    const yyyy = dateObject.getFullYear();
    let mm = dateObject.getMonth() + 1;
    mm = mm < 10 ? '0' + mm : String(mm);

    let dd = dateObject.getDate();
    dd = dd < 10 ? '0' + dd : String(dd);

    return `${yyyy}-${mm}-${dd}`;
  },
  isDate(x) {
    return {
      after(y) {
        const timestampX = new Date(x + ' GMT').getTime();
        const timestampY = new Date(y + ' GMT').getTime();

        return timestampX > timestampY;
      },
      afterOrEqual(y) {
        const timestampX = new Date(x + ' GMT').getTime();
        const timestampY = new Date(y + ' GMT').getTime();

        return timestampX >= timestampY;
      },
    };
  },
};

module.exports = vremya;
