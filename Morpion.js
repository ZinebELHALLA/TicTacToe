$(document).ready(function () {
    var currentPlayer = "X";
    var moves = 0;
    var board = ["", "", "", "", "", "", "", "", ""];


    //************************************************LOCAL STORAGE ***********************************************************/
    //SET
    window.localStorage.setItem("color", "#eeb1dc");
    window.localStorage.getItem("color");
    window.localStorage.color;
    window.localStorage.getItem["color"];
    //AFFICHAGE
    console.log(localStorage);//afficher les info du LS sur la console du web
    console.log(typeof localStorage);//afficher le type du LS
    console.log(window.localStorage.color);
    //GET
    window
    //SET CHANGE TO PAGE
    document.body.style.backgroundColor = window.localStorage.getItem("color");
    //Delete item or remove all
    window.localStorage.removeItem("color");
    window.localStorage.clear();
    
    
    
    
    
    
    
    //Make a move
    $(".cell").on("click", function () {
        var index = $(this).index();
        if (board[index] == "") {
            $(this).text(currentPlayer);
            board[index] = currentPlayer;
            moves++;
            if (checkWin(currentPlayer)) {
                alert(currentPlayer + " wins!");
            } else if (moves == 9) {
                alert("It's a tie!");
            } else {
                currentPlayer = currentPlayer == "X" ? "O" : "X";
                $("#player").text(currentPlayer);
            }
        }
    });



    // Function to check if a player has won
    function checkWin(player) {
        if (
            (board[0] == player && board[1] == player && board[2] == player) ||
            (board[3] == player && board[4] == player && board[5] == player) ||
            (board[6] == player && board[7] == player && board[8] == player) ||
            (board[0] == player && board[3] == player && board[6] == player) ||
            (board[1] == player && board[4] == player && board[7] == player) ||
            (board[2] == player && board[5] == player && board[8] == player) ||
            (board[0] == player && board[4] == player && board[8] == player) ||
            (board[2] == player && board[4] == player && board[6] == player)
        ) {
            return true;
        }
        return false;
    }


    //Reset game
    $("#reset").on("click", function () {
        $(".cell").text("");//clear the board
        currentPlayer = "X";//reset the player
        moves = 0;//reset the move count
        board = ["", "", "", "", "", "", "", "", ""];//reset the board
        $("#player").text(currentPlayer);//update the player display
    });
});


color="red"