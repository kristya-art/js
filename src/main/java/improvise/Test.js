function Test(array, array1){
    for(var i=0;i<array.length;i++){
        for(var j=0;j< array1.length;j++){
            if(array[i]===array1[j]){
                console.log(array[i],array1[j]);
            }else{console.log('nothing is happened')}
        }

    }
}

Test([1,2,3],[5,6,2]);
