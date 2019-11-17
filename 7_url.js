var url = require('url');
var adr = 'http://localhost:8080/home.htm?year=2019&month=october';
var q = url.parse(adr, true);

console.log(q.host); //'localhost:8080'
console.log(q.pathname); //'/home.htm'
console.log(q.search); //'?year=2019&month=october'

var qdata = q.query; // year: 2019, month: 'october' 
console.log(qdata.month); //'october'