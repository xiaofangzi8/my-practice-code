<template>
<div class="homeBox" v-if="time">
    <top-header></top-header>
    <top-banner :bannerData="bannerList"></top-banner>
    <div class="infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="20" infinite-scroll-throttle-delay="500">
      <div>
      <news-item v-for="item in storyList" :key="item.id" :item = "item"></news-item>
      </div>
      <div class="loading" v-if="loading">
         <span id="load-text">{{loadText}}</span>
      </div>
    </div>
</div>
</template>

<script>
import TopBanner from '../components/TopBanner.vue'
import TopHeader from '../components/TopHeader.vue'
import NewsItem from '../components/NewsItem.vue'
import { getDataList,getBeforeNews } from '@/api/index'
export default {
  components: { TopHeader, TopBanner, NewsItem },
  data () {
    return {
      time:'',
      storyList:[],
      bannerList:[],
      lastTime: '',
      loading:false,
      loadText:'正在加载...'
    }
  },
  methods:{
    loadMore(){
      this.loading =true
      getBeforeNews(this.lastTime).then(res=>{
        let {date,stories} = res;
        this.lastTime = date;
        this.storyList = this.storyList.concat(stories);
      })
      this.loading=false;
    }
  },
  created(){
    getDataList().then(res=>{
      let {date,stories,top_stories} = res;
      this.time = date;
      this.storyList = stories;
      this.bannerList = top_stories;
      this.lastTime = date;
    })
  }
 
  }
</script>

<style>
.homeBox{
    margin: auto;
    width: 50rem; 
    padding-top: 1.2rem;
    height: 100%;
    overflow-y: auto;
}

.loading{
  font-size: 12px;
}
</style>

