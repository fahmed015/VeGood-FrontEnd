<template>

<div>




<v-col
   cols="12"
  

      >



<div   class=" wel theme1--text " > Welcome! </div>
</v-col>




<v-col
   cols="12"
  

      >



<div   class=" sub1 grey2--text "  >  Sign in and start your journey with VEGOOD to order food</div>
</v-col>






<v-col
   cols="12"
  
      >
<div class="sub2 grey2--text" > Sign up with  </div>
</v-col>




<v-row  justify="center" class="mx-5" >

<v-col  cols="12" md="6" >
 <v-btn  width="180" height="70" block color="white"  class="  text-capitalize  theme1--text"   @click="logingoogle">

   <v-img  
   max-height="25"
   max-width="20"
   class="mr-5"
    src="/google.png" >

          </v-img>
     <div class="google1">Google </div>
      
    </v-btn>
</v-col>

<v-col cols="12" md="6">
<v-btn  width="180" height="70" block color="white"  class=" text-capitalize  theme1--text"  @click="loginfacebook"  >

   <v-img  
   max-height="30"
   max-width="15"
   class="mr-5"
    src="/facebook.png" >

          </v-img>
     <div class="facebook1">Facebook </div>
      
    </v-btn>

</v-col>
</v-row>





<v-col
   cols="12"
  
      >
<div class="or grey2--text"> OR  </div>
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
            v-model="username"
            :rules="[v => !!v || 'You must enter this field!']"
            required
          ></v-text-field>
        

     
  


  <v-text-field
              type="text"
              outlined
                placeholder="Password"
                 
            v-model="password"
            :rules="[v => !!v || 'You must enter password!']"
            required
          ></v-text-field>

<v-row justify="end">
    <v-btn  text  class=" text-capitalize grey--text text-decoration-underline"   @click="forgetpassword">
     Forget Password? 
      
    </v-btn>

</v-row>

   

    <v-btn block height="50" color="theme1"  class="mt-4 text-capitalize white--text"   @click="login">
     Sign In 
      
    </v-btn>

  </v-form>
</v-col>





<v-col
   cols="12"
 
      >
      <div style="text-align:center;">
<div class=" grey2--text"> I don't have an account ?  <v-btn  text class=" theme1--text" @click="alt"> Sign up </v-btn>  </div>

      </div>

</v-col>

  













</div>
</template>

<script>


export default {
     name: 'SignIn',

 


   data(){
      
      return{

    username:"",
    password:"",
      rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
         password: value => {
          const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
          return (
            pattern.test(value) ||
            "Min. 8 characters with at least one capital letter and a number "
          );
        }
        },



      }
    },

methods:{

alt(){

this.$emit('change');

},

forgetpassword(){
  console.log("aaaaaaaa")
this.$emit('pass');

},


async loginfacebook(){
let response=this.$auth.loginWith('facebook')
const authCode = await this.$auth.strategy.token.get()
const test2 = await this.$auth.strategy.token.status()
console.log(authCode)
console.log(test2)

console.log(response)
},

 async login(){

console.log("enter")
console.log(this.username)
console.log(this.password)




try {
        let response = await this.$auth.loginWith('local', { data:
        {
 email:this.username,
          password:this.password,
        }
        })
        console.log(response)
        console.log(this.$auth.loggedIn)
     // axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.access_token

this.dialog=false;
this.$modal.hide('example')
 //location.reload()
//this.$router.push('/Home')
 location.reload()

      } catch (err) {
        console.log(err)
      }


  //console.log(this.$auth.loggedIn)





},

}





























}
</script>


<style scoped>



.text{

  color: white;
  font-size: 18px !important;
 
  
}


.image3{

 width:95px;
  height:30px;

}

       
.test{
  height: auto ;
   
}



.middle2{
   position: relative; 
 top:80px;
left:100px;



 
}
.image0{
    
   position: absolute; 
  top:18px;
  left:35px;
 width:30px;
  height:30px;
 
}
.image2{
    
   position: absolute; 
  top:20px;
  left:45px;
 width:35px;
  height:35px;
 
}
.optiontitle{
  
  
   text-align:center;
   font-size: 12px;
    
 
 
}


.optiontitle2{
  
  
   text-align:center;
   font-size: 16px;
  
    
 
 
}


.forget{

 
    font-size: 10px;

   text-decoration-line: underline;

}
.step{
  position: relative;
 top:40px;
  left: 300px;
width:600px;

}
.signin{

  width:400px;

}
.next{
  position: absolute;
  top: 540px;
  left: 920px;
}
.next2{
  position: absolute;
  top: 440px;
  left: 920px;
}
.prv{
  position: absolute;
  top: 450px;
  left: 120px;
}

.t{
  height: 350px;
}
.registerform{
position: relative;
  top: 20px;
  left: 300px;
  width:530px;


}

.up{
  position: absolute;
  top: 530px;
  left: 800px;
}

.up2{
  position: absolute;
  top: 525px;
  left: 990px;
}

.imgg{


   
  width:550px;
  height:530px;
}

.imgg1{

 position: absolute;
  top: 0px;
  left: 300px;
  width:200px;
  height:300px;
}

.loginb{

  position: absolute;
  top: 170px;
  left: 700px;
  
}
.loginb1{

  position: absolute;
  top: 170px;
  left: 900px;
  
}

.or{
 text-align: center;
font-size: 16px;

}
.more{
   position: absolute;
  top: 40px;
  left: 90px;
  font-weight: bold;
  font-size: 20px

}
.wel{
 text-align: center;
font-size: 18px;

}

.welm{
 position: absolute;
  top: 150px;
  left: 120px;
font-size: 18px;

}

.wel1{
 position: absolute;
  top: 50px;
  left: 825px;
font-size: 18px;

}

.sub1{
text-align: center;
font-size: 15px;
font-weight: bold;

}

.sub1m{
 position: absolute;
  top: 185px;
  left: 50px;
font-size: 15px;
width: 230px;
font-weight: bold;
text-align: center;

}
.sub2{
 text-align: center;
font-size: 15px;


}

.google{
  
  height:30px;
  width: 1px;

}

.facebook{
  
  height:24px;
width:1px;
}

.google1{
text-align: center;
font-size: 14px;

}

.facebook11{
text-align: center;
font-size: 14px;

}

.imgg2{

 position: absolute;
  top: 0px;
  left: 0px;
  width:200px;
  height:300px;
}



.side{
   width:500px;
  position: relative;
  top: 0px;
 height: 600px;
}

.Rectangle1 {
  
  
  border-radius: 80px 0px 0px 0px;
   position: absolute; 
  left: 1035px; 
  top:11px;
z-index: 1;
}
.Rectangle2 {
border-style: solid;
  border-color: #B8DE6F;
  
   position: absolute; 
  left: 617px; 
  
  top:11px;
  border-radius: 10px;
  
}
/* .side{
     position: absolute; 
     width: 1000px;
  height: 64px;
  right:0px;
} */
.pos{
   position: absolute;
  top: 90px;
  left: 1278px;
    
     color:black;
     width:115px;
     height:30px;
z-index: 1;

}

.posf{
   width:20px;
     height:30px;
}


.posm{
   position: absolute;
  top: 30px;
  left: 319px;
    
     color:black;
     width:80px;
     height:30px;
z-index: 1;

}

.pos2{
   position: absolute;
  top: 30px;
  left: 1400px;
    
     color:black;
     width:115px;
     height:30px;
z-index: 1;

}
.bbb{
  align-items: flex-end;
  text-align: center;
}

.b2{
  /* font-family: Nunito; */
     text-align: left;
     font-size: 16px;
    font-weight:bold ;
}


.b2.p1{
  position: absolute; 
 
  top:40px;
  left:875px;
    
}

.b2.p2{
  position: absolute; 
 
 top:40px; 
  left:805px;
    
}

.b2.p3{
  position: absolute; 
 
 top:40px; 
  left:720px;
    
}

.b2.p4{
  position: absolute; 
 
 top:40px; 
  left:645px;
    
}

.v-stepper__header {
  box-shadow: none;
} 





.image{
  width:80px;
  height:20px;

position: absolute; 
 
  top:40px;
  left:72px;

}




.imagem{
  width:80px;
  height:25px;

position: absolute; 
 
  top:40px;
  left:178px;

}








</style>
