<template>
<div>
    <div class="banner" @click="handleBannerClick">
        <img class="banner-img" :src="bannerImg" alt="loading">
        <div class="banner-info">
            <div class="banner-title">{{this.signtName}}</div>
            <div class="banner-number">
                <span class="iconfont banner-icon">&#xe60b;</span>
                {{this. galleryImgs.length}}
            </div>
        </div>
    </div>
    <FadeAnimation>
    <CommonGallery :imgs="galleryImgs" v-show="showGallery" @close="handleGalleryClose" ></CommonGallery>
    </FadeAnimation>
</div>
</template>

<script>
    import CommonGallery from 'common/gallery/Gallery.vue'
    import FadeAnimation from 'common/fade/FadeAnimation.vue'
    export default {
        name:"DetailBanner",
        components:{CommonGallery,FadeAnimation},
        props:{
            signtName:String,
            bannerImg:String,
            galleryImgs:Array
        },
        data(){
            return{
                showGallery:false,
            }
        },
        methods:{
            handleBannerClick(){
                this.showGallery=true;
            },
            handleGalleryClose(){
                this.showGallery=false;
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .banner
        position:relative
        overflow:hidden
        height:0
        padding-bottom:55%
        .banner-img
            width:100%
        .banner-info
            display:flex
            position:absolute
            left:0
            right:0
            bottom:0
            line-height:.6rem
            color:#fff
            background-image:linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.8))
            .banner-title
                flex:1
                font-size:.32rem
                padding:0 .2rem
            .banner-number
                margin-top:.14rem
                padding:0 .4rem
                height:.32rem
                line-height:.32rem
                border-radius:.2rem
                background:rgba(0, 0, 0, .8)
                font-size:.24rem
                .banner-icon
                    font-size:.24rem
</style>