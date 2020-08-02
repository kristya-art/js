
function findTwoSum(array, sum) {
    var store={};

    for(var i=0, arrayLength=array.length; i<arrayLength;i++){
        if(store[array[i]]){
          //  return true;
            console.log(store[array[i]],array[i]); // my changes of program
        }else{
            store[sum-array[i]]=array[i];

        }

    }

    return false;
}

findTwoSum([3,2,4,5,7,8,1],9);
// 4 5
// 2 7
// 8 1
