window.onload = function(){
    let gameBoard = ['','','','','','','','',''];
    let currentTrun = 0;
    let winner = '';
    let stepFlag = false;
    let newCurrentTurn= 0;

    createBoard();

    function createBoard(){
        resetBordClick();
        addCellClick();
        changeBoardHeaderNames();
    }

    jumpTo = function(arrstr,turn){
      clearInfo();
      const tuenText = turn % 2 === 0 ? 'X' : 'O';
      curTurnText('Next player:'+ tuenText);

      let arr = arrstr.split(",");
      arr.forEach((item,index) => {
        cellText(index,item);
      });

      stepFlag = true;
      newCurrentTurn = parseInt(turn);
      gameBoard = arr;
    }
    
    function  cellMove(event){
        let currentCell = parseInt(event.currentTarget.firstElementChild.dataset.id);
        if(winner || gameBoard[currentCell]) return;

        if(stepFlag){
          currentTrun = newCurrentTurn;
          deleteLiChild(newCurrentTurn);
        }

        

        const curPlayer = curentPlayer();
        cellText(currentCell,curPlayer);
        gameBoard[currentCell] = curPlayer;

        const history = gameBoard.slice();
        let olList = document.querySelector('.step-info');
        let li = document.createElement('li');
        const stepNum = currentTrun + 1;
        li.innerHTML = "<button  onClick=\'jumpTo(\""+ history +"\",\""+ stepNum + "\")\'> Go to move #"+ stepNum +"</button>";
        olList.appendChild(li);

        calculateWinner();
        changeBoardHeaderNames();
        currentTrun++;
        
    }
    
    function changeBoardHeaderNames(){
        if(!winner){
          const curPlayer = curentPlayer();
          curTurnText('Next player:'+curPlayer);
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
            let [cell1,cell2,cell3] = lineItem;
            const curPlayer = curentPlayer();
            if(gameBoard[cell1] === curPlayer &&  gameBoard[cell2] === curPlayer && gameBoard[cell3] === curPlayer){
                const cells = document.querySelectorAll('.board-cell');
    
                cells.forEach(cell => {
                    let cellId = cell.firstElementChild.dataset.id;
    
                    if(cellId == cell1 || cellId == cell2 || cellId == cell3){
                        cell.classList.add('board-cell-winner');
                    }
                });
    
                curTurnText('Winner:'+ curPlayer);
                winner = curPlayer;
            }
          }); 
    
          if(!winner){
            checkGameOver();
          }
    }
    
    function resetBordClick(){
      let replayButton = document.querySelector('.replay-btn');
      replayButton.addEventListener('click', resetBoard);
    }
    
    function resetBoard() {
        clearInfo();
        addCellClick();
        deleteLiChild(0);
      }

    function clearInfo(){
      gameBoard = ['', '', '', '', '', '', '', '', '']; 
      
      let cellsAll = document.querySelectorAll('.cell');
      cellsAll.forEach( cell => {
          cell.textContent = '';
          cell.parentElement.classList.remove('board-cell-winner');
      });

      curTurnText('Next player:X');
    
      currentTrun = 0;
      winner = false;
      stepFlag = false;
    }

    function curTurnText(content){
      let currentPlayerText = document.querySelector('.board-player-turn');
      currentPlayerText.innerHTML = content;
    }

    function cellText(index,content){
      let currentCellId = document.querySelector(`[data-id='${index}']`);
      currentCellId.innerHTML = content;
    }

    function addCellClick(){
      const cells = document.querySelectorAll('.board-cell');
      cells.forEach( cell => {
        cell.addEventListener('click', cellMove);
      });
    }

    function deleteLiChild (turn) {
      let ol = document.querySelector('.step-info');
      var child = ol.lastElementChild;
        while (child) {
        if(child.innerHTML.indexOf("#"+turn) != -1 ){
          break;
        }
        ol.removeChild(child);
        child = ol.lastElementChild;
        
      }
    }

    function curentPlayer(){
      return currentTrun % 2 === 0 ? 'X' : 'O';
    }
  
    function checkGameOver(){
      if(currentTrun > 7){
          alert('game over!');
      }
    }
}



