
    var board =
        `%e%%%%%e%%%\n
     %e..%.%...%\n
     %.%.%.%.%%%\n
     %.%.......%\n
     %.%%%%.%%.%\n
      %.%.....%.%\n
      %%%%%%%%%x%`;

    var rows = board.split("\n");


//console.log(rows);

    function generateColumnArr(arr) {
        return arr.split("");
    }

    var mazeMatrix = rows.map(generateColumnArr);

//console.log(mazeMatrix);
    function FindChar(char, mazeMatrix){

        for(var i=0; i <mazeMatrix.length;i++){
            for(var j=0;j<mazeMatrix[i].length;j++){
              //  console.log(mazeMatrix[i][j]);
                if(mazeMatrix[i][j] === char){
                    console.log(" The element '" + char + "' is found on row :"+ [i]+ " and column: "+ [j]+".")
                }

            }
        }


}
FindChar('e',mazeMatrix);


/**
 * have to continue with this program. todo 1. An algorithm doesn't have to calculate an empty arrays, the element
 todo still has a wrong index of found column.
 */
