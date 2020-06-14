<template>
<div>
    <div class="banner" @click="handleBannerClick">
        <img class="banner-img" src="https://img1.qunarzz.com/vs_ceph_vs_tts/b2c33082-d525-4a3b-88c1-1b592b1f8632.jpg_r_1280x840x95_9d7adc9c.jpg" alt="loading">
        <div class="banner-info">
            <div class="banner-title">大连海洋世界</div>
            <div class="banner-number">
                <span class="iconfont banner-icon">&#xe60b;</span>
                39
            </div>
        </div>
    </div>
    <CommonGallery :imgs="imgs" v-show="showGallery" @close="handleGalleryClose"></CommonGallery>
</div>
</template>

<script>
    import CommonGallery from 'common/gallery/Gallery.vue'
    export default {
        name:"DetailBanner",
        components:{CommonGallery},
        data(){
            return{
                showGallery:false,
                imgs:[
                    "https://img1.qunarzz.com/vs_ceph_vs_tts/b2c33082-d525-4a3b-88c1-1b592b1f8632.jpg_r_1280x840x95_9d7adc9c.jpg",
                    "https://img1.qunarzz.com/vs_ceph_vs_tts/b2c33082-d525-4a3b-88c1-1b592b1f8632.jpg_r_1280x840x95_9d7adc9c.jpg",
                    "https://img1.qunarzz.com/vs_ceph_vs_tts/b2c33082-d525-4a3b-88c1-1b592b1f8632.jpg_r_1280x840x95_9d7adc9c.jpg",
                    "https://img1.qunarzz.com/vs_ceph_vs_tts/b2c33082-d525-4a3b-88c1-1b592b1f8632.jpg_r_1280x840x95_9d7adc9c.jpg"
                ]
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