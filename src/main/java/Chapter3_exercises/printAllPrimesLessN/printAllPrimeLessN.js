//Print all primes less than n.

function PrintAllPrimesLessThenN(n)
{
    var array =[2,3];
    for (var i=5; i<n; i=i+6){
       array.push(i);
       array.push(i+2);

    }

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
