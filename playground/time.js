var moment = require('moment');


var someTs = moment().valueOf();
console.log(someTs);

var createdAt = 13443;
var date = moment(createdAt);
date.add(100, 'year').subtract(9, 'months');
console.log(date.format('MMM Do YYYY'));