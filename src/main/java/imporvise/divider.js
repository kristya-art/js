function whatIsDevider(n)
{
   for (var i= 2; i<n; i++)
   {
       if(n%i == 0)
       {return i;}
       else false;

   }


}
console.log(whatIsDevider(51));
