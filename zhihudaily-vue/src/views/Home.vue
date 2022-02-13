<template>
<div class="homeBox">
    <top-header></top-header>
    <top-banner></top-banner>
    <!-- <div class="infinite-list" v-infinite-scroll="load" style="overflow:auto"> -->
    <div>
     <news-item v-for="item in 4" :key="item"></news-item>
    </div>
</div>
</template>

<script>
import TopBanner from '../components/TopBanner.vue'
import TopHeader from '../components/TopHeader.vue'
import NewsItem from '../components/NewsItem.vue'
import { getDataList } from '../api/home'
export default {
  components: { TopHeader, TopBanner, NewsItem },
  data () {
    return {
      time:'',
      list:[],
      bannerList:[],
      lastTime: '',
    }
  },
  created(){
    getDataList().then(res=>{
        console.log(res);
    })
  }
 
  }
</script>

<style>
.homeBox{
    margin: auto;
    width: 60rem; 
    padding-top: 1.2rem;
}
</style>
