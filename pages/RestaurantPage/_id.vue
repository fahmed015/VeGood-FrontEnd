<template>
   <div>
       
   
         <restaurant-card ></restaurant-card>
      <restuarant-bar></restuarant-bar>

        
</div>
       
</template>

<script>

import MainNavigation from '~/components/MainNavigation';
import RestaurantCard from '~/components/RestaurantCard'
 import RestaurantBar from '~/components/RestuarantBar'


export default {
   
    name: 'Restaurant',
    components: {
          MainNavigation,
           RestaurantCard,
         RestaurantBar
       
    },
    
    data(){
        return{
id:null,
test:[]


        }
    },

 created() {
     
     
    },

methods:{



},



// async asyncData ({params}) {
//     console.log("enterrrrrr22");
//     console.log(params.id)
//     console.log(`http://vegoodeg.pythonanywhere.com/api/suppliers/id/${params.id}/`)
//     const { data } = await axios.get(`http://vegoodeg.pythonanywhere.com/api/suppliers/id/${params.id}/`)
//     console.log(data);
//     return { info: data }
//   },












};
</script>

<style>
</style>