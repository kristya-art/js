//function AddUp2aNumber(n,array) {

     array =[1,2,3,4,5,6];
    var k = array.length;

    for(var i=0; i<k;i++){
        for(var j=0; j<k;j++){

            pos=array[i];
            if (SumUp2Number(array[i],array[j],9)==true){
                console.log(array[i],array[j]);
            }
            else{console.log("There are no numbers that make this number by sum")}
        }
   // }

}

function SumUp2Number(a,b,c){
    if((a+b)===c){return true;}
    return -1;
}

console.log(SumUp2Number(3,5,9) );
