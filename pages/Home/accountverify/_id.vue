<template>
   <div>

       
        
        <main-section></main-section>
      <second-section>
      </second-section>
      <verify>
      </verify>

       

     
        
</div>
       
</template>

<script>
import MainNavigation from '~/components/MainNavigation';
import MainSection from"~/components/MainSection";
import SecondSection from "~/components/SecondSection";
import Restaurants from "~/components/Restaurants";
import Verify from "~/components/Verify";







export default {
 auth: false
,
    name: 'accountverify',
    components: {
        MainNavigation,
        MainSection,
        Restaurants,
       
        SecondSection,
        Verify
     
       
    },

    data(){
        return{

        }
    },

    
methods:{

open () {

 

    this.$modal.show('success' )
     document.documentElement.style.overflow = 'hidden'
    


  
  },

   open2 () {

 

    this.$modal.show('error' )
     document.documentElement.style.overflow = 'hidden'
     
  
  },

},





async mounted(){


 console.log(this.$route.params.id)


  if(this.$route.params.id){

  const ip = await this.$axios.$post('/api3/account-confirm-email/',
   {
          key:this.$route.params.id,
         
        })
        .then(response => {
                       
                        
                          console.log(response);
                   
this.open()
 



                          
                      })
                      .catch((error) => {
                        console.log(error.response.data)
                        
                  console.error();
this.open2()

                        
                      });

  }

        
        },









};
</script>

<style>
</style>