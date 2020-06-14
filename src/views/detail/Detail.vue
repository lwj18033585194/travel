<template>
    <div>
        <DetailBanner :sightName="sightName" :bannerImg="bannerImg" :galleryImgs="galleryImgs"></DetailBanner>
        <DetailHeader></DetailHeader>
        <div class="content">
            <DetailList :list="list"></DetailList>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import DetailBanner from './components/Banner'
    import DetailHeader from './components/Header'
    import DetailList from './components/List'
    export default {
        name:"Detail",
        components:{DetailBanner,DetailHeader,DetailList},
        data(){
            return{
                list:[],
                sightName:'',
                bannerImg:'',
                galleryImgs:[]
            }
        },
        methods:{
            getDetailInfo(){
                axios.get('/api/detail.json',{params:{id:this.$route.params.id}})
                .then(this.getDetailInfoSucc)
            },
            getDetailInfoSucc(res){
                res=res.data;
                if(res.ret&&res.data){
                    this.sightName=res.data.sightName;
                    this.bannerImg=res.data.bannerImg;
                    this.galleryImgs=res.data.galleryImgs;
                    this.list=res.data.categoryList
                } 
            }
        },
        mounted(){
            this.getDetailInfo()
        }
    }
</script>

<style lang="stylus" scoped>
    .content
        height:50rem
</style>