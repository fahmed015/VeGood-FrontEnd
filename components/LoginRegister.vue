<template>




<div>


<modal name="example"
 @closed="close"
 @before-open="open2"
    
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
  
    src="/signinpic.png" >

          </v-img>

</v-col>



 


<v-col
   cols="12"
   md="6"
   sm="6"
  
 v-if="signin==true"
      >

 

 <v-row justify="end">    
<v-col
  
   cols="1"
  
 
      >
  <v-btn
        
        
            icon
            @click="$modal.hide('example')"
            width="40"
            
           
          >
          
           <v-icon   color="black"  >
        mdi-close
      </v-icon>
          </v-btn>

</v-col>
  </v-row>


 <sign-in @change="alt" @pass="forgetpassword" >
</sign-in>

</v-col>







<v-col
   cols="12"
   md="6"
   sm="6"
  
 v-if="signup==true"
      >
      
 <v-row justify="end">    
<v-col
  
   cols="1"
  
 
      >
  <v-btn
        
        
            icon
            @click="$modal.hide('example')"
            width="40"
            
           
          >
          
           <v-icon   color="black"  >
        mdi-close
      </v-icon>
          </v-btn>

</v-col>
  </v-row>


 <sign-up @change2="alt">
</sign-up>
 

</v-col>





<v-col
   cols="12"
   md="6"
   sm="6"
  
 v-if="pass==true"
      >
      
 <v-row justify="end">    
<v-col
  
   cols="1"
  
 
      >
  <v-btn
        
        
            icon
            @click="$modal.hide('example')"
            width="40"
            
           
          >
          
           <v-icon   color="black"  >
        mdi-close
      </v-icon>
          </v-btn>

</v-col>
  </v-row>


 <forget-password>
 </forget-password>

</v-col>



















  </v-row>







</v-container>











 </v-card> 







  </modal>







</div>

</template>

<script>

import SignIn from '~/components/SignIn';

import SignUp from '~/components/SignUp';
import ForgetPassword from '~/components/ForgetPassword';

export default {
     name: 'LoginRegister',

 
components: {
SignIn,
  SignUp,
  ForgetPassword


},



   data(){
      
      return{


 signin:false,
    signup:false,
    pass:false


 





      }
    },

        
async mounted(){



    
        },



methods:{

open2(){
     document.documentElement.style.overflow = 'hidden'
      this.signin=true
  this.signup=false
    this.pass=false

},

close(){

 document.documentElement.style.overflow = 'auto'





},

    
alt () {
  this.signin=!this.signin
  this.signup=!this.signup
},

forgetpassword(){

   this.signin=false
  this.signup=false
this.pass=true

}


},





























}
</script>


<style scoped>


.column_wrapper {
  column-count: 2;
}

.middle{
   position: absolute; 
 top:1009px;
 
 
}
.middle2{
   position: absolute; 
 top:980px;
left:285px;


 
}

.choose{
   position: absolute; 
 top:1080px;
}


.image{
    
   position: absolute; 
  top:18px;
  left:35px;
 width:30px;
  height:30px;
 
}
.v-text-field--outlined >>> fieldset {
  border-color:transparent;
}



.v-select--outlined >>> fieldset {
  border-color:transparent;
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


.inside{
  
text-align:center;
font-size: 14px;


}



.titlecategory{
    
text-align: center;
 font-size: 22px;
 text-transform: uppercase;
 
}

/* 
.v-dialog--fullscreen {
 border-radius: 0;
 margin: 0;
 height: 100%;
 position: fixed;
 overflow-y: auto;
 top: 300px; 
 left: 0;
} */

.filter{

  
width:278px;



}


.filterm{

   position: absolute; 
 
  top:420px;
  
  left:10px;
width:380px;



}




.titlecategory2{
    
   position: absolute; 
  top:1200px;
  left:633px;
 font-size: 22px;
 text-transform: uppercase;
 
}

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


   
  width:480px;
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










.imagem{
  width:80px;
  height:25px;

position: absolute; 
 
  top:40px;
  left:178px;

}








</style>
