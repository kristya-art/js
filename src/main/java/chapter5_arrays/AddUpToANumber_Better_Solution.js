function findSumBetter(arr, weight) {
    var hashtable = {}; //empty hashtable

    for(var i=0, arrLength = arr.length;i<arrLength;i++){
        var currentElement = arr[i];
        difference = weight-currentElement; //

        //check if the right one already exists
        if(hashtable[currentElement] != undefined){
            return  [i,hashtable[weight-currentElement]];

        }else {
            //store index
            hashtable[difference] = i;


        }

    }

return -1;


}
findSumBetter([1,2,3,4,5],7);
