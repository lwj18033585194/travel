<template>
    <div>
        <CityHeader></CityHeader>
        <CitySearch :cities="cities"></CitySearch>
        <CityList :hotCities="hotCities" :cities="cities" :letter="letter"></CityList>
        <CityAlphabet :cities="cities" @change="handleLetterChange"></CityAlphabet>
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
                cities:{},
                letter:''
            }
        },
        methods:{
            getCityInfo(){
                axios.get('/mock/city.json')
                .then(this.getCityInfoSucc)
            },
            getCityInfoSucc(res){
                res=res.data;
                if(res.ret&&res.data){
                    this.hotCities=res.data.hotCities;
                    this.cities=res.data.cities;
                }
            },
            handleLetterChange(letter){
                this.letter=letter;
            }
        },
        mounted(){
            this.getCityInfo()
        }
    }
</script>

<style lang="stylus" scoped>

</style>