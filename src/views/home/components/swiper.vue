<template>
<div class="wrapper">
  <swiper :options="swiperOption" v-if="showSwiper">
    <swiper-slide v-for="item in swiperLists" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="loading">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
    export default {
        name:'HomeSwiper',
        data (){
            return{
                swiperOption:{
                    pagination:'.swiper-pagination',
                    loop:true
                },
                swiperList:[]
            }
        },
        props:{
            swiperLists:Array
        },
        computed:{
            showSwiper(){
                return this.swiperLists.length
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active{   
        background:#fff 
    }
    .wrapper
        overflow hidden
        width:100%
        height:0
        padding-bottom:33.33%
        background:#eee
        .swiper-img
            width:100%
            height :2.5rem
</style>