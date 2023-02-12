<template>




<div>




 

 

<v-col cols="12">

  <div class="more ">
  Tell us more about you
</div>
</v-col>
 <v-row justify="center">
<v-col cols=12 md=8>
<v-stepper v-model="e1"   alt-labels class="elevation-0 theme4" >

 
     <v-stepper-header class=" theme4" >
  
      <v-stepper-step
      color="theme2"
     
        :complete="e1 > 1"
        step="1"
       
      >
       Personal Information
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 2"
        step="2"
          color="theme2"
      >
        Filters
      </v-stepper-step>

     
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
      

<v-row justify="center" no-gutters>
<v-col cols=12 md=10>
<v-form >
   
      <v-row justify="center" no-gutters >
       <v-row justify="center" >   
      <v-col cols=12 md=6 >
          <v-text-field
              type="text"
              outlined
                              placeholder="FirstName"

           color="theme1"
            v-model="username"
             background-color="white"
           
          ></v-text-field>
        
      </v-col>
     
    
    <v-col cols=12 md=6>
  <v-text-field
              type="text"
              outlined
                placeholder="LastName"
                 color="theme1"
            v-model="lastname"
             background-color="white"
           
          ></v-text-field>
      </v-col  >

       </v-row>
<v-col cols=12>
  <v-text-field
              type="text"
              outlined
                placeholder="Age"
                color="theme1" 
            v-model="age"
             background-color="white"
           
          ></v-text-field>

</v-col>


<v-col cols=12>
  <v-text-field
              type="text"
              outlined
                placeholder="Phone Number"
                 color="theme1"
            v-model="pnumber"
             background-color="white"
           
          ></v-text-field>

</v-col>


<v-col cols=12>
  <v-text-field
              type="text"
              outlined
                placeholder="Email"
                 color="theme1"
            v-model="email"
             background-color="white"
           
          ></v-text-field>

</v-col>


<v-col cols=12>
  <v-text-field
              type="text"
              outlined
                placeholder="Address"
                 color="theme1"
            v-model="address"
            background-color="white"
           
          ></v-text-field>

</v-col>

<v-col cols=12>
  <v-text-field
              type="text"
              outlined
                placeholder="Home Address"
                color="theme1" 
            v-model="homeaddress"
             background-color="white"
           
          ></v-text-field>

</v-col>

<v-col col=12>
 
<v-select

      v-model="select"
      v-bind:items="diet"
     
      :menu-props="{ top: true, offsetY: true }"
     outlined
     
     background-color="white"
      color="theme1"
    
      placeholder="How long have you been on a diet?"
      
    >
</v-select>

</v-col>
</v-row>
  


  </v-form>
</v-col>
</v-row>




<v-col cols="12" md=1 align-self="end">

        <v-btn
       block
          color="theme1 white--text"
          @click="e1 = 2"
        >
      
          Next Step 
            <v-icon
        right
        color="white"
        
      >
        mdi-arrow-right
      </v-icon>
        </v-btn>

</v-col>










      </v-stepper-content>


      <v-stepper-content step="2">
      
<category-2>

</category-2>

<v-row justify="space-between">

  <v-col cols=4 class="hidden-xs-only">
     <v-btn
       
        text
          color=" black--text"
        
           @click="e1 = 1"
        >
        <v-icon
        left
        color="black"
        
      >
        mdi-arrow-left
      </v-icon>
      
          Previous

         
        </v-btn>
  </v-col>


   <v-col cols=12 md=2 >
       <v-btn
      block
          color="theme1 white--text"
           @click="test"
        >
      
          Finish
           
        </v-btn>
  </v-col>

</v-row>
 
      </v-stepper-content>

     
    </v-stepper-items>
  </v-stepper>

</v-col>
 







 </v-row>










</div>

</template>

<script>

import Category2 from '~/components/Category2'

export default {
     name: 'ProfileInfo',

 
components: {

Category2

},

   data(){
      
      return{

    e1: 1,
     diet:['Now ', 'Week ' , 'Month ' , 'Year'],
     username:"",
     lastname:"",
     age:"",
     select:""




      }
    },

methods:{





async test(){





this.$modal.hide('example')
}


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
