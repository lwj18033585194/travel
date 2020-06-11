<template>
    <div>
        <HomeHeader :city="city"></HomeHeader>
        <HomeSwiper :swiperLists="swiperList"></HomeSwiper>
        <HomeIcons :iconLists="iconList"></HomeIcons>
        <HomeRecommend :recommendLists="recommendList"></HomeRecommend>
        <HomeWeekend :weekendLists="recommendList"></HomeWeekend>
    </div>
</template>

<script>
    import HomeHeader from './components/Header'
    import HomeSwiper from './components/Swiper'
    import HomeIcons from './components/Icons'
    import HomeRecommend from './components/Recommend'
    import HomeWeekend from './components/Weekend'
    import axios from 'axios'
    export default {
        name:'Home',
        components:{HomeHeader,HomeSwiper,HomeIcons,HomeRecommend,HomeWeekend},
        data(){
            return {
                city:'',
                swiperList:[],
                iconList:[],
                recommendList:[],
                weekendList:[]
            }
        },
        methods:{
            getHomeInfo(){
                axios.get('/api/index.json')
                .then(this.getHomeInfoSucc)
            },
            getHomeInfoSucc(res){
                res=res.data
                if(res.ret&&res.data){
                    this.city=res.data.city;
                    this.swiperList=res.data.swiperList;
                    this.iconList=res.data.iconList;
                    this.recommendList=res.data.recommendList;
                    this.weekendList=res.data.weekendList;
                }
            }
        },
        mounted(){
            this.getHomeInfo();
        }
    }
</script>

<style lang="sass" scoped>

</style>
