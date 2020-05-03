function AddUpp2(array,n){
var k = array.length;

    for(var i=0;i < k;i++) {
        for (var j = i; j <k; j++) {

            if ((array[i] + array[j]) === n) {
                console.log(array[i], array[j]);
            }

        }

    }

}
AddUpp2([1,2,3,4,5,6],9);
