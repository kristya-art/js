
 var str = "He's my king form this day until his last day";
 var count = 0;
 var pos = str.indexOf('a');
 console.log(pos);
 while(pos !== -1) {
     count++;
     pos = str.indexOf('a', pos+1);
     console.log(pos);
 }
 console.log(count);
