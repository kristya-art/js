/**
 * This program for making a mazeMatrix and then transform it to enumerated hashtable
 */
var board = `&e&&&****9(((>>>..\n
3453452523....4\n
****...x...**\n`;

var rows = board.split("\n");

/**then we use .map over the array to divide by certain characters into each column
  this will generate the proper matrix where each row is an array of characters and the board
  is the array of those rows.
 */
function makeColumns(arr){
    return arr.split("");
}

var mM= rows.map(makeColumns);

console.log(mM);

function addIndex(mM){
    var hashtable ={};
    var k =0;
    for(var i=0;i<mM.length; i++){
        for(var j=0;j<mM[i].length;j++){
            hashtable[k] = mM[i][j];
            k++;

        }
    }
    console.log(hashtable);
}

addIndex(mM);
