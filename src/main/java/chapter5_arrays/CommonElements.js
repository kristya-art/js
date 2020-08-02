function CommonNumbers(array1, array2){
    var output1 = [];
    var output2 = [];

    for(var i = 0; i< array1.length; i++){
        var pos1 = array1[i];
        for(var j =0 ;j< array2.length; j++){
            var pos2 = array2[j];

            if(pos1 === pos2) {
                output1.push(pos1);
            }
        }
       // return output1;
    }
//console.log(output1);
    return output1;

}
CommonNumbers([1,2,3,5], [0,5,2,1]);
