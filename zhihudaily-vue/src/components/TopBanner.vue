<template>
  <div class="block bannerBox">
      <el-carousel height="15rem">
          <el-carousel-item v-for="item in 4" :key="item">
            <img src="https://pic1.zhimg.com/v2-b6d4243785297b00be7e34d2de89d01e_fhd.jpg?source=8673f162" alt />
            <div class="info">
                <h3>如何养成学习的好习惯</h3>
                <span>小房子</span>
            </div>
          </el-carousel-item>
      </el-carousel>
  </div>
</template>

<script>
export default {

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

  .info span{
    color:#ffffff;
  }
</style>