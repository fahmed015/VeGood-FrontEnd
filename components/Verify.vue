<template>




<div>




 



<modal name="error"
 @closed="close"
    
        :reset="true"
        height="auto"
       :width="$vuetify.breakpoint.xs ? '100% ' : '90%'"
        :scrollable="true"
        
       
         >



 <v-card >




<v-container fluid >

  






<v-row no-gutters  >


 <v-row justify="end">    
<v-col
  
   cols="1"
  
 
      >
  <v-btn
        
        
            icon
            @click="$modal.hide('error')"
            width="40"
            
           
          >
          
           <v-icon   color="black"  >
        mdi-close
      </v-icon>
          </v-btn>
</v-col>

</v-row>





<v-col cols=12>
<div>
There is somthing wrong check link again
</div>
</v-col>



</v-row>


</v-container>

 </v-card> 







  </modal>





<modal name="success"
 @closed="close"
    
        :reset="true"
        height="auto"
       :width="$vuetify.breakpoint.xs ? '100% ' : '90%'"
        :scrollable="true"
        
       
         >



 <v-card >




<v-container fluid >

  


<v-row no-gutters >


 <v-row justify="end">    
<v-col
  
   cols="1"
  
 
      >
  <v-btn
        
        
            icon
            @click="$modal.hide('success')"
            width="40"
            
           
          >
          
           <v-icon   color="black"  >
        mdi-close
      </v-icon>
          </v-btn>
</v-col>

</v-row>





<v-col cols=12>
<div>
registeration Succesfull
</div>
</v-col>



</v-row>

</v-container>




 </v-card> 







  </modal>








</div>

</template>

<script>


export default {
     name: 'Verify',

 
components: {



},

   data(){
      
      return{







      }
    },

  
    



methods:{
















close(){

 document.documentElement.style.overflow = 'auto'
  this.$router.push('/Home')

},






},

// async mounted(){

// var check=false
// var check=this.$auth.loggedIn
// console.log(check)

// // this.category=this.$store.getters.getcat(check)
// // console.log(this.category)

// if(check==true){
   


// try {
//         let response = await  this.$axios.$get('/api4/profile/view')
//         console.log(response)
//         console.log(response[0].first_name)
// this.username=response[0].first_name
// this.lastname=response[0].last_name




        

//       } catch (err) {
//         console.log(err)
//       }








// }  
          
//         },






























}
</script>


<style scoped>








</style>
