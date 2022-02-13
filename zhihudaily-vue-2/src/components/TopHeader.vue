<template>
<header class="headerBox">
    <div class="title">
        <div class="time">
        <span>{{date | day}}</span>
        <span>{{date | month}}</span>
        </div>
        <h1>知乎日报</h1>
    </div>
    <div class = "picture">
        <img src="../assets/register.jpg" alt />
    </div>
</header>
</template>

<script>
export default {
    props:[
        "date"
    ],
    filters:{
        month(val){
            let dict = {
            "1": "一月",
            "2": "二月",
            "3": "三月",
            "4": "四月",
            "5": "五月",
            "6": "六月",
            "7": "七月",
            "8": "八月",
            "9": "九月",
            "10": "十月",
            "11":"十一月",
            "12":"十二月"
            }
            let month = val.substr(4,2);
            if(month[0] == '0'){
                month = month.slice(1);
            }
            return dict[month];
        },
        day(val){
            let day = val.slice(-2)
            if(day[0] == '0'){
            day = val.slice(1);
            }
            return day;
        }
  },

}
</script>

<style scoped>
.headerBox{
    top:0;
    left:0;
    z-index: 20;

    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 0.2rem;
    width: 100%;
    height: 1.2rem;
    background: #ffffff;
}

.title{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.title h1 {
    padding: 0 1rem;
}

.time{
    padding: 0 0.4rem;
    border-right: 0.02rem solid #dddddd ;
}

.time span{
    display: block;
}

.time span:nth-of-type(1){
    text-align: right;
    font-weight: 600;
    font-size: 1.2rem;
}

.picture {
    width:3.0rem;
    height:3.0rem;
    display: flex;
    justify-content: flex-end;
    border-radius: 50%;
    overflow: hidden;
}
</style>