<template>
    <div class="wrapper">
  <swiper :options="swiperOption">
    <swiper-slide v-for="item in swiperList" :key="item.id">
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
                swiperList:[
                    {
                        id:"1001",
                        imgUrl:'https://imgs.qunarzz.com/vs_ceph_vs_tts/6a891009-f7f4-4089-847d-4b5e1de65daf.jpg_r_390x260x95_e2519421.jpg'
                    },
                    {
                        id:"1002",
                        imgUrl:'https://imgs.qunarzz.com/vs_ceph_vs_tts/62c4db8a-2dde-4126-839e-e5da5ca66816.jpg_r_390x260x95_c247a38a.jpg'
                    },
                    {
                        id:"1003",
                        imgUrl:'https://imgs.qunarzz.com/vs_ceph_vs_tts/2b2b5ad6-5d25-4409-b646-dd70ef313bd9.jpg_r_390x260x95_c6af989b.jpg'
                    },
                    {
                        id:"1004",
                        imgUrl:'https://imgs.qunarzz.com/p/tts9/1807/91/b699e422ddced902.jpg_r_390x260x95_d92228da.jpg'
                    }
                ]
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