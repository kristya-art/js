/**
 * @author me
 * @description This is a program that first makes a matrix of arrays with chars from a given lines with chars, then finds
 * the start character and end character, and finally finds the path between them
 */
var board = `%0%70\n
%pe%,\n
88cc.\n
*0,,*\n
%x%^3\n`;

var rows = board.split("\n");
//console.log(rows);

function generateColumnArray(arr){

  return arr.split("");
}

var mazeMatrix = rows.map(generateColumnArray);

console.log(mazeMatrix);

function  findElement(char, mazeMatrix) {


    for (var i = 0; i < mazeMatrix.length; i++) {

        for (var j = 0; j < mazeMatrix[i].length; j++) {
            if (mazeMatrix[i][j] === char) {
                //  return console.log( char+" is found on position " + "["+i+"]"+"["+j+"]");
                return [i, j];

            }
            // else {console.log("x is not found");}
        }
    }


}

function printMatrix(matrix){
    var mazePrintStr = "",
        row = matrix.length,
        column = matrix[0 ].length;

    for (var i=0; i<row;i++){
        for(var j=0;j<column;j++){
            mazePrintStr+=mazeMatrix[i][j];
        }
        mazePrintStr += "\n";
    }
    console.log(mazePrintStr);
}

function findPath(matrix){
  //  matrix = mazeMatrix;
    startPos = findElement('e',matrix);
    endPos = findElement('x',matrix);
    path = [];
    if(endPos[1]>startPos[1])
    {
        for(var j=startPos[1];j<=endPos[1];j++){
            path.push(matrix[startPos[0]][j]);
        }
        if(endPos[0] > startPos[0]){
            for(var i = startPos[0]+1;i<=endPos[0];i++)
            {
                path.push(matrix[i][endPos[1]]);
            }
        }
        if(endPos[0] < startPos[0]){
            for(var k = startPos[0]-1;k>=endPos[0];k--)
            {
                path.push(matrix[k][endPos[1]]);
            }
        }
    }
    if(endPos[1]<startPos[1])
    {
        for(var c=startPos[1];c>=endPos[1];c--)
        {
            path.push(matrix[startPos[0]][c])
        }
        if(endPos[0]>startPos[0]){
            for(var z=startPos[0]+1;z<=endPos[0];z++){
                path.push(matrix[z][endPos[1]]);
            }
        }
        if(endPos[0]<startPos[0])
        {
            for (var y=startPos[0]-1;y>=endPos[0];y--)
            {
                path.push(matrix[y][endPos[1]]);
            }
        }
    }
    else if(endPos[1]===startPos[1]){
        if(endPos[0]>startPos[0]){
            for(var d=startPos[0];d<=endPos[0];d++){
                path.push(matrix[d][endPos[1]]);
            }
        }
        if(endPos[0]<startPos[0])
        {
            for (var dd=startPos[0];dd>=endPos[0];dd--)
            {
                path.push(matrix[dd][endPos[1]]);
            }
        }
    }
   // if(endPos[])
    console.log(path + " this is the path");
}




printMatrix(mazeMatrix);

findElement('x',mazeMatrix);

findPath(mazeMatrix);
