/**
 * Function to find common elements in 3 arrays
 * @Author me
 */

function FindCommonElements(arr, arr1,arr2){

    var arr4 =[];

    var arrS;
    var arrSS;
    var arrSSS;

//here we want to find an array with a shortest length, to give it as a first in for loop
    if (arr.length <= arr1.length && arr.length <= arr2.length) {
        arrS = arr;
        arrSS = arr1;
        arrSSS = arr2;
    } else if (arr1.length <= arr.length && arr1.length <= arr2.length) {
        arrS = arr1;
        arrSS = arr;
        arrSSS = arr2;
    } else {
        arrS = arr2;
        arrSS = arr;
        arrSSS = arr1;
    }



    let arrcopy=NoDuplicates(arrS);
   // loop to find the same values in the given 3 arrays
    for(var i=0; i<arrcopy.length;i++) {
        for (var j = 0; j < arrSS.length; j++) {

            if (arrcopy[i] === arrSS[j]) {
                for (var t = 0; t < arrSSS.length; t++) {

                    if (arrcopy[i] === arrSSS[t]) {
                        arr4.push(arrcopy[i]);
                        break; // to avoid duplicates in the 3d array
                    }
                }
                break; // to avoid duplicates from 2nd array
            }
        }
    }
    /*
    This is a help function makes a copy of array that doesn't have a duplicates
     */
    function NoDuplicates(arrS){
        let arrcopy= Array.from(arrS);

        for(let c=0;c<arrcopy.length;c++){
            for(let cc=c+1;cc<arrcopy.length;cc++){
                if(arrcopy[c] === arrcopy[cc]){
                    arrcopy.splice(cc,1);
                    cc--; // added this line, each time when we delete a number from array we have to decrement index, cuz instead of
                    // for condition with cc++, in this fall we have cc+2
                }
            }
        }
        return arrcopy;
    }

// if statement to print the right answer
    if(arr4.length>1) {

        console.log(arr4 + ' Are common elements of these 3 arrays');}
    else if(arr4.length===1){console.log(arr4+ ' Is a common element of these 3 arrays');}
    else {console.log('There are no common elements in these 3 arrays');}
}


FindCommonElements([1,2,5,2,3,1,1,1,1,4,2,5,6,3], [2,3,2,2,1,1,10], [3,4,5,6,7,8,2,2,2,2,2,3,1,1,1,1,1]);
