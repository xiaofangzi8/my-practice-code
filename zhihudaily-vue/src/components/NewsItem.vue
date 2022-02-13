<template>
  <router-link :to="{path:`/detail/1`}" class="newsItem">
    <div class="con">
       <h4>如何养成学习的好习惯</h4>
       <span>小房子</span>
    </div>
    <div class="pic">
      <img src="https://pic2.zhimg.com/v2-8cf15acbb5f22f4414a45c1a3e54ff81.jpg?source=8673f162" alt/>
    </div>
  </router-link>
</template>

<script>
export default {

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

</style>