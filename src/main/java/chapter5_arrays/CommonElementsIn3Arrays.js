function CommonIn3(arr, arr1,arr2) {
var arr4=[];
    for(var i=0; i<arr.length;i++){
        for(var j=0;j<arr1.length; j++){
            if(arr[i]===arr1[j]){
                for(var t=0;t<arr2.length;t++){
                    if(arr[i]===arr2[t]){
                      //  console.log([arr[i]]+' the common element in these 3 arrays');
                        arr4.push(arr[i]);
                        arr1.splice(j,1);
                        arr2.splice(t,1);
                        break;
                    }
                }
            }
        }
    }
if(arr4.length>0) {
    console.log(arr4 + ' Are common elements of these 3 arrays');
}else (console.log('There are no common elements in these 3 arrays'));
}

 CommonIn3([1,2,5],[1,5,6,7,8,9,10,2],[4,8,9]);
