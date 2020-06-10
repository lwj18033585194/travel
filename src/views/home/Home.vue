<template>
    <div>
        <HomeHeader></HomeHeader>
        <HomeSwiper></HomeSwiper>
        <HomeIcons></HomeIcons>
    </div>
</template>

<script>
    import HomeHeader from './components/Header'
    import HomeSwiper from './components/swiper'
    import HomeIcons from './components/Icons'
    export default {
        name:'Home',
        components:{HomeHeader,HomeSwiper,HomeIcons}
    }
</script>

<style lang="sass" scoped>

</style>