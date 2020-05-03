
var array1 = [1,2,3,4];
var array2 = array1;


array2.push(7);

console.log(array2);
console.log(array1);

var array3 = [1,2,3,4];

var array4= Array.from(array3);
array4[2]=5;

console.log(array3);
console.log(array4);

console.log("*****************");

var array5 = [1,2,3,4];
array5.splice(1,2,[5,6,7]);//[ 1, [ 5, 6, 7 ], 4 ]

console.log(array5);

var array6 = [1,2,3,4];
array6.splice();
console.log(array6);//[ 1, 2, 3, 4 ]


