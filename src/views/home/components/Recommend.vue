<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl" alt="loading">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'HomeRecommend',
        data(){
            return{
                recommendList:[
                    {
                        id:"01",
                        imgUrl:"http://img1.qunarzz.com/sight/p0/1805/78/789e31213399290fa3.water.jpg_256x160_c7b5500c.jpg",
                        title:"白石山世界地质公园",
                        desc:"壮观悬空玻璃道，抗日少年英雄山"
                    },
                    {
                        id:"02",
                        imgUrl:"http://img1.qunarzz.com/sight/p0/1412/f4/ceb0a95c3d11daee35c46eed064c4303.water.jpg_256x160_28947ac6.jpg",
                        title:"清东陵",
                        desc:"众多清朝帝王和皇后的宏伟陵墓建筑群"
                    },
                    {
                        id:"03",
                        imgUrl:"http://img1.qunarzz.com/sight/p0/1805/35/35d8ce88ca9b2488a3.water.jpg_256x160_1218274a.jpg",
                        title:"山海关老龙头景区",
                        desc:"人类历史上的千古奇观"
                    },
                    {
                        id:"04",
                        imgUrl:"http://img1.qunarzz.com/sight/p0/1905/5d/5dc13c7e0e84e887a3.img.jpg_256x160_93c939bc.jpg",
                        title:"避暑山庄",
                        desc:"皇家园林，京郊“小故宫”"
                    }
                ]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .title
        margin-top:.2rem
        line-height:.8rem
        background:#eee
        text-indent:.2rem
    .item
        overflow:hidden
        display:flex
        height 1.9rem
        .item-img
            width:1.7rem
            height:1.7rem
            padding:.1rem
        .item-info
            flex:1
            padding 0.1rem
            min-width:0
            .item-title
                line-height:.54rem
                font-size:.32rem
                ellipsis()
            .item-desc
                line-height:.4rem
                color:#aaa
                ellipsis()
            .item-button
                line-height:.44rem
                margin-top:.16rem
                background #ff9300
                padding:0 .2rem
                border radius 0.06rem
                color:#fff


</style>