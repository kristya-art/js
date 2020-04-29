
var str = "I come tomorrow to you at 14 o'clock!"

var searchChar = 'o';
var count =0;
for(var  i=0; i< str.length+2;i++) {
    var lettera = str.charAt(i);
    if(lettera == 'o'){
        count++;


    }
    console.log(count);

}
