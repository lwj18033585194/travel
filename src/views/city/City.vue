<template>
    <div>
        <CityHeader></CityHeader>
        <CitySearch></CitySearch>
        <CityList :hotCities="hotCities" :cities="cities"></CityList>
        <CityAlphabet :cities="cities"></CityAlphabet>
    </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
    export default {
        name:'City',
        components:{CityHeader,CitySearch,CityList,CityAlphabet},
        data(){
            return{
                hotCities:[],
                cities:{}
            }
        },
        methods:{
            getCityInfo(){
                axios.get('/mock/city.json')
                .then(this.getCityInfoSucc)
            },
            getCityInfoSucc(res){
                res=res.data;
                                console.log(res);
                if(res.ret&&res.data){
                    this.hotCities=res.data.hotCities;
                    this.cities=res.data.cities;
                }
            }
        },
        mounted(){
            this.getCityInfo()
        }
    }
</script>

<style lang="stylus" scoped>

</style>