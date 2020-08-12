/**
 * This is a program that looking for common elements in 3 given arrays
 * In this program we are changing the initial arrays using splice method to make Time Complexity more efficient
 * but it is not always a good idea maybe we need these arrays in unchangeable state, the part 2 of this program will
 * have solution for this case.
*/

function CommonIn3(arr, arr1,arr2) {
    //arr4 we will use to store the common numbers we will find
var arr4=[];
    for(var i=0; i<arr.length;i++){
        for(var j=0;j<arr1.length; j++){
            if(arr[i]===arr1[j]){
                for(var t=0;t<arr2.length;t++){
                    if(arr[i]===arr2[t]){
                      //  console.log([arr[i]]+' the common element in these 3 arrays');
                        arr4.push(arr[i]);
                        arr1.splice(j,1); // we delete the found element, cuz we don't need redundancy
                        arr2.splice(t,1);
                        break; // we break here and start from next i element, cuz continue doesn't have sense
                    }
                }
            }
        }
    }
if(arr4.length>1) {

    console.log(arr4 + ' Are common elements of these 3 arrays');}
else if(arr4.length===1){console.log(arr4+ ' Is a common element of these 3 arrays');}
else {console.log('There are no common elements in these 3 arrays');}
}

 CommonIn3([1,2,5],[1,5,6,7,8,9,10,2],[4,2,8,9]);

/** to make this algo more efficient 1st i have to compare two arrays with shorter length as the 3d one*/
