let defaultCity = '石家庄';
try {
    if (localStorage.city) {
        defaultCity = localStorage.city
    }
} catch (e) { console.log('') }
export default{
    city:defaultCity
}