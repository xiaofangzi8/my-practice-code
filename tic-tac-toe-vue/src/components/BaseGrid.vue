<template>
    <div class="board-main">
        <div class="header">
            <h1>Tic Tac Toe</h1>
        </div>
        <div class="board-container">
            <div class="board-cell" :class="{winnerColor:isWin[item.id]}" v-for="(item) in gameboard" :key="item.id" >
                <div class="cell"  @click="strike(item.id)">{{ item.content }}</div>
            </div>
        </div>
        <div class="reset">
            <button class="replay-btn" @click="restart">重置棋盘</button>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            currentPlayer:'X',
            turnMessage:'',
            moves:0,
            winner: '',
            gameboard:[
                {id:0,content:''},
                {id:1,content:''},
                {id:2,content:''},
                {id:3,content:''},
                {id:4,content:''},
                {id:5,content:''},
                {id:6,content:''},
                {id:7,content:''},
                {id:8,content:''},
            ],
            history:[],
            winLines:[
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
          ],
          isWin:Array(9).fill(false),
          stepNums:[],
          gridInfo:{message:'',steps:[]}
        }
    },
    computed: {
        nonCurrentPlayer () {
            if (this.currentPlayer === 'X') {
                return 'O'
            }else{
                return 'X'
            }
        }
    },
    methods: {
        strike(cellId){
             if(this.winner || this.gameboard[cellId].content) return;
             this.gameboard[cellId].content = this.currentPlayer
             this.history.push({id:cellId,content:this.currentPlayer})
             this.calculateWinner()
             if(!this.winner){
                this.checkGameOver()
             } 
             this.moves++;
             this.changePlayer()
              this.stepNums.push(this.moves)
             this.$emit('gridInfo', {message:this.turnMessage,steps:this.stepNums})
        },
        changePlayer () {
            if(!this.winner){
                this.currentPlayer = this.nonCurrentPlayer
                this.turnMessage = `Next player  : ${this.currentPlayer}`
            }
        },
        calculateWinner () {
            debugger
            this.winLines.forEach(element => {
                let [cell1,cell2,cell3] = element;
                let gameboard = this.gameboard;
                const curPlayer = this.currentPlayer;
                if(gameboard[cell1].content === curPlayer && gameboard[cell2].content === curPlayer && gameboard[cell3].content === curPlayer ){
                    this.winner = this.currentPlayer
                    this.turnMessage = `Winner : ${this.currentPlayer}`
                    this.$set(this.isWin,cell1,true)
                    this.$set(this.isWin,cell2,true)
                    this.$set(this.isWin,cell3,true)
                }
            });
        },
        checkGameOver(){
            debugger
            if(this.moves > 7){
                alert('game over!')
            }
        },
        jumpToStep(step){
          debugger
          this.isWin = Array(9).fill(false);
          this.winner = '';
          this.gameboard = [
                {id:0,content:''},
                {id:1,content:''},
                {id:2,content:''},
                {id:3,content:''},
                {id:4,content:''},
                {id:5,content:''},
                {id:6,content:''},
                {id:7,content:''},
                {id:8,content:''}]
          const history = this.history.slice(0,step);
          history.forEach( element => {
              this.gameboard[element.id].content = element.content
          });
          this.moves = step
          this.stepNums = this.stepNums.slice(0,step)
        },
        restart(){
            Object.assign(this.$data, this.$options.data())
            this.$emit("resetInfo");
        }
    }
}

</script>
<style>
.header{
  text-align: center;
  margin: 15px 0;
}

.board-container {
    width: 500px;
    height: 500px;
    background-color:lightgrey;
    margin: 0 auto;
    font-size: 0;
    border: 2px solid #000;
    -webkit-box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.75);
    box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.75);
}

.board-cell {
    width: calc(100% / 3);
    height: calc(100% / 3); 
    display: inline-block;
    font-size: 40px;
    text-align: center;
    border: 2px solid #000;
    padding: 20px;
    vertical-align: top;
    font-family: "Permanent Marker";
    caret-color: rgba(0,0,0,0);
}

  .cell {
    position: relative;
    top: 70%;
    transform: translateY(-50%);
    height: 100px;
  }

 .winnerColor {
    background-color:#808080;
}

.reset {
    text-align: center;
    margin: 20px auto 0;
}

.replay-btn {
      width: 25%;
      padding: 10px 20px;
      border: 2px solid #000;
      border-radius: 5px;
      outline: none;
      letter-spacing: 0;
      text-transform: uppercase;
      font-size: 16px;
      margin-top: 12px;
      word-spacing: 3px;
      background-color: #fff;
  }

  .replay-btn:hover,
  .replay-btn:active {
    outline: none;
    color: #fff;
    background-color: #000;
  }

  @media only screen and (max-width: 767px) {
    .board__cell {
      font-size: 16px;
      padding: 5px;
    }
  
    .replay-btn {
      width: 50%;
    }
  }
</style>