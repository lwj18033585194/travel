<template>
    <div>
        <HomeHeader></HomeHeader>
        <HomeSwiper></HomeSwiper>
        <HomeIcons></HomeIcons>
        <HomeRecommend></HomeRecommend>
        <HomeWeekend></HomeWeekend>
    </div>
</template>

<script>
    import HomeHeader from './components/Header'
    import HomeSwiper from './components/swiper'
    import HomeIcons from './components/Icons'
    import HomeRecommend from './components/Recommend'
    import HomeWeekend from './components/Weekend'
    export default {
        name:'Home',
        components:{HomeHeader,HomeSwiper,HomeIcons,HomeRecommend,HomeWeekend}
    }
</script>

<style lang="sass" scoped>

</style>