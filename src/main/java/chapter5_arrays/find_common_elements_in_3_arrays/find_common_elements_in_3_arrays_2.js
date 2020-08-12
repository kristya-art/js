/**
 find the common elements in 3 arrays with no duplicates and do it in more efficient way
 */
function FindCommonElements(arr, arr1,arr2){

    var arr4=[];



  // function CompareNum(arr, arr1, arr2) {

            for(var i=0; i<arr.length;i++) {
                for(var c=0;c<=arr4.length;c++){
                    if(arr[i] !== arr4[c]){


                     for (var j = 0; j < arr1.length; j++) {

                         if (arr[i] === arr1[j]) {
                             for (var t = 0; t < arr2.length; t++) {

                                 if (arr[i] === arr2[t]) {
                                     //  console.log([arr[i]]+' the common element in these 3 arrays');
                                     arr4.push(arr[i]);

                                     break; // we break here and start from next i element, cuz continue doesn't have sense


                                 }
                             }
                         }
                     }
            } else {break;}
        }
    }

    /**
     * @return {boolean}
     */
    function Compare(arr5,arr6){
        for(var c=0;c<arr5.length;c++){
            for(var cc=0;cc<arr6;cc++){
                if(arr5[c]===arr6[cc]){
                    return true;
                }
            }
        }
    }
    if(arr4.length>1) {

        console.log(arr4 + ' Are common elements of these 3 arrays');}
    else if(arr4.length===1){console.log(arr4+ ' Is a common element of these 3 arrays');}
    else {console.log('There are no common elements in these 3 arrays');}
}


FindCommonElements([1,2,5], [2,3,4,8], [3,4,5,6,7,8,2]);
