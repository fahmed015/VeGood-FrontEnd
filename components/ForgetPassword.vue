<template>




<div>









 



<v-row class="mt-16">
<v-col
   cols="12"
  

      >



<div   class=" wel theme1--text " > Forget your password </div>
</v-col>




<v-col
   cols="12"
  

      >



<div   class=" sub1 grey2--text "  >  Please enter your email account to send your reset password link </div>
</v-col>



<v-col
   cols="12"
 
      >
<v-form 
  class="mx-5"
    
    lazy-validation

  
 >
    
    
      
     
  


  <v-text-field
              type="text"
              outlined
             
              
              placeholder="Phone Number / Email "
            v-model="email"
            :rules="[v => !!v || 'You must enter this field!']"
            required
          ></v-text-field>



   

    <v-btn block height="50" color="theme1"  class="mt-1 text-capitalize white--text"   @click="send">
     Submit
      
    </v-btn>

  </v-form>
</v-col>

</v-row>























































</div>

</template>

<script>


export default {
     name: 'ForgetPassword',

 
components: {



},



   data(){
      
      return{

email:"",

 





      }
    },

        
async mounted(){


 

    
        },



methods:{


async send(){





const ip = await this.$axios.$post('/api3/password/reset/',
   {
         
          email:this.email,
           
        })
        .then(response => {
                       
                        
                          console.log(response);
                          
                      })
                      .catch((error) => {
                        console.log(error.response.data)
                      
                  console.error();


                        
                      });











},

open(){
     document.documentElement.style.overflow = 'hidden'
},

close(){

 document.documentElement.style.overflow = 'auto'





},

    
alt () {
  this.signin=!this.signin
  this.signup=!this.signup
},



},





























}
</script>


<style scoped>



.wel{
 text-align: center;
font-size: 18px;

}

.sub1{
text-align: center;
font-size: 15px;
font-weight: bold;

}



</style>
