// function scope1(){
//     var top = "top";
//     bottom = "bottom";
//     console.log(bottom);
//
//     var bottom;
// }
//
// scope1();

/****objects in js*********/

function isEquivalent(a,b) {
    //array  property name

    var aProps = Object.getOwnPropertyName(a);
    var bProps = Object.getOwnPropertyName(b);

    //if their property lengths are different they are different objects
    if(aProps.length != bProps.lenght) {
        return false;

    for( var i=0; i< aProps.length; i++){
        var propName = aProps[i];

        //if the values of the property are different, not equal
        if(a[propName] !== b[propName]) {
            return false;
        }
    }

    // if everything matched, correct
    return true;
    console.log("ok");
}

isEquivalent({'hi':12}, {'hi':12});}

console.log("run == ok");
