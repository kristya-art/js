//time complexity O(n)
function isPrime(n) {
    if(n<=1) {
        return false;
    }
    if(n==2){return true;}
    //check from 2 to n-1
    for(var i=2; i<n; i++){
        console.log(i);
       if(n%i==0)
        {  return false;

        }
        return true;



    }

}
console.log(isPrime(16));
console.log(isPrime(5));
console.log(isPrime(47));
console.log(isPrime(2));
