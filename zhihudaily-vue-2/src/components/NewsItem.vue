<template>
  <router-link :to="'/detail/'+item.id" class="newsItem">
    <div class="con">
       <h4>{{item.title}}</h4>
       <span>{{item.hint}}</span>
    </div>
    <div class="pic">
      <img :src="item.images[0]" alt/>
    </div>
  </router-link>
</template>

<script>
export default {
  props:[
    "item",
  ],
   data (){
     return {

     }
   }
}
</script>

<style  scoped>
  .newsItem{
    top:0;
    left:0;
    z-index: 20;

    display: flex;
    justify-content: space-between;
    align-items:flex-start;
    box-sizing: border-box;
    padding: 0 0.2rem;
    width: 100%;
    height:8rem;
    background: #ffffff;
    color:#000000;
    text-decoration: none;
  }

  .con{
    width:15rem;
  }

  .con h4{
    margin-block-start: 0em;
    margin-block-end: 0.3em;
  }

  .pic{
    width: 5rem;
    height: 5rem;
  }

  .pic img{
    width: 100%;
    height:100%;
  }
</style>