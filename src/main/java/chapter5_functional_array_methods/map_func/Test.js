/**
 * practice functional js
 */

// map function

var arr=[1,2,3,4,5,5,6,7,8,10];
var new_arr;
new_arr = arr.map(function (value) {

    return value/2;

}) ;

console.log(arr);
console.log(new_arr);

// filter function

var arr2 = [4,5,6,8,9,1,2,3,9];

function  Print(arrExample, k) {

     var arrN=   arrExample.filter(function(value){
            return value <= k;
        });
    
     arrN.forEach(function (entry) {
         console.log(entry);
     });


}
Print(arr2,7);
// another example of filter function
function SmallerAs(arrExample2, k) {

    var arrNew = arrExample2.filter(function (value) {
        return value <=k ;

    });
    // arrNew.forEach(function (entry) {
    //     console.log(entry);
    // });
    console.log(arrNew);
}

SmallerAs([4,3,2,5,1,6,7,8,9,10], 5);

// reduce function

function SumAll(arr){
    var sum = arr.reduce(function(prevVal,actVal, index)
    {
         return prevVal-actVal;
    });
    console.log(sum);
}

SumAll([1,2,3]);

