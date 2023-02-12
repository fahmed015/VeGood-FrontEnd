<template>
<div>
 
 <v-row>
  <v-col cols=12> 
 <v-sheet
    
  
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
        
   
        
 <v-row>
        
<v-col cols=12>
<v-img
    
    
    :src="`/category${n.id}.png`"
  
    :class="n.active ?'image2' :'image'" 
   

  >

</v-img> 


</v-col>
<v-col cols=12>

<div    :class="n.active ?'optiontitle2  ' :'optiontitle '" >  {{ n.name }} </div>


</v-col>

   </v-row>
        </v-card>
     
      </v-slide-item>
  
    </v-slide-group>

 </v-sheet>

  </v-col>

<v-col cols=12> 
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

</v-col>
 </v-row>

</div>
</template>






<script>
export default {
    name: 'Category2',

props: {
     category: Array,

   },

 data(){
        return{

    sorting:[],
      model: null,
      type:null,
      chips: [],
      first:true,
      
      val:null,
      test:"",
       items: ["egg","beef","chicken","fish", "cheese" , "milk","vegatables" , "fruit","bread"],
        sort:["price","rating" ,"distance"],
        price:["high to low" , "low to high"],
        filtershow:false,

         

        }
    },

   computed: {
    catprofile:{
      get:function() {
      return this.$store.state.catprofile
    },
    set: function(newValue) {
      	console.log("Setting new name: " + newValue);
        this.$store.commit('setcatprofile', newValue);

      }
   
  },

},

          watch: {
        catprofile: function (val) {
          if(this.$store.state.first==false){
            console.log("first false")
        this.$store.commit('clearfood');

          }

          console.log("enterrr oooooooo watch cat ")
          console.log(val)
        this.$store.commit('cleartime');

          if(!!val){
         this.show(val)
          }
        },

chips:function (val) {
 console.log("yallllaaaaaa")
          console.log(val)
var parsedobj = JSON.parse(JSON.stringify(val))
console.log(parsedobj)
var o=[]
for(var i =0 ; i<val.length;i++){
o.push(val[i])
}
console.log("000 set user food")

console.log(o)
this.$store.commit('setuserfood',o);

/////api


}


    },
    

    methods:{



notactive(id,name){
  console.log("testtttttt")
 
this.$store.commit('setcatprofile', id);
this.$store.commit('resetcategory2', id);

},

show(type){

console.log("enter")
console.log(type)

let a;
 a =this.$store.getters.getfood2(type)
this.chips=[]
console.log(a)





console.log(this.chips);
this.chips=a


},







 



}


    

  

};



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


.v-text-field--outlined >>> fieldset {
  border-color:transparent;
}



.v-select--outlined >>> fieldset {
  border-color:transparent;
}
.image{
     position: relative; 
  top:20px;
  left:35px;
   
 width:30px;
  height:30px;
 
}

.image2{
      
    position: relative; 
  top:20px;
  left:40px;
 width:40px;
  height:40px;
 
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
</style>
