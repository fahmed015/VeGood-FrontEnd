<template>

<div>

<!-- <v-layout column justify-center align-center>
           
        <v-subheader tag="h2">
            Width: <strong>{{ $vuetify.breakpoint.width}}</strong>
            &nbsp;
            Height: {{ $vuetify.breakpoint.height  }} {{ $vuetify.breakpoint.name  }}
        </v-subheader>
      </v-layout> -->

 <v-container fluid >
  <v-row >
    <v-col cols="1" md="1" align-self="center" class="hidden-sm-and-down">
      

 <!-- path: '/', component: Home -->

<div  class="social " >

<v-icon  color="black">
mdi-facebook

</v-icon>

<v-icon  color="black">
mdi-instagram

</v-icon>



<v-icon color="black">
mdi-twitter

</v-icon>

</div>



    </v-col>

    <v-col cols="12" sm="7"  md="7"   align-self="center" >



      <v-row class="ml-1"> 
        <v-col
    cols="12"
      >
 
 <div    class="leftheader ">
         <div class="headercolor--text">   {{ $t("homepage.mainsection.title1") }} </div>

           
           <div class="theme1--text">     {{ $t("homepage.mainsection.title2") }}</div>





            </div>
        </v-col>
      </v-row>
<v-row class="ml-1">
  <v-col
    cols="12"
      >

           <div   class="leftsubheader mt-3 ">
        {{ $t("homepage.mainsection.subtitle") }}

           
          



            </div>

  </v-col>    
</v-row>     



     
<v-row class="mt-6 ml-1" >
 

 <v-col
   cols="12"
    md="8"
   
      >
      <v-card rounded>
<v-row no-gutters >

<v-col cols="8">
    <v-text-field
  
        hide-details
         placeholder="Find a Restaurant"
       
        
    outlined
   
   color="theme1"
      >
      
       <v-icon slot="prepend-inner" color="theme1">
          mdi-magnify
       </v-icon>
      </v-text-field>
</v-col> 

<v-col cols="4">

 <v-card   height="56" color="theme4" flat>

   <map-bar>
   </map-bar>

  <!-- <v-row no-gutters>

    <v-col cols="4">

<map-button>
</map-button>





    </v-col>
<v-col cols="8">
<v-select
      v-model="select"
      v-bind:items="areas"
   
    height="56"
      :menu-props="{ auto: true, offsetY: true }"
      background-color="#F0F9F4"
 
  outlined
  
      color="theme2"
      
    >

     
     
     <template slot='selection' slot-scope='{ item }'>
    {{ item.name }} 
  </template>
  <template slot='item' slot-scope='{ item }'>
    {{ item.name }} 
  </template>

    </v-select>
</v-col>
  </v-row> -->
 </v-card>

</v-col>

</v-row>
      </v-card>



























      



 </v-col>
 
 <v-col

   cols="12"
   md="2"
  
      >


  <v-btn color="theme1" width="100" height="56" block   class=" black--text button1 " @click="$vuetify.goTo('#test')">
     {{ $t("homepage.mainsection.order") }}
    </v-btn>
  
</v-col>


</v-row>
      












    </v-col>




 <v-col cols="4" md="4"  sm="5"  class="hidden-xs-only" >

<v-img
    
    src="/mainsection1.png"
    class="image1 "

  >
</v-img>

 </v-col>

  </v-row> 


   </v-container>

<div id=test>
</div>
</div>





</template>

<script>
import MapBar from '~/components/MapBar'

export default {
    name: 'MainSection',

components: {

MapBar

},

    data(){
      
      return{

    select:"",
 currentLocation : { lat : 0, lng : 0},
     marker:{ lat : 0, lng : 0},

address:"",
coo:{},
dialog: false,
   show:true,   
areas:[{
  name:"cairo",
  name2:"maadi"
},
  
  {
  name:"Alex",
  name2:"Glembay"
},]
  




      }
    },




 watch: {
    //     address: function (val) {
    //       console.log("gvg")
    //         console.log(val)
    //       if(val){
           
    //      this.mark3()
    //       }
    // },


 },







    methods:{
async test() {
  console.log("enter")
  //const ip = await this.$axios.$get('/api2/distancematrix/json?origins=Boston,MA|Charlestown,MA&destinations=Lexington,MA|Concord,MA&key=AIzaSyDg3XjPdJCr353qg_OMymZOzgaCgEgHMeM')
console.log("enter2")
 //console.log(ip)

},


    },














};
</script>

<style scoped>





.leftheader{
 
  
    /* font-family:  Nunito; */
   font-size: 30px;
   font-weight:bold ;
text-align: left;
text-transform: uppercase;
height: auto;
}

.leftheaderm{
     

    /* font-family:  Nunito; */
   font-size: 30px;
   font-weight:bold ;
text-align: left;
/* text-transform: uppercase; */
}



.leftsubheader{

  
  
  font-size: 18px;
  text-align: left;
  color:#9b9292;

}


.leftsubheaderm{

 
  left:20px;
  width:380px;
  font-size: 18px;
  text-align: left;
  color:#9b9292;

}

.rightbox{
      position: absolute; 
 top:273px;
  left:1168px;
  opacity:0.30196078431372547;
}
.leftbox{
      position: absolute; 
 top:229px;
  left:665px;
  opacity:0.30196078431372547;
}

.s{

  position: absolute; 
 top:490px;
  left:130px;
  
  width:700px;
  height:50px;

}

.sm{

  position: absolute; 
 top:190px;
  left:20px;
  
  width:380px;
  height:250px;

}

.image1{
      
  z-index: 1;
  
  

 
}

.b{

 
  width:180px;

  
}

.bm{

    position: absolute; 
top:0px;

  left:280px;
  width:100px;

  
}

.b1{
   width: 50px;
}


.b1m{
    position: absolute; 
top:0px;

  left:0px;
}

.v-text-field--outlined >>> fieldset {
  border-color:transparent;
}



.v-select--outlined >>> fieldset {
  border-color:transparent;
}

.a{

 
  width:330px;
  
  
}
.am{

  position: absolute; 
top:0px;
  left:0px;
  width:280px;
  
  
}

.a2{

 
  width:160px;
  
  
}








.circle{
      position: absolute; 
 top:185px;
  left:950px;
  width:525px;
  height:525px;
 
}

.circle2{
      position: absolute; 
 top:215px;
  left:985px;
  width:460px;
  height:460px;
 
}
.loc{
   position: absolute; 

  left:330px;
  top:6px;
}


.locm{
   position: absolute; 

  left:278px;
  top:6px;
}
.image2{
      position: absolute; 
 top:120px;
  left:755px;
  width:190px;
  height: 200px;
 
}

.path{
      position: absolute; 
 top:180px;
  left:920px;
  width:590px;
  height: 500px;
 
}




.dot1{
  position: absolute; 
 top:574px;
  left:950px;
  width:15px;
  height:15px;
  z-index: 1;

}
.dot2{
  position: absolute; 
 top:310px;
  left:935px;
  width:15px;
  height:15px;
  z-index: 1;

}

.image3{
      position: absolute; 
 top:580px;
  left:800px;
  width:160px;
  height: 170px;
 
}









.button1{
     
   font-size: 20px;
  font-weight: normal;
  
 

 
}


.button1m{
      position: absolute; 
 top: 65px;
  left:0px;
   font-size: 20px;
  font-weight: normal;

  width: 380px;
  

 
}

.rightselectbar{
      position: absolute; 
 top:515px;
  left:500px;
 
}
.leftselectbar{
      position: absolute; 
 top:515px;
  left:288px;
 
}

.selectbar{
     
     position: absolute; 

  left:330px;
  width:150px;
  height:50px;
  

 
}
.social{
 

  width: 40px;
  height: 120px;
}



</style>