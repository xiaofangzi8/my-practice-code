<template>
    <div id="app" class = "board-box">
      <base-grid  ref="jump" @gridInfo="parentGridInfo" @resetInfo="parentResetInfo"></base-grid>
      <base-info :steps="steps" :message="message" @stepInfo="parentStepInfo"></base-info> 
    </div>
</template>
<script>
   import BaseGrid from './components/BaseGrid.vue'
   import BaseInfo from './components/BaseInfo.vue'
   export default {
      components: {
        BaseGrid,
        BaseInfo
      },
      name: 'App',
      data () {
        return {
           message: 'Next player : X',
           steps:[]
        }
      },
      methods: {
        parentGridInfo(data){
          debugger
          this.message = data.message;
          this.steps = data.steps;
        },
        parentStepInfo(data){
          this.$refs.jump.jumpToStep(data) 
        },
        parentResetInfo(){
          Object.assign(this.$data, this.$options.data())
        }
      }
    }
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
div{
  display: block;
}

li{
  margin-top: 2px;
}

.board-box{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
