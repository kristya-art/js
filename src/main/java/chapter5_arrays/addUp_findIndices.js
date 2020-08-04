
//simple function addUp
 function addUp(arr, weigth) {


         for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
             for (var j = i + 1; j < arrLength; j++) {
                 if ((arr[i] + arr[j]) === weigth) {

                     console.log('The indices are '+ i + ' and ' + j);

                 }
             }
         }
     }

 addUp([1,2,4,6,8,7] ,9);

//need to print line about the negative result, that explains that there are no indices found'
