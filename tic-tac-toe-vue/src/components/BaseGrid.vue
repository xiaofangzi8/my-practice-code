<template>
    <table class="board-container">
        <tr>
            <base-cell name="0" :class="{winner: isWin[0]}"></base-cell>
            <base-cell name="1" :class="{winner: isWin[1]}"></base-cell>
            <base-cell name="2" :class="{winner: isWin[2]}"></base-cell>
        </tr>
        <tr>
            <base-cell name="3" :class="{winner: isWin[3]}"></base-cell>
            <base-cell name="4" :class="{winner: isWin[4]}"></base-cell>
            <base-cell name="5" :class="{winner: isWin[5]}"></base-cell>
        </tr>
        <tr>
            <base-cell name="6" :class="{winner: isWin[6]}"></base-cell>
            <base-cell name="7" :class="{winner: isWin[7]}"></base-cell>
            <base-cell name="8" :class="{winner: isWin[8]}"></base-cell>
        </tr>
    </table>
</template>

<script>
import Bus from '../common/bus.js'
import BaseCell from './BaseCell.vue'

export default {
    components:{ 
        BaseCell
    },
    data () {
        return {
            currentPlayer:'X',
            turnMessage:'',
            moves:0,
            winner: '',
            gameboard:{
                0: '', 1: '', 2: '',
				3: '', 4: '', 5: '',
				6: '', 7: '', 8: ''
            },
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
          stepNums:[]
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
        changePlayer () {
            if(!this.winner){
                this.currentPlayer = this.nonCurrentPlayer
                this.turnMessage = `Next player  : ${this.currentPlayer}`
            }
        },
        calculateWinner () {
            this.winLines.forEach(element => {
                let [cell1,cell2,cell3] = element;
                let gameboard = this.gameboard;
                const curPlayer = this.currentPlayer;
                if(gameboard[cell1] === curPlayer && gameboard[cell2] === curPlayer && gameboard[cell3] === curPlayer ){
                    this.winner = this.currentPlayer
                    this.turnMessage = `Winner : ${this.currentPlayer}`
                    this.$set(this.isWin,cell1,true)
                    this.$set(this.isWin,cell2,true)
                    this.$set(this.isWin,cell3,true)
                    Bus.$emit('freeze')
                }
            });
        },
        checkGameOver(){
            if(this.moves > 7){
                alert('game over!')
            }
        }
    },
    created () {
        Bus.$on('strike',(cellName) => {
            debugger
            this.gameboard[cellName] = this.currentPlayer
            this.history.push({id:cellName,content:this.currentPlayer})
            this.calculateWinner()
            if(!this.winner){
               this.checkGameOver()
            } 
            this.moves++;
            this.changePlayer()
            Bus.$emit('message', this.turnMessage)
            this.stepNums.push(this.moves)
            Bus.$emit('stepNum',this.stepNums)
        })

        Bus.$on('jumptoStep', (step) => {
          this.isWin = Array(9).fill(false);
          this.winner = '';
          const history = this.history.slice(0,step);
          history.forEach( element => {
              this.gameboard = {
                  0: '', 1: '', 2: '',
                  3: '', 4: '', 5: '',
                  6: '', 7: '', 8: ''}
              this.gameboard[element.id] = element.content
          })
          this.moves = step
          this.stepNums = this.stepNums.slice(0,step)
          Bus.$emit('clearCell')
          Bus.$emit('coverGrid',history);
        })

        Bus.$on('gridReset', () => {
  		  Object.assign(this.$data, this.$options.data())
  	    })
    },
}
</script>
<style >
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

table {
    border-collapse:collapse;
}

 .winner {
    background-color:#808080;
}
</style>