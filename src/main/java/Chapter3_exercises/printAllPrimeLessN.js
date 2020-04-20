//Print all primes less than n.

function PrintAllPrimesLessThenN(n)
{
    // var smallArray = [];
    // smallArray.push(2);
    // smallArray.push(3);
 //  if(n<=2){return false;}
 //  if(n>=5){console.log(smallArray);}

    var array =[2,3];
   for (var i=5; i<n; i=i+6){
       array.push(i);
       array.push(i+2);


   }
 // return console.log(array);

console.log(array.forEach(isPrime))


}

function isPrime(k){
    if(k<2)return false;
    if(k==2)return console.log(k);


    for(var i=2; i<k; i++)
    {
        if(k%i == 0)return false;
    }


    console.log(k);
    return true;


}

PrintAllPrimesLessThenN(70);
