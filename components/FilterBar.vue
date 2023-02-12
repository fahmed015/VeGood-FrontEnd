<template>
<div>
 
 
   
 
       <v-list
      flat
      subheader
      dense
      expand
     
      :color="$vuetify.breakpoint.mdAndDown ? 'theme4 ' : 'white '" 
      
    >




      <v-list-group
        
        v-model="test"
        no-action
      >
        <template v-slot:activator >



          <v-list-item-content>
            <v-list-item-title class="black--text" >Main Category</v-list-item-title>
                <v-list-item-action>

                </v-list-item-action>
          </v-list-item-content>





        </template>
<v-row justify="end">
  
   <v-btn text @click="clear">
clear
  </v-btn>
</v-row>


<v-item-group   >
    <v-container fluid>
      <v-row  justify-md="center"      
 >
        <v-col
       
          v-for="n in category"
        :key="n.id"
          cols="4"
          md="6"
         

          
        >
         
          <v-item >
            
            <v-card
            v-ripple
            class="inside"
             :input-value="n.name"
              :color="n.active ? 'theme1' : 'white'"
              height="45"
              
              @click="notactive(n.id ,n.name)"
            >
        
         <div class="mt-4" >        {{n.name}} </div>
     
            
            </v-card>
         
          </v-item>
           
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
       

        






      </v-list-group>
    


 
      
    

 <v-list-group
        
        v-model="test"
     
         v-if="!!cat" 
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title class="black--text" >Sub Category</v-list-item-title>
          </v-list-item-content>
        </template>

     
       
 <v-list             :color="$vuetify.breakpoint.mdAndDown ? 'theme4 ' : 'white '" 

>
      <v-subheader>
        Select your prefrence
      </v-subheader>

      <v-list-item-group v-model="chips" multiple>
       
   
        <v-list-item v-for="it in items" :key="it.id" :value="it">
          <template v-slot:default="{ active }">
             <v-list-item-action>
               
              <v-checkbox

                :input-value="active"
                color="theme2"
                v-bind:v-model="chips.filter(e => e == it).length > 0"
              />
            
            </v-list-item-action> 

            <v-list-item-title>
              {{ it }}
            </v-list-item-title>
          </template>
          
        </v-list-item>
        
      </v-list-item-group>


    </v-list>










      </v-list-group>
    





























      <v-subheader class="black--text" >Sort</v-subheader>

      <v-list-item-group
        v-model="sorting"
       
        multiple
        active-class=""
      >
      <template   v-for="n in sort">
        <v-list-item :key="n">
          <template v-slot:default="{ active }" >
           

            <v-list-item-content>
              <v-list-item-title>{{n}}</v-list-item-title>
            
            </v-list-item-content>

<v-icon
                  v-if="!active"
                  color="grey lighten-1"
                  size=20
                >
                  mdi-circle-outline
                </v-icon>

                <v-icon
                  v-else
                  color="theme2"
                  size=20
                >
                  mdi-circle
                </v-icon>


         
          </template>
          
=









        </v-list-item>
      </template>
      </v-list-item-group>

    </v-list>
 





</div>
</template>






<script>
export default {
    name: 'FilterBar',
 props: ['category'],



 data(){
        return{

       
    sorting:[],
      model: null,
      type:null,
      type1:null,
      chips: [],
      val:null,
      test:"",
       items: ["egg","beef","chicken","fish", "cheese" , "milk","vegatables" , "fruit","bread"],
        sort:["price","rating" ,"distance"],
        price:["high to low" , "low to high"],
        filtershow:false,

         

        }
    },
   computed: {
    cat:{
      get:function() {
      return this.$store.state.cat
    },
    set: function(newValue) {
      	console.log("Setting new name: nnn" + newValue);
        this.$store.commit('setcat', newValue);

      }
   
  },

},

          watch: {
        cat: function (val) {
          
          console.log("enterrr watchh type  filter bar")
          console.log(val)
          if(!!val){
         this.show(val)
          }
        }
    },
    
async mounted(){


 
          
        },


    methods:{

clear(){
this.$store.commit('setclear');
this.chips=[]

},

notactive(id,name){
  
  console.log("testtttttt")
  console.log(id)
    console.log(name)

 
this.$store.commit('resetcategory', id);

},

show(type){

console.log("enter")

console.log(this.$store.getters.isLoggedIn)
var check=this.$auth.LoggedIn


var a
if(check==true){
a=this.$store.state.userfood

if(a==null){
  a =this.$store.getters.getfood(type)
}

}
else{
  console.log("enter 22")
 a =this.$store.getters.getfood(type)
}


this.chips=a

console.log(a);


},
 remove (item) {
        this.chips.splice(this.chips.indexOf(item), 1)
        this.chips = [...this.chips]
      },




selectcategory(v){


  this.$store.commit('setcat', v);
},

 



}


    

  

};



</script>



<style>


.inside{
  
text-align:center;
font-size: 14px;


}

</style>
