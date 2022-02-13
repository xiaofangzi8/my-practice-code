<template>
  <div class="detailBox">
    <div class="headBox">     
        <img src="https://pic1.zhimg.com/v2-b6d4243785297b00be7e34d2de89d01e_fhd.jpg?source=8673f162" alt />               
        <div class="info">
            <h3>如何养成学习的好习惯</h3>
            <span>小房子</span>
        </div>
    </div>
    <div class="content">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
 .detailBox{
     width: 100%;
     height: 100%;
     display: flex;
     justify-content: center;
 }
 .headBox{
    max-height: 60vh;
    width: 30vw;
    -webkit-filter: brightness(.95);
    filter: brightness(.95);
    position: relative;
 }

 .headBox img{
     width: 100%;
     height: 100%;
     /* image-rendering: -moz-crisp-edges;
     image-rendering: -o-crisp-edges;
     image-rendering: -webkit-optimize-contrast;
     image-rendering: crisp-edges;    
     -ms-interpolation-mode: nearest-neighbor; */
 }

 .headBox .info{
     margin: 1em 1em;
     bottom:0;
     left:0;
     color:#ffffff;
     position: absolute;
 }

.headBox .info h3{
    margin-block-start: 0.2em;
    margin-block-end: 0.2em;
}
</style>