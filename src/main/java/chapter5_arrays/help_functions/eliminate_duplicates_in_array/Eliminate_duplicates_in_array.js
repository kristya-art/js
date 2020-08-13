/**
 * This function makes copy of original array and eliminates in it duplicates
 */
function NoDuplicates(arr){
    let arrcopy= Array.from(arr);

    for(let c=0;c<arrcopy.length;c++){
        for(let cc=c+1;cc<arrcopy.length;cc++){
            if(arrcopy[c] === arrcopy[cc]){
                arrcopy.splice(cc,1);
                cc--; // added this line, each time when we delete a number from array we have to decrement index, cuz instead of
                     // for condition with cc++, in this fall we have cc+2
            }
        }
    }
    console.log(arr); //we see that original array doesn't changed cuz of function Array.from()
    console.log(arrcopy);// the result
    return arrcopy; // we return array with no duplicates in it

}

NoDuplicates([5,2,2,2,2,2,3,3,3,4,4,4,4,5,2,2,2,2,5,5,5,5,5,5,5]);

//output
//=>[ 5, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 2, 2, 2, 2, 5, 5, 5, 5, 5, 5, 5 ]
//=>    [ 5, 2, 3, 4 ]
