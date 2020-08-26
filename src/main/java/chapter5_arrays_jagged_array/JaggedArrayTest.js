/**
 * Knowing the jagged array
 */

function Matrix(rows,columns){
    var jaggedArray = new Array(rows);

    for(var i=0 ;i < columns; i++){
        jaggedArray[i] = new Array(rows);
    }

    return jaggedArray;
}
Matrix(3,4);

var newArray = Matrix(3,4);

newArray[1]= [[1,2,3], [4,5,6]];

console.log(newArray);
