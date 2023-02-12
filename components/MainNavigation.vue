<template>




<div>
  

        <v-app-bar flat height=100 color="theme4">
           


 







  <v-row  align="center"   >

<v-col cols="3" class="hidden-sm-and-up" >
<v-app-bar-nav-icon @click="drawer = true" ></v-app-bar-nav-icon>
</v-col>

    <v-col cols="3" sm="2" md="2">
      
<v-img
    
    src="/vegood.png"
    width="80"
    height="20"
    


  >
    </v-img>
    </v-col>




<v-col cols="6" sm="6" md="6" class="hidden-xs-only">
     

<v-row no-gutters justify="center" class="hidden-xs-only">




     

    
     
     
     
 <v-btn  text color="black"  class="b2  text-capitalize">

   

     {{ $t("homepage.navigation.title1") }}
    </v-btn >
    
   

    

         <v-btn  text color="black"  class="b2  text-capitalize" >
         
    
      {{ $t("homepage.navigation.title2") }}
    </v-btn >
    


 <v-btn  text color="black"  class="b2  text-capitalize">

   

     {{ $t("homepage.navigation.title3") }}
    </v-btn >

 
 <!-- <v-btn  text color="black"  class="b2  text-capitalize">

   

     {{ $t("homepage.navigation.title4") }}
    </v-btn > -->

    
  </v-row>


      </v-col>
   



 <v-col  cols="2" sm="1" md="2" class="hidden-xs-only" >





 <v-menu offset-y > 
        <template v-slot:activator="{ on }">
        <!-- <v-btn text slot="activator"> -->
        <v-btn  icon v-on="on">
        
              
      <v-icon >
        mdi-translate
      </v-icon>
   

        </v-btn>
        </template>
        <v-card>
     



 <v-list>
          <v-list-item @click="changeLanguage('en')">
           <!-- <v-list-item-icon>
              <v-icon ></v-icon>
            </v-list-item-icon> -->


            <v-list-item-content>
              <v-list-item-title>English</v-list-item-title>
            </v-list-item-content>

           
          </v-list-item>
        </v-list>

        


 <v-list>
          <v-list-item @click="changeLanguage('ar')">
           <!-- <v-list-item-icon>
              <v-icon ></v-icon>
            </v-list-item-icon> -->


            <v-list-item-content>
              <v-list-item-title>Arabic</v-list-item-title>
            </v-list-item-content>

           
          </v-list-item>
        </v-list>


</v-card>




      </v-menu>





    
    </v-col >


    
    <v-col  cols="3" sm="2" md="1" >





 <v-menu offset-y v-if="$auth.loggedIn==true"> 
        <template v-slot:activator="{ on }">
        <!-- <v-btn text slot="activator"> -->
        <v-btn  icon v-on="on">
        
              <v-avatar color="theme1">
      <v-icon dark>
        mdi-account-circle
      </v-icon>
    </v-avatar>

            <!-- <v-icon right>mdi-menu-down</v-icon> -->
        </v-btn>
        </template>
        <v-card>
        <v-list>
          <v-list-item @click="showprofile">
            <v-list-item-avatar>
             <v-avatar  color="theme1">
     
    </v-avatar>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="this.$auth.user.email"></v-list-item-title>
              <v-list-item-subtitle>See your profile</v-list-item-subtitle>
            </v-list-item-content>

           
          </v-list-item>
        </v-list>
 <v-divider></v-divider>


<v-list
       
      >
        <v-list-item-group
          
         
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

<v-divider></v-divider>


 <v-list>
          <v-list-item @click="signout">
           <v-list-item-icon>
              <v-icon ></v-icon>
            </v-list-item-icon>


            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>

           
          </v-list-item>
        </v-list>

</v-card>




      </v-menu>











<v-btn  v-if="$auth.loggedIn==false"  color="white" rounded   class="text-capitalize"   @click="open"  >

      {{ $t("homepage.navigation.signin") }}
     
      
    </v-btn> 

    
    </v-col >



<v-col cols="2"  sm="1"  md="1">

<v-menu
 offset-y
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                @click="messages = 0"
                icon
                v-bind="attrs"
                v-on="on"
              >
             



   
<v-badge
        :content="messages"
        :value="messages"
        color="green"
        overlap
      >
     
        <v-icon >
          mdi-bell
        </v-icon>
 

      </v-badge>
    
  
              </v-btn>
            </template>



            <v-list color=white>
              <v-list-item
             
            
                v-for="(item, i) in notification"
                :key="i"
                nuxt
               :to="item.click_action"
               class="link"
              >
            <v-list-item-content>
                <v-list-item-title class="text">{{ item.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ item.body }}</v-list-item-subtitle>
                
            </v-list-item-content>
             
              </v-list-item>
            
            </v-list>




          </v-menu>

</v-col>








  </v-row> 
 




        </v-app-bar>













<profile-update>
</profile-update>

<login-register>
</login-register>





<v-navigation-drawer
     
       v-model="drawer"
    absolute
    temporary
    width="400"
    style="overflow-y:scroll;"
    color="#374321"
    
    >



<v-list>
          <v-list-item class="px-2">
           
<v-btn
        
            
            icon
            @click="drawer = false"
            width="40"
           
          >
          
           <v-icon   color="white"  >
        mdi-close
      </v-icon>
         </v-btn>
<!-- 
 <v-row justify="center">
    <v-col
   
    > -->

       

              <v-img  src="/vegood.png"  max-width="90" position="center center"></v-img>
           
           <!-- </v-col>

           </v-row> -->
          </v-list-item>

          
        </v-list>


      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item >
            <v-list-item-title class="text">Home</v-list-item-title>
          </v-list-item>

            <v-divider class="white"></v-divider>

          <v-list-item>
            <v-list-item-title class="text">Dine out</v-list-item-title>
          </v-list-item>
            <v-divider class="white" ></v-divider>

          <v-list-item>
            <v-list-item-title class="text">Grocery</v-list-item-title>
          </v-list-item>
            <v-divider class="white"></v-divider>

          <v-list-item>
            <v-list-item-title class="text">Delievy</v-list-item-title>
          </v-list-item>
            <v-divider class="white" ></v-divider>

           <v-list-item >
            <v-list-item-title class="text">Wish list</v-list-item-title>
          </v-list-item>
          
<div style="height:50px;" >
</div>

 <v-divider class="white" ></v-divider>

  <v-list-item>
            <v-list-item-title class="text">Help</v-list-item-title>
          </v-list-item>
            <v-divider class="white" ></v-divider>

           <v-list-item >
            <v-list-item-title class="text">Contact Us</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
<!-- </v-card> -->

</div>

</template>

<script>

import ProfileInfo from '~/components/ProfileInfo';
import LoginRegister from '~/components/LoginRegister';

import ProfileUpdate from '~/components/ProfileUpdate';


export default {
    name: 'MainNavigation',

 components: {
     
  
  ProfileInfo,
  ProfileUpdate,
  LoginRegister

     
       
    },
data(){

  return{





items: [
        { text: ' Wish List', icon: 'mdi-folder' },
        { text: 'My Order', icon: 'mdi-account-multiple' },
        { text: 'Give Feedback', icon: 'mdi-star' },
        { text: 'How It works', icon: 'mdi-history' },
        { text: 'About Us', icon: 'mdi-check-circle' },
       
      ],

notification:[],
    dialog: false,
    drawer: false,
      group: null,
     username:"",
    password:"",
    show:false,
    error:false,
   reg:false,
    signin:false,
    signup:false,
    details:false,
    update:false,
    main:false,
    forget:false,
    wait:false,
    emailr:"",
   

    passwordr:"",
    category:[],
     e1: 1,
     messages: 0,
        showmessage: false,
     diet:['Now ', 'Week ' , 'Month ' , 'Year'],
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






watch: {
      group () {
        this.drawer = false
      },
    },







created() {

		// this.$store.commit('initialiseStore',localStorage.getItem('token'));
	},

       
async mounted(){

// var check=this.$auth.loggedIn
// console.log(check)
//  console.log(this.$route.params.id)
console.log(this.$auth.user)
console.log('testttt')

// const val = this.$fire.remoteConfig.fetchAndActivate('test')
// console.log(val)

// const val2 = this.$fire.remoteConfig.getValue("test")
// console.log(val2)



// console.log("change?")
// this.category=this.$store.getters.getcat(check)
// console.log(this.category)
// let x=this.$fire.messaging.getToken()
// console.log(x)
//  this.$fire.messaging.onMessage(function (payload) {
//   context.dispatch('yourDesireDispatchFunction', payload)
//  })


      
     this.$fire.messaging
        .requestPermission()
        .then(() => {
          console.log('Have permission')
          return this.$fire.messaging.getToken()
        })
        .then((currentToken) => {
          if (currentToken) {
            console.log('Current Token : ', currentToken)
          }
        })
        .catch((err) => {
          console.log('Error occured', err)
        })




// const currentToken = await this.$fire.messaging.getToken()
// console.log(currentToken)
  // const data = JSON.stringify({
  //   notification: {
  //     title: 'firebase',
  //     body: 'firebase is awesome',
  //     click_action: 'http://localhost:3000/',
  //     icon: 'http://localhost:3000/assets/images/brand-logo.png'
  //   }, 
  //   to: currentToken
  // })
  // const config = {
  //   method: 'post',
  //   url: 'https://fcm.googleapis.com/fcm/send',
  //   headers: { 
  //     'Content-Type': 'application/json', 
  //     'Authorization': 'key=AAAABu746Cg:APA91bFLv5RrRtdPLJbXTaXpCqBIY63y4HevES8hRL89nT0hWOF9joSGjh-2pMJqroD3EhijTAX9ViYpNRrsXJaIe-0nbcwUEbyZE7yFJif7udlgg6q3wRrmDv_fhOypViHbwVFrav4v'
  //   },
  //   data
  // };
  // const response = await this.$axios(config)
  this.$fire.messaging.onMessage((payload) => {
    console.log("message")
    console.log(payload.notification.click_action)
    var t =payload.notification.click_action
   

    console.info('Message received: ', payload)
    this.messages++
    this.notification.push(payload.notification)
  })

//    this.$fire.messaging.onMessage(function (payload) {
//   context.dispatch('yourDesireDispatchFunction', payload)
//  })
//   this.$fire.messaging.onTokenRefresh(async () => {
//     const refreshToken = await this.$fire.messaging.getToken()
//     console.log('Token Refreshed',refreshToken)

//  })



 
          
        },



    methods:{

changeLanguage(lang) {
      // Change the i18n context variable's locale
      // This makes it so the correct locale file is used
      this.$i18n.locale = lang;
    },



showprofile(){


    this.$modal.show('update' )
    

//      document.documentElement.style.overflow = 'hidden'
//  this.signin=false
//      this.details=false
//      this.signup=false
//      this.main=false
//      this.error=false
// this.update=true;


},


 open () {

 

    this.$modal.show('example' )
     document.documentElement.style.overflow = 'hidden'
     this.signin=true
     this.main=true
     this.signup=false
      this.details=false
       this.error=false
       this.update=false


  
  },

//    open2 () {

 

//     this.$modal.show('example' )
//      document.documentElement.style.overflow = 'hidden'
//      this.signin=false
//      this.reg=true
//      this.signup=false
//      this.main=false
//      this.error=false
//      this.update=false
  
//   },
  open3 () {

 

    this.$modal.show('example' )
     document.documentElement.style.overflow = 'hidden'
     this.signin=false
     this.details=false
     this.signup=false
     this.main=false
     this.error=true
     this.update=false
  
  },


async signout(){

  // localStorage.removeItem('token')
  //  location.reload()



await this.$auth.logout('local')
 //this.$router.push('/HomePage')
    location.reload()

},

notactive(id,name){
  //this.type=id
this.category.forEach(function(item) {
  item.active=false
})

 const newCard = this.category[id-1];
newCard.active=true

this.$store.commit('setcat', name);
this.$store.commit('setcategory', this.category);
},
    
alt () {
  this.signin=!this.signin
  this.signup=!this.signup
},




    
async logingoogle(){

 //this.$gAuth.getAuthCode()
//this.$auth.loginWith('facebook')
//const authCode = await this.$auth.strategy.token.get()
//const test2 = await this.$auth.strategy.token.status()
//console.log(authCode)
//console.log(test2)


//console.log(this.$auth.user)



     
try {
        let response = this.$auth.loginWith('google', { params: { prompt: "select_account" } })
        console.log(response)
        //console.log(this.$auth.loggedIn)
       

this.dialog=false;
//this.$router.push('/HomePage')
 // location.reload()
// location.reload()
//this.$router.push('/HomePage')
 // location.reload()

      } catch (err) {
        console.log(err)
      }










  
},

async loginfacebook(){

 //this.$gAuth.getAuthCode()
//this.$auth.loginWith('facebook')
//const authCode = await this.$auth.strategy.token.get()
//const test2 = await this.$auth.strategy.token.status()
//console.log(authCode)
//console.log(test2)


//console.log(this.$auth.user)



     
try {
        let response = await this.$auth.loginWith('facebook')
        console.log(response)
        //console.log(this.$auth.loggedIn)
       

this.dialog=false;
 //location.reload()
//this.$router.push('/HomePage')
 // location.reload()
// location.reload()
//this.$router.push('/HomePage')
 // location.reload()

      } catch (err) {
        console.log(err)
      }










  
}










}


};
</script>

<style scoped>



.link{


  text-decoration: none; 
  color:white;
   font-weight: normal;
   font-size: 15px;
}


.text{

  color: black;
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