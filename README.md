# vremya

This package was built with the focus of reducing the complexity to compare
dates in JavaScript. When you try to compare dates, like for example:
- Is the date "September 3rd, 2020" today?

It may sound simple, but **it's not**. Take a look at this example:
```javascript
// Let's say your local current date/time is:
// "September 3rd, 2020. 01:23 GMT+7"

// Question: Is the date "September 3rd, 2020" today?
// Expected answer: true

const param = new Date('2020-09-03'); // 2020-09-03T00:00:00.000Z
const currentDate = new Date; // 2020-09-02T18:23:00.000Z

console.log(param.getTime() === currentDate.getTime()); // false
console.log(param === currentDate); // false
```

All of our statements return `false` because when you create a new `Date` it
will create a date with your local time converted into GMT0. There's a lot of
things you have to handle if you want to just compare the dates.

> Like most things javascript, the built-in date processing is extremely
> powerful, but completely non-intuitive. - Joel Coehoorn, stackoverflow answer

Vremya makes your date comparison easier! You just need to import built-in
functions from the package and you're good to go.

## Usage

Install Vremya
```bash
npm install @esmilo/vremya
```

Use our built-in functions
```javascript
// Current date/time: "September 3rd, 2020. 01:23 GMT+7"
const { isDate, getCurrentDate } = require('@esmilo/vremya');

// Get current date
console.log(getCurrentDate()); // '2020-09-03'

// Check if date given is today
console.log(isDate('2020-09-03').today()); // true

console.log(isDate(getCurrentDate()).equal('2020-09-03')); // true
console.log(isDate('2020-08-28').equal('2020-08-28')); // true
console.log(isDate('2020-08-28').after('2020-08-20')); // true
console.log(isDate('2021-08-28').before('2020-08-28')); // false
```

Note: Write your date as strings with ISO 8601 format (yyyy-mm-dd)

## Available Methods

- `getCurrentDate()`: `String`
  Get current date as ISO 8601 format (yyyy-mm-dd)
- `isDate(date: String)`: `Object`
  Date comparison function, can be chained with:
    - `after(dateToCompare: String)`: `Boolean`
    - `afterOrEqual(dateToCompare: String)`: `Boolean`
    - `before(dateToCompare: String)`: `Boolean`
    - `beforeOrEqual(dateToCompare: String)`: `Boolean`
    - `equal(dateToCompare: String)`: `Boolean`
    - `today(dateToCompare: String)`: `Boolean`
