<template>




<div>




 


<modal name="update"
 @closed="close"
    @before-open="beforeOpen"

        :reset="true"
        height="auto"
       :width="$vuetify.breakpoint.xs ? '100% ' : '90%'"
        :scrollable="true"
        
       
         >

 
 <v-card class="theme4">




<v-container fluid >

<v-row no-gutters>

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


<v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
             prepend-inner-icon="mdi-calendar"
            placeholder="Birthday"
             color="theme1"
            outlined
            readonly
            v-bind="attrs"
                         background-color="white"

            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="Primary"
            @click="$refs.menu.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>

















  <!-- <v-text-field
              type="text"
              outlined
                placeholder="Age"
                color="theme1" 
            v-model="age"
             background-color="white"
           
          ></v-text-field> -->

</v-col>


<v-col cols=12 v-if="showphone">
  <v-text-field
              type="text"
              outlined
                placeholder="Phone Number"
                 color="theme1"
            v-model="pnumber"
             background-color="white"
           
          ></v-text-field>

</v-col>


<v-col cols=12 v-if="showmail">
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
    
      label="How long have you been on a diet?"
      
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
    <v-row >  
  <v-col cols=12> 

     <category2 :category="category" >
  </category2> 

 <!-- <v-sheet
    
  color="theme4"
  >

    <v-slide-group
     center-active
     
      show-arrows="always"
      
    
      
     
    >

 <template v-slot:prev="{ on, attrs }">
      <v-icon
        
        v-bind="attrs"
        v-on="on"
      >mdi-arrow-left-bold-circle</v-icon>
    </template>
    <template v-slot:next="{ on, attrs }">
      <v-icon
        
        v-bind="attrs"
        v-on="on"
      >mdi-arrow-right-bold-circle</v-icon>
    </template>






      <v-slide-item
     
        v-for="n in category"
        :key="n.id"
        
      
      
      >
     
       <v-card
           v-ripple
          
        :color="n.active ? 'theme1 ' : 'white'"
        :width="n.active ?122 :100" 
        :height="n.active ?99 :83" 
        
        :class="n.active ?'text-capitalize ml-2 mr-5 mt-1 mb-5  rounded-xl '  :'text-capitalize ml-2 mr-5 mt-4 mb-7 rounded-xl'" 
         
        
      
        @click.native="notactive(n.id ,n.name)"
        
        >
        
   
        

<v-img
    
    
    :src="`/category${n.id}.png`"
  
    :class="n.active ?'image2' :'image'" 
   

  >

</v-img> 




<div    :class="n.active ?'optiontitle2 mt-14 ' :'optiontitle mt-12'" >  {{ n.name }} </div>
        </v-card>
     
      </v-slide-item>
  
    </v-slide-group>

 </v-sheet> -->

  </v-col>

<!-- <v-col cols=12> 
 <v-chip-group
 v-model="chips"
          multiple
         
           column
          active-class="theme2"
        >
          <v-chip
            v-for="it in items"
            :key="it"
            label
            large
            class="ma-2 pa-5"
            
          >
            {{ it }}
          </v-chip>
        </v-chip-group> 

</v-col> -->


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
           @click="updatee"
        >
      
          Update
           
        </v-btn>
  </v-col>

</v-row>
    </v-row>
      </v-stepper-content>

     
    </v-stepper-items>
  </v-stepper>

</v-col>
 







 </v-row>

</v-row>
</v-container>
 </v-card>
</modal>







</div>

</template>

<script>

import Category2 from '~/components/Category2'

export default {
     name: 'ProfileUpdate',

 
components: {

Category2

},



   data(){
      
      return{
menu: false,
    e1: 1,
     diet:['Now ', 'Week ' , 'Month ' , 'Year'],
     username:"",
     lastname:"",
     age:"",
     select:"",
     date: null,
     selectdiet:"",
     showphone:true,
     showmail:true,





 category:[],
    sorting:[],
      model: null,
      type:null,
      
      val:null,
      test:"",
       items: ["egg","beef","chicken","fish", "cheese" , "milk","vegatables" , "fruit","bread"],
        sort:["price","rating" ,"distance"],
        price:["high to low" , "low to high"],
        filtershow:false,







      }
    },

        
async mounted(){





    
        },

        
async fetch()  {
//console.log(this)


this.category=this.$store.state.category2






},



methods:{



async beforeOpen(){
    this.e1=1
var check=false
var check=this.$auth.loggedIn
console.log(check)
console.log("ooooooooooo")

// this.category=this.$store.getters.getcat(check)
//  console.log(this.category)

if(check==true){


if(this.$auth.user.email!=null){
this.showmail=false
}
if(this.$auth.user.phone_number!=null){
this.showmail=false
}

   
this.$store.commit('settime');


try {
        let response = await  this.$axios.$get('/api4/profile/view')
        console.log(response)
        console.log(response[0].restricted_ingredients)
this.username=response[0].first_name
this.lastname=response[0].last_name
this.select=response[0].duration_of_diet
this.date=response[0].date_of_birth
//this.type=response[0].followed_diet
this.$store.commit('setcatprofile', response[0].followed_diet);
this.$store.commit('resetcategory2', response[0].followed_diet);


// this.chips=response[0].restricted_ingredients



        

      } catch (err) {
        console.log(err)
      }



}


},



close(){

 document.documentElement.style.overflow = 'auto'

},



async updatee(){



var check=false
var check=this.$auth.loggedIn
console.log(check)
console.log(this.chips)

 console.log("tttttttttttttt")

if(check==true){




try {
        let response = await this.$axios.$post('/api4/profile/update', 
        {
 first_name:this.username,
             last_name:this.lastname,

duration_of_diet:this.select,
date_of_birth:this.date,
followed_diet:this.$store.state.catprofile,
 
        }
        )
        console.log("update")
        console.log(this.$store.state.userfood)
         console.log(response)
    this.$modal.hide('update')



      } catch (err) {
        console.log(err)
      }



}

}


},

// async mounted(){

// var check=false
// var check=this.$auth.loggedIn
// console.log(check)

// this.category=this.$store.getters.getcat(check)
// console.log(this.category)

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










.imagem{
  width:80px;
  height:25px;

position: absolute; 
 
  top:40px;
  left:178px;

}








</style>
