<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont">&#xe624;</span>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            请输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
            <div class="header-right">
                {{this.city}}
                <span class="iconfont city">&#xe72e;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name:'HomeHeader',
        computed:{
            ...mapState(['city'])
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
        display:flex
        line-height:$headerHeight
        background:$bgColor
        color:#fff
        .header-left
            width: 0.64rem
            float:left
            text-align :center
        .header-input
            flex:1
            margin-top:.12rem
            margin-left:.2rem
            padding-left:.1rem
            height:.64rem
            line-height:.64rem
            background:#fff
            border-radius:.1rem
            color:#ccc
            box-sizing :border-box
        .header-right
            min-width: 1.04rem
            padding: 0 .1rem
            float:right
            text-align:center
            color:#fff
            .city
                margin-left:-.05rem



</style>
