function CommonElements(arr,arr1){

    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr1.length;j++){
            if(arr[i]===arr1[j]){
                console.log(arr[i]+' is a common element');

                console.log(arr1);
                arr1.splice(j,1);

                break;
            }
        }

    }
    console.log(arr1+' is a array1 ');
}

CommonElements([1,2,3,4,5], [5,2,1,7,8,9]);
