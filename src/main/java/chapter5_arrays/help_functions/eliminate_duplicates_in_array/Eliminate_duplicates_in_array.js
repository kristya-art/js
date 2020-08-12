/**
 * This function makes copy of original array and eliminates in it duplicates
 */
function NoDuplicates(arr){
    let arrcopy= Array.from(arr);

    for(let c=0;c<arrcopy.length;c++){
        for(let cc=c+1;cc<arrcopy.length;cc++){
            if(arrcopy[c] === arrcopy[cc]){
                arrcopy.splice(cc,1);
            }
        }
    }
    console.log(arr); //we see that original array doesn't changed cuz of function Array.from()
    console.log(arrcopy);// the result

}

NoDuplicates([2,3,4,2,3,4,2,3]);

//output
//=> [ 2, 3, 4, 2, 3, 4, 2, 3 ]
//=> [ 2, 3, 4 ]
