<template>
   <div>

        
        <main-section></main-section>
      <second-section>
      </second-section>

       

     
        
</div>
       
</template>

<script>
import MainNavigation from '~/components/MainNavigation';
import MainSection from"~/components/MainSection";
import SecondSection from "~/components/SecondSection";
import Restaurants from "~/components/Restaurants";






export default {

    name: 'login',
    components: {
        MainNavigation,
        MainSection,
        Restaurants,
        SecondSection
     
       
    },

    data(){
        return{

        }
    },

    

async mounted(){

console.log(this.$vuetify.breakpoint.width)
console.log(this.$vuetify.breakpoint.name)
console.log(this.$vuetify.breakpoint.xs)
this.$nextTick(function () {
                                  this.open()
})


        
        },



 created: function()
        {
      
        },

        methods:{


            open(){
    this.$modal.show('example' )
            }
        }




};
</script>

<style>
</style>