var moment = require('moment');
var now = moment();

console.log(now.format('X'));
console.log(now.valueOf());

var timestamp = 1475954951;

var timeStampMoment = moment.utc(timestamp);

console.log(timeStampMoment.local().format('h:mm a'));

console.log(now.format("MMM Do YYYY, h:mma"));