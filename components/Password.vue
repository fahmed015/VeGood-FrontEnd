<template>




<div>


<modal name="password"
 @closed="close"
 
    
        :reset="true"
        height="auto"
       :width="$vuetify.breakpoint.xs ? '100% ' : '90%'"
        :scrollable="true"
        
       
         >



 <v-card >




<v-container fluid >

  <v-row no-gutters  >

<v-col
   cols="6"
   md="6"
   sm="6"
 class="theme4 hidden-xs-only"
      >
 

        <v-img  
   class="imgg"
   position="center center"
    src="/signinpic.png" >

          </v-img>
 

</v-col>



 


<v-col
   cols="12"
   md="6"
   sm="6"
  
 
      >

 <v-row justify="end"    >    
<v-col
  
   cols="2"
   md="1"


 
      >
  <v-btn
        
        
            icon
            @click="$modal.hide('password')"
            width="40"
           
           
          >
          
           <v-icon   color="black"  >
        mdi-close
      </v-icon>
          </v-btn>

</v-col>
  </v-row>

<v-row class="mt-16">
<v-col
   cols="12"
  

      >



<div   class=" wel theme1--text " > Reset your password </div>
</v-col>




<v-col
   cols="12"
  

      >



<div   class=" sub1 grey2--text "  >  Please enter your new password </div>
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
                placeholder="New Password"
                 
            v-model="password"
            :rules="[v => !!v || 'You must enter password!']"
            required
          ></v-text-field>



   

    <v-btn block height="50" color="theme1"  class="mt-1 text-capitalize white--text"   @click="resetpassword">
     Submit
      
    </v-btn>

  </v-form>
</v-col>

</v-row>
</v-col>








































  </v-row>







</v-container>











 </v-card> 







  </modal>







</div>

</template>

<script>


export default {
     name: 'Password',

 
components: {



},



   data(){
      
      return{

password:"",

 





      }
    },

        
async mounted(){


 console.log(this.$route.params.id)
  console.log(this.$route.params.token)

    
        },



methods:{


async resetpassword(){





const ip = await this.$axios.$post('/api3/password/reset/confirm/',
   {
         
          new_password1:this.password,
            new_password2:this.password,
             uid:this.$route.params.id,
             token:this.$route.params.token
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

 this.$router.push('/Home')



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
