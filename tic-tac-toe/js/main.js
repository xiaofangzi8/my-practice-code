window.onload = function(){
    let gameBoard = ['','','','','','','','',''];
    let currentTrun = 0;
    let winner = false;

    createBoard();

    function createBoard(){
        let replayButton = document.querySelector('.replay-btn');
        replayButton.addEventListener('click', resetBoard);
    
        reSize();
        addCellClick();
        changeBoardHeaderNames();
    }
    
    function reSize(){
        let allCells = document.querySelectorAll('.board-cell');
        let cellHeight = allCells[0].offsetWidth;
        
        allCells.forEach( cell => {
          cell.style.height = `${cellHeight}px`;
        });
    }
    
    function  cellMove(event){
        let currentCell = parseInt(event.currentTarget.firstElementChild.dataset.id);
        let currentCellId = document.querySelector(`[data-id='${currentCell}']`);
        if(currentCellId.innerHTML !== ''){
            return ;
        }else if(curentPlayer() === 'X'){
            currentCellId.innerHTML = curentPlayer();
            gameBoard[currentCell] = 'X';
        }else{
            currentCellId.innerHTML = curentPlayer();
            gameBoard[currentCell] = 'O';
        }
    
        calculateWinner();
    
        
        changeBoardHeaderNames();
    
        currentTrun++;
    }
    
    function curentPlayer(){
        return currentTrun % 2 === 0 ? 'X' : 'O';
    }
    
    function checkGameOver(){
        if(currentTrun > 7){
            alert('game over!');
        }
    }
    
    function changeBoardHeaderNames(){
    
        if(!winner){
            let currentPlayerText = document.querySelector('.board-player-turn');
            if(curentPlayer() === 'X'){
                currentPlayerText.innerHTML = 'Next player: X';
            }else{
                currentPlayerText.innerHTML = 'Next player: O';
            }
        }
    }
    
    function calculateWinner(){
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
          ];
          lines.forEach(lineItem => {
            let cell1 = lineItem[0];
            let cell2 = lineItem[1];
            let cell3 = lineItem[2];
    
            if(gameBoard[cell1] === curentPlayer() &&  gameBoard[cell2] === curentPlayer() && gameBoard[cell3] === curentPlayer()){
                const cells = document.querySelectorAll('.board-cell');
    
                cells.forEach(cell => {
                    let cellId = cell.firstElementChild.dataset.id;
    
                    if(cellId == cell1 || cellId == cell2 || cellId == cell3){
                        cell.classList.add('board-cell-winner');
                    }
                });
    
                let currentPlayerText = document.querySelector('.board-player-turn');
                if(curentPlayer() === 'X'){
                    currentPlayerText.innerHTML  = "Winner:X";
                    winner= true;
                    removeCellClick();
                    return true;
                }else{
                    currentPlayerText.innerHTML  = "Winner:O";
                    winner=true;
                    removeCellClick();
                    return true;
                }
            }
          }); 
    
          if(!winner){
            checkGameOver();
          }
    
          return false;
    }
    
    function resetBoard() {
    
        gameBoard = ['', '', '', '', '', '', '', '', '']; 
        
        let cellsAll = document.querySelectorAll('.cell');
        cellsAll.forEach( cell => {
            cell.textContent = '';
            cell.parentElement.classList.remove('board-cell-winner');
        });
      
        currentTrun = 0;
        winner = false;
      
        let currentPlayerText = document.querySelector('.board-player-turn');
        currentPlayerText.innerHTML = 'Next player: X';
      
        addCellClick();
      }
    
    
      function addCellClick(){
        const cells = document.querySelectorAll('.board-cell');
        cells.forEach( cell => {
          cell.addEventListener('click', cellMove);
        });
      }
    
      function removeCellClick(){
        const cells = document.querySelectorAll('.board-cell');
        cells.forEach( cell => {
          cell.removeEventListener('click', cellMove);
        });
      } 
}



