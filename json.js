var obj_json = '{"name": "Ali", "age": 3}'; // string representation of JSON text
var object_translated = JSON.parse(obj_json); // Parse JSON text

var object = {name:'Garima', age:3};
var object_stringify = JSON.stringify(object);

console.log(object_translated);
console.log(obj_json);

console.log(object_stringify);