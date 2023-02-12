import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);

 var tokenstorage
 

export const state = () => ({
    category: [
        {   id:1,
            name:"vegan",
            food:[
                "bread" ,"fruit","vegatables"
            ],
            active:false
            
            
      
        },{id:2,
            name:"sugar-free",
           food:["bread", "meat", "milk" ,"fish", "chicken"],
           active:false
        },
        {id:3,
            name:"dairy-free",
            food:[],
            active:false 
        },
        {id:4,
            name:"oil-free",
            food:[],
            active:false
        },
        {id:5,
            name:"gluten-free",
            food:[],
            active:false
      
        },
        {id:6,
            name:"plant-based",
            food:[],
            active:false
      
        },
        {id:7,
            name:"vegetarian",
            food:[],
            active:false
        },
        {id:8,
            name:"carnivore",
            food:[],
            active:false
        },
        
      
     
      
      
            ],
          
            category2: [
                {   id:1,
                    name:"vegan",
                    food:[
                        "bread" ,"fruit","vegatables"
                    ],
                    active:false
                    
                    
              
                },{id:2,
                    name:"sugar-free",
                   food:["bread", "meat", "milk" ,"fish", "chicken"],
                   active:false
                },
                {id:3,
                    name:"dairy-free",
                    food:[],
                    active:false 
                },
                {id:4,
                    name:"oil-free",
                    food:[],
                    active:false
                },
                {id:5,
                    name:"gluten-free",
                    food:[],
                    active:false
              
                },
                {id:6,
                    name:"plant-based",
                    food:[],
                    active:false
              
                },
                {id:7,
                    name:"vegetarian",
                    food:[],
                    active:false
                },
                {id:8,
                    name:"carnivore",
                    food:[],
                    active:false
                },
                
              
             
              
              
                    ],
                  

           
                    category3: [
                        {   id:1,
                            name:"vegan",
                            food:[
                                "bread" ,"fruit","vegatables"
                            ],
                            active:false
                            
                            
                      
                        },{id:2,
                            name:"sugar-free",
                           food:["bread", "meat", "milk" ,"fish", "chicken"],
                           active:false
                        },
                        {id:3,
                            name:"dairy-free",
                            food:[],
                            active:false 
                        },
                        {id:4,
                            name:"oil-free",
                            food:[],
                            active:false
                        },
                        {id:5,
                            name:"gluten-free",
                            food:[],
                            active:false
                      
                        },
                        {id:6,
                            name:"plant-based",
                            food:[],
                            active:false
                      
                        },
                        {id:7,
                            name:"vegetarian",
                            food:[],
                            active:false
                        },
                        {id:8,
                            name:"carnivore",
                            food:[],
                            active:false
                        },
                        
                      
                     
                      
                      
                            ],     


                            food: ["egg","beef","chicken","fish", "cheese" , "milk","vegatables" , "fruit","bread"],

            cat:"",
            catprofile:"",

            cat2:"",
            state:"",
            
           token: null,

           userfood:[],
           first:true,
           mess:0,

           // token:tokenstorage ,

            // userfood:["bread", "meat", "milk","egg" ],
            usercat:null,
            












            locale: "en",
            locales: ["en", "ar"]    
      
  }
  
  
  
  
  
  
  )
  
  export const mutations = {
   
        
        
    setLanguage(state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
          state.locale = locale;
        }
      },
           
      
      setcat(state, cat) {
       console.log("enter catt ")
       console.log(cat)
          state.cat = cat;
          console.log(state.cat)
        
      },
      setcatprofile(state, cat) {
        console.log("enter catt ")
        if(!!cat){
           state.catprofile = cat;
           console.log(state.cat)
        }
         
       },
       setuserfood(state, cat) {
        console.log("enter userfood")
        console.log(cat)
        if(!!cat){
           state.userfood = cat;


console.log("added")
           console.log(state.userfood)
        }
         
       },
  
      setcategory(state, cat) {
        console.log("enter catt2 ")
           state.category = cat;
           console.log(state.category)
         
       },

resetcategory(state,id,name){

    console.log(id)
    console.log(name)

      state.category.forEach(function(item) {
        if(item.id==(id)){
if(item.active==true){
    state.category.forEach(function(item) {
        item.active=false
      })
      state.cat = null;

}

else{
    state.category.forEach(function(item) {
        item.active=false
      })
    item.active=true
    state.cat = item.name;

}
        }
      })
     
      console.log(state.category)

},
resetcategory2(state,id){

    state.category2.forEach(function(item) {
        item.active=false
      })
      
       const newCard = state.category2[id-1];
      newCard.active=true
      console.log(state.category)

},

setclear(state){

    state.cat=null;
    state.category.forEach(function(item) {
        item.active=false
      })

},
clearfood(state){

   state.userfood=null
   console.log("clear")

},
cleartime(state){

    state.first=false
    console.log("clear2")
 
 },
 settime(state){

    state.first=true
    console.log("clear3")
 
 },
 setmessage(state){

    state.mess=state.mess++
    console.log("messssss")
 
 },

      


     








  }



  export const getters =  {

   
    

    getfood: (state) => (type) => {
        // const find  = state.category.filter(cat => cat.id == type);
        // const test=find[0].food
        // return test;

       
            console.log("ehhhhh")
            console.log(type)

var test=[]
        state.category.forEach(function(item) {
            if(item.name==type){
                for(var i=0;i<item.food.length;i++){
                    test.push(item.food[i])
                }
            }
          })
          console.log("fooood")

console.log(test)

// var chip=[]
// for( var i=0;i<state.food.length;i++ ){
//     for(var j=0;j<test.length;j++){
//       if(test[j]==state.food[i]){
//         chip.push(i);
//       }
//     }
// }
// console.log(chip)
return test


      

    },

    getfood2: (state) => (type) => {
        // const find  = state.category.filter(cat => cat.id == type);
        // const test=find[0].food
        // return test;
        console.log("jjjjjjj")
console.log(state.userfood)
 if(!state.userfood) {   
            console.log("ehhhhh")

var test=[]
        state.category.forEach(function(item) {
            if(item.id==type){
                for(var i=0;i<item.food.length;i++){
                    test.push(item.food[i])
                }
            }
          })
          console.log("fooood")

console.log(test)

var chip=[]
for( var i=0;i<state.food.length;i++ ){
    for(var j=0;j<test.length;j++){
      if(test[j]==state.food[i]){
        chip.push(i);
      }
    }
}
console.log(chip)
return chip

 }
 else{
     return state.userfood
 }
      

    },

    getcat: (state) => (check) => {

        if(check==true){
           

          var add

            state.category.forEach(function(item) {
                if(item.id==state.usercat){
                    item.active=true
                     add =item
                }
              })

         const find = state.category.map(cate =>
                cate.id == state.usercat ? add : cate)
                console.log("CATT")
            console.log(find)    
    return find
        }
        else{
return state.category
        }
       
    },
   




    
  }