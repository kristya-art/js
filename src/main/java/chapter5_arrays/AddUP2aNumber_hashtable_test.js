function findNumbs(arr, weight){
    var hashtable = {};

    for(var i=0, arrayLength=arr.length;i<arrayLength;i++){
        var currentNumber = arr[i];
       var difference =  weight-currentNumber;

        if(hashtable[currentNumber] !==undefined){
            console.log( [currentNumber, arr[hashtable[currentNumber]]]);
        }
        else{
           hashtable[difference]=i;
        }
    }
    return -1;
}

findNumbs([1,2,3,4,3,2,4],6);
