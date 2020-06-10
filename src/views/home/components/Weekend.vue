<template>
    <div>
        <div class="title">周末去哪</div>
        <ul>
            <li class="item" v-for="item in weekendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="loading">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:"HomeWeekend",
        data(){
            return{
                weekendList:[
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
    .item-img-wrapper
        overflow:hidden
        height:0
        padding-bottom:37.5%
        .item-img
            width:100%
    .item-info
        padding:0.1rem
        .item-title
            line-height:.54rem
            font-size:.32rem
            ellipsis()
        .item-desc
            line-height:.4rem
            color:#aaa
            ellipsis()
</style>