function createMazeMatrix(arr) {
    var board =
        `%e%%%%%%%%%\n
    %.....%..%..%%%\n
    %%%%%%%%%%%%x%%\n`;
    console.log(board);
    var rows = board.split("\n");

    console.log(rows);

    function generateColumnArr(arr) {
        return arr.split("");
    }

    var mazeMatrix = rows.map(generateColumnArr);
    console.log(mazeMatrix);
    console.log(mazeMatrix.length);
}

createMazeMatrix();
