<template>
    <div class = "board-info">
        <div class="board-player-turn">{{ message }}</div>
        <ol class="step-info">
            <li v-for="(step, index) in steps" :key="index"  ><button @click="jumpto(step)">Go to move #{{ step }}</button></li>
        </ol>
    </div>
</template>

<script>
export default {
    props: [
        'message',
        'steps'
    ],
    
    data() {
      return {}
    },
    methods:{
        jumpto (step){
          this.$emit('stepInfo',step)
        }
    }
}
</script>

<style>
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
</style>
