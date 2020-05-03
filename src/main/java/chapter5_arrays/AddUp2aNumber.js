/**
 *
 Problem: Given the array arr, find and return two indices of the array that add up to weight
 or return -1 if there is no combination that adds up to weight.
 For example, in an array like [1,2,3,4,5], what numbers add up to 9?
 The answers are 4 and 5, of course.
 Time Complexity O(n^2)
 */

function SumUp2Number(a,b,c){
    if((a+b)===c){return true;}
    return -1;
}
function AddUp2Number(n,array) {
    var k = array.length;

    for (var i = 0; i < k; i++) {
        for (var j = 0; j < k; j++) {

           // pos = array[i];
            if (SumUp2Number(array[i], array[j], n) == true) {
                console.log(array[i], array[j]);
             }
            //else {
            //     console.log("There are no numbers that make this number by sum")
            // }
        }
    }
}
console.log(SumUp2Number(3,5,9) );

AddUp2Number(9,[1,2,3,4,5,6]);
