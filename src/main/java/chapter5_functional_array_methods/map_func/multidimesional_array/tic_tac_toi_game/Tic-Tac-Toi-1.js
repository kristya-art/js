/**
 * This program finds the winner of the Tic-Tac-Toi game in case if the game is finished
 * @author me
 */
function TicTacToi([arr,arr1,arr2]){
    var gameboard= [arr,arr1,arr2];


// get columns from matrix we have
    var column1 = new Array(3);
    for (var j = 0; j < gameboard.length; j++) {
        column1[j] = gameboard[j][0];

    }
    var column2 = new Array(3);
    for(var jj=0; jj<gameboard.length;jj++) {
        column2[jj] = gameboard[jj][1];
    }

    var column3 = new Array(3);
    for(var jjj=0; jjj<gameboard.length;jjj++) {
        column3[jjj] = gameboard[jjj][2];

    }
 //get diagonals
    var i=0;
    var diagonal = new Array(3);
    for(var d=0;d<gameboard.length;d++){
      //  diagonal.push(gameboard[d][i]); => output not really that we want => [ <3 empty items>, '-', '0', '0' ]
        diagonal[i] = gameboard[d][i];
        i++;
    }

    var ii=2;
    var index=0;
    var diagonal2 = new Array(3);
    for (var dd=0;dd<gameboard.length;dd++){
        diagonal2[index] = gameboard[dd][ii];
        ii--;
        index++;
    }


   // construct an array with all columns, rows and diagonals
    var  newBoard =  Array.from(gameboard);
    newBoard.push(column1);
    newBoard.push(column2,column3,diagonal,diagonal2);


    return newBoard;
}


function findWinner([arr,arr1,arr2]){
    var n = [['0','0','0']];
    var x =[['x','x','x']];
    var board = TicTacToi([arr,arr1,arr2]);
    for(var i= 0;i< board.length;i++){
        var b = [board[i]];

        if (JSON.stringify(b)===JSON.stringify(n)){

          return console.log("0 is winner!")}

        else if(JSON.stringify(b)===JSON.stringify(x)){
            return console.log("x is winner!")}
    }

console.log("There are no winners in this game!")
}


findWinner([['-','0','-'], ['x','-','0'], ['x','0','0']]);   //=> output=> There are no winners in this game!
findWinner([['0','x','0'], ['x','0','-'], ['0','0','x']]);    //=> output=> 0 is winner!
findWinner([['0','0','0'], ['x','x','-'], ['x','0','0']]);    //=> output=> 0 is winner!
findWinner([['x','0','-'], ['0','x','-'], ['-','0','x']]);    //=> output=> x is winner!

