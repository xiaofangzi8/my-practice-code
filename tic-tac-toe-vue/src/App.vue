<template>
    <div id="app" class = "board-box">
          <div class="board-main">
              <div class="header">
                  <h1>Tic Tac Toe</h1>
              </div>
              <base-grid></base-grid>
              <div class="reset">
                    <button class="replay-btn" @click="restart">重置棋盘</button>
              </div>
          </div>
          <div class = "board-info">
                <div class="board-player-turn">{{ message }}</div>
                <ol class="step-info">
                  <li v-for="(step, index) in steps" :key="index"  ><button @click="jumpto(step)">Go to move #{{ step }}</button></li>
                </ol>
            </div>
    </div>
</template>

<script>
import Bus from './common/bus.js'
import BaseGrid from './components/BaseGrid.vue'
export default {
  components: {
    BaseGrid
  },
  name: 'App',
  data () {
    return {
      message: 'Next player : X',
      steps:[]
    }
  },
  methods: {
    restart () {
      Bus.$emit('clearCell')
      Bus.$emit('gridReset')
    },
    jumpto (step){
      Bus.$emit('jumptoStep',step)
    }
  },

  created () {
    Bus.$on('message', (mes) => {
      this.message = mes
    })

    Bus.$on('stepNum', (nums) => {
      this.steps = nums
    })

    Bus.$on('gridReset', () => {
  		Object.assign(this.$data, this.$options.data())
  	})
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
li{
  margin-top: 2px;
}

.header{
  text-align: center;
  margin: 15px 0;
}

.board-box{
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.board-info{
 margin:70px 20px;
 width:300px;
}

.board-player-turn {
    margin: 10px 0 0px 10px;
    height: 30px;
  }
  
.step-info{
    margin-left:40px ;
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
