<template>
  <div class="detailBox">
    <div class="headBox">  
        <img :src="item.image" alt />               
        <div class="info">
            <h3>{{item.title}}</h3>
        </div>
    </div>
    <div class="content" v-html="item.body"></div>
  </div>
</template>

<script>
import { getDeatil } from '@/api/index'

export default {
    data () {
        return {
            item:{}
        }
    },
    created(){
        let id = this.$route.params.id;
        getDeatil(id).then(res=>{
            this.item = res;
        })
    }
}
</script>

<style>
 .detailBox{
    position: relative;
    background-size: cover;
    height: 100vw;
 }
 .headBox{
    margin: auto;
    height: 100vw;
    max-height: 30vw;
    width: 35vw;
    -webkit-filter: brightness(.95);
    filter: brightness(.95);
 }

 .headBox img{
    image-rendering: -moz-crisp-edges;
    image-rendering: -o-crisp-edges;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;    
    -ms-interpolation-mode: nearest-neighbor; 
    object-fit: cover; 
    position: absolute;
    width: 100%;
    height: 100%;
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

.content{
    margin:2em auto;
    width: 35vw;
}

.avatar{
    display: none;
}
</style>