<template>
  <div class="block bannerBox">
      <el-carousel height="20rem">
          <el-carousel-item v-for="item in bannerData" :key="item.id">
             <router-link :to="'/detail/'+item.id">
                <img :src="item.image" alt />
                <div class="info">
                    <h3>{{item.title}}</h3>
                    <!-- <span>{{item.hint}}</span> -->
                </div>
            </router-link>
          </el-carousel-item>
      </el-carousel>
  </div>
</template>

<script>
export default {
  props:[
    "bannerData"
  ],
}
</script>

<style scoped>
  .bannerBox{
       padding: 1.5rem 0rem 1rem 0rem;
   }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }

  .el-carousel__item img {
    width:100%;
    height:100%;
    -webkit-filter: brightness(.95);
    filter: brightness(.95);
  }

  .info{
     margin:1rem 1rem;
     position: absolute;
     bottom:0;
     left:0;
  }

  .info h3{
    margin-block-start: 0.2em;
    margin-block-end: 0.2em;
    color:#ffffff;
  }

  /* .info span{
    color:#ffffff;
  } */
</style>