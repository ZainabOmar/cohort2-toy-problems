/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */

//   var deepEquals = function(obj1, obj2){
//     for (var key1 in obj1) {
//       for (var key2 in obj2) {
//         if(typeof obj1[key1] === "number" && typeof obj2[key2] === "number" || typeof obj1[key1] === "string" && typeof obj2[key2] === "string" || typeof obj1[key1] === "boolean" && typeof obj2[key2] === "boolean") {
//           if(obj1[key1] === obj2[key2]){
//             return true;
//           }
//         }
//           deepEquals(obj1[key1], obj2[key2])
//       }
//     }
//     return false;
// }


var deepEquals = function(obj1, obj2){
  return JSON.stringify(obj1)=== JSON.stringify(obj2)
}