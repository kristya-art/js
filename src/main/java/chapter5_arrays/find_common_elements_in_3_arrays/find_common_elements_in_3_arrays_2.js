/**
 Find the common elements in 3 arrays with no duplicates
 @ Author me
 */
function FindCommonElements(arr, arr1,arr2){

    var arr4 =[];

    let arrcopy=NoDuplicates(arr);
   console.log(arrcopy); // to check if the function works good

    for(var i=0; i<arrcopy.length;i++) {
        for (var j = 0; j < arr1.length; j++) {

            if (arrcopy[i] === arr1[j]) {
                for (var t = 0; t < arr2.length; t++) {

                    if (arrcopy[i] === arr2[t]) {
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
        return arrcopy;
            }



    if(arr4.length>1) {

        console.log(arr4 + ' Are common elements of these 3 arrays');}
    else if(arr4.length===1){console.log(arr4+ ' Is a common element of these 3 arrays');}
    else {console.log('There are no common elements in these 3 arrays');}
}


FindCommonElements([1,2,5,2,3,1,1,1,1,4,2,5,6,3], [2,3,4,3,5,3,3,2,1,1,1,1,1,2,8], [3,4,5,6,7,8,2,2,2,2,2,3,1,1,1,1,1]);

//=> output=>1,2,5,3,4 Are common elements of these 3 arrays
