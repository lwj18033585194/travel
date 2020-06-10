<template>
    <div class="icons">
        <swiper>
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
                iconList:[
                    {
                        id:"1",
                        imgUrl:"http://s.qunarzz.com/homenode/images/touchheader/hotel.png",
                        desc:"酒店"
                    },
                    {
                        id:"2",
                        imgUrl:"http://s.qunarzz.com/homenode/images/touchheader/flight.png",
                        desc:"飞机票"
                    },
                    {
                        id:"3",
                        imgUrl:"http://s.qunarzz.com/homenode/images/touchheader/train.png",
                        desc:"火车票"
                    },
                    {
                        id:"4",
                        imgUrl:"http://s.qunarzz.com/homenode/images/touchheader/package.png",
                        desc:"旅游"
                    },
                    {
                        id:"5",
                        imgUrl:"http://s.qunarzz.com/homenode/images/touchheader/piao.png",
                        desc:"景点门票"
                    },
                    {
                        id:"6",
                        imgUrl:"http://s.qunarzz.com/homenode/images/touchheader/hotel.png",
                        desc:"酒店"
                    },
                    {
                        id:"7",
                        imgUrl:"http://s.qunarzz.com/homenode/images/touchheader/hotel.png",
                        desc:"酒店"
                    },
                    {
                        id:"8",
                        imgUrl:"http://s.qunarzz.com/homenode/images/touchheader/hotel.png",
                        desc:"酒店"
                    },
                    {
                        id:"9",
                        imgUrl:"http://s.qunarzz.com/homenode/images/touchheader/hotel.png",
                        desc:"酒店酒店酒店酒店酒店酒店酒店"
                    }                                                                                                   
                ]
            }
        },
        computed:{
            page(){
                const pages=[];
                this.iconList.forEach((item,index)=>{
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