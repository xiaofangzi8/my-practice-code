<template>
<header class="headerBox">
    <div class="title">
        <div class="time">
        <span>13</span>
        <span>二月</span>
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
    padding: 0 0.4rem;
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