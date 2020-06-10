<template>
    <div class="icons">
        <swiper :options="swiperOption">
        <swiper-slide v-for="(page,index) of page" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
            <div class="icon-img">
                <img class="icon-img-content" :src="item.imgUrl" alt="loading">
            </div>
            <p class="icon-desc">{{item.desc}}</p>
        </div>
        </swiper-slide>
        </swiper>         
    </div>
</template>

<script>
    export default {
        name:'HomeIcons',
        data (){
            return{
                iconList:[],
                swiperOption:{
                    autoPlay:false
                }
            }
        },
        props:{
            iconLists:Array
        },
        computed:{
            page(){
                const pages=[];
                this.iconLists.forEach((item,index)=>{
                    const page=Math.floor(index/8);
                    if(!pages[page]){
                        pages[page]=[]
                    }
                    pages[page].push(item);
                })
                return pages
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    @import '~styles/mixins.styl' 
    .icons >>> .swiper-container{
        height:0
        padding-bottom:50%
    }
    .icons
        margin-top:.1rem
        .icon
            position:relative
            overflow:hidden
            float:left
            width:25%
            height 0
            padding-bottom:25%
            .icon-img
                position:absolute
                left:0
                top:0
                right:0
                bottom 0.44rem
                box-sizing:border-box
                padding:.1rem
                .icon-img-content
                    display:block
                    margin:0 auto
                    height:100%
            .icon-desc
                position:absolute
                left:0
                right:0
                bottom:0
                height 0.44rem
                line-height:.44rem
                color:$darkTextColor
                text-align:center
                ellipsis()
</style>