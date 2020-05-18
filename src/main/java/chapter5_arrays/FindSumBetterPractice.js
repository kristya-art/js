function FindTheBetterSum(array,weight){

var hashtable = {};

for(var i, arrayLength=array.length; i<arrayLength; i++)
{

 var actualNum=   array[i];
 difference = weight - actualNum;

 if(hashtable[actualNum]!=undefined){
     return[i,hashtable[weight-actualNum]];

 }else{
     hashtable[difference]=i;
 }
}

}
