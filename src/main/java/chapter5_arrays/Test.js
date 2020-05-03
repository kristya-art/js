
var array1=[1,2,3];

array1.push(7);

console.log(array1);

array1.pop();
console.log(array1);

for (var i=0, len=array1.length;i<len; i++)
{
    console.log(array1[i]);
}
 // similarly, we can use while loop

var counter =0;

while(counter<array1.length)
{
    //insert code here
    counter++;
}
// for(in)
var array2 = ['all', 'cows', 'are','big'];
for(var index in array2){
    console.log(index);   // 0,1,2,3
}

for(var index3 in array2) {
    console.log(array2[index3]); // all, cows, are, big
}

//for (of)

for (var element of array2) {
    console.log(element);
}
