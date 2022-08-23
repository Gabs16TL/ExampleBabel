"use strict";

var array = [1, 2, 3];
var newArray = array.map(function (item) {
  return Math.pow(item, 2);
});
console.log(newArray);
var _ref = ['hola', 2, 'mundo'],
    a = _ref[0],
    b = _ref[2];
console.log("".concat(a, " - ").concat(b));
var _hola$num = {
  hola: 'hola mundo :)',
  num: 2018
},
    hola = _hola$num.hola,
    num = _hola$num.num;
console.log("".concat(hola, " -> n\xFAmero ").concat(num));