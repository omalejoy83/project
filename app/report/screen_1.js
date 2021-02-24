/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { ApplicationProvider, Layout, Text, Avatar, Input, Button, IconRegistry,Icon} from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';




import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  AsyncStorage,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image, ViewPagerAndroid,
  Modal,
  ActivityIndicator
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ViewPager from '@react-native-community/viewpager';
import { bold } from 'ansi-colors';
import {Container, content, Thumbnail} from "native-base";
import firebase from 'react-native-firebase';
//import EvaButtons from './component/iconComponent/evaButtons'
const storage = AsyncStorage
const auth = firebase.auth();


const FacebookIcon = (style) => (
  <Icon name='facebook'  fill="white" {...style} />
);

const GoogleIcon = (style) => (
  <Icon name='google' fill="white"  {...style} />
);

const PersonIcon = (style) => (
   <Icon name='person-add' {...style} fill='gray' />
);
const Email = (style) => (
  <Icon name='email' {...style} fill='black' />
);

const MessageIcon = (style) => (
  <Icon name='message-circle' fill="darkgray"{...style} />
);

const PinIcon = (style) => (
  <Icon name='pin' fill="white" {...style} />
 );
 const BulbIcon = (style) => (
  <Icon name='bulb-outline' fill="white" {...style} />
 );
 const HeartIcon = (style) => (
  <Icon name='heart-outline' fill="red" {...style} />
 );
 const ClockIcon = (style) => (
  <Icon name='clock-outline' fill="blue" {...style} />
 );






class ScreenA extends React.Component{
        constructor(Props){
          super(Props)
          this.state={
            email:'',
            password:'',
            modalStatus: false,
            error:''
            
          }
        }

        Indicator(){
          return(
            <Modal visible={this.state.modalStatus} transparent>
              <View style={{flex:1,justifyContent:'center',alignContent:'center', backgroundColor:"transparent"}}>
                <ActivityIndicator size='large' color='#0000ff'/>
                <Text style={{textAlign:'center', color:'white'}}>please wait</Text>
              </View>
            </Modal>
          )
        }

        UsersLogin(){
          let {email,password,fullName} = this.state;
          email = email.trim();
          password = password.trim();
          if(email && password){
            this.setState({modalStatus:true},()=>{
              auth.signInWithEmailAndPassword(email,password).then((value)=>{
                this.setState({modalStatus:false})
                if(email== 'dixre@gmail.com'){
                  this.props.navigation.navigate('Admin')
                }else{
                  if(value.user.emailVerified){
                    this.props.navigation.navigate('MainNav')
                  }else{
                    this.setState({
                      error:'please verify your email before logging in'
                    })
                  }
                  
                }
              }).catch((error)=>{
                this.setState({
                  modalStatus:false,
                  error: error.message
                }) 
                
              })
            })
          }
          else{
             this.setState({
               error:'please fill all empty fields!'
             })
           }
            
          }


        
        
      render(){
        
             return(
                 

                 <View style={{flex: 1}} key="1">
               <ScrollView showsVerticalScrollIndicator={false}>
                 {this.Indicator()}
             <StatusBar translucent={true} backgroundColor="transparent"/>
             <ImageBackground
               source={require("../../assets/img/pix7.jpg")} 
               
               style={{width: "100%", height: "100%"}}
             >
               <View style={{backgroundColor: "rgba(0,0,0,0.7)", flex:1, justifyContent: "center", paddingHorizontal: 10}}>
               <Text category='h1' appearance='alternative' style={{marginTop:70, paddingLeft:40, color:'black', fontWeight:'bold',letterSpacing:2}}>CRIME REPORT</Text>
                <Text  appearance='alternative' style={{marginTop:15, paddingLeft:100, marginBottom:70}}>Sign In To Your Account</Text>
             <Text style={{color:'tomato', textAlign:'center'}}>{this.state.error}</Text>
                 <Input
                   placeholder='email'
                   returnKeyType='next'
                   autoCapitalize='none'
                   style={style.inputBox}
                    icon={Email}
                   onChangeText={(email)=>this.setState({
                    email:email.trim()
                  })}
                  value={this.state.email}
                 />
     
                 <Input
                   placeholder='Enter your password'
                   autoCapitalize='none'
                   secureTextEntry
                   style={style.inputBox}
                    onChangeText={(password)=>this.setState({
                      password:password.trim()
                    })}
                    value={this.state.password}
                    
                 />
                 <TouchableOpacity onPress={()=>this.props.navigation.navigate('ScreenD')} >
                 <Text style={{paddingLeft:215, marginBottom:20, marginTop:7}}>Forgot  password?</Text>
                 </TouchableOpacity>

                 
                 </View>   
     
                 <View style={{backgroundColor: "rgba(0,0,0,0.7)", flex:1, justifyContent: "center", paddingHorizontal: 10}}>
                 <Button
                    textStyle={{fontSize:16,
                      color:'white',letterSpacing:7}}
                   style={style.button2}
                   onPress={()=>this.UsersLogin()}
                  
                      >
                       LOGIN
                 </Button>
                      <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
                      <Text style={{textAlign:'center', marginBottom:100,paddingLeft:20}}>Don't have an Account?</Text>
                      <TouchableOpacity onPress={()=>this.props.navigation.navigate('ScreenC')}>
                      <Text style={{paddingRight:10,color:'white', textAlign:'center'}} > Sign  Up</Text>
                      </TouchableOpacity>
                      </View>
                      
                 
                 
               </View>
               </ImageBackground>
             </ScrollView>
           </View> 

             )        
    
      }       
}

const style= StyleSheet.create({
  container:{
    backgroundColor: "rgba(0,0,0,0)",
    paddingHorizontal: 15,
    flexDirection: "row",
  },

  button:{
    margin: 10,
    color: "white",
  },

  avatar:{
    margin: 10,
    flexDirection: "row",
  
  },
  box:{
    width:100
  },
  image:{
      width:200,
      height:100
  },
  text1:{
    flex:4, 
    color:'white',
    marginTop:40
  },
  text2:{
    flex:3, 
    color:'white',
    marginTop:40
  },
  text3:{
    flex:1, 
    color:'white',
    marginTop:40
  },
  image2:{
    width:400,
    height:200,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    marginTop:30
  },
  image3:{
    width:200,
    height:150,
    borderTopLeftRadius:14,
    borderTopRightRadius:14,
    marginTop:30
},
inputBox:{
  width:350,
  backgroundColor:'#eeeeee',
  borderRadius:25,
  paddingHorizontal:16,
  fontSize:16,
  color:'#002f6c',
  marginVertical:10

},
button2:{
  width:350,
  backgroundColor:'black',
  borderRadius:25,
  paddingVertical:12,
  borderColor:'black',
  marginVertical:10,
  marginTop:40,
  
},

})
// UsersLogin(){

//   let {email,password} = this.state;


//     email = email.trim();
//     password = password.trim();


    
       
    

//     if(email && password){
//       storage.getItem('users').then((value)=>{
//         if(value){
//           let data = JSON.parse(value);
//           for(let i = 0; i < data.length; i++){
//             if(data[i].email.toLowerCase().trim() == email.toLowerCase() && data[i].password.toLowerCase().trim() == password.toLowerCase()){
//           this.props.navigation.navigate('MainNav')
//           break;
//             }else{
//               if(i == data.length -1){
//                 alert('invalid email and passowrd')
//               }
              
//             }
//           }
//         }

//       }).catch((error)=>{

//       })
//     }else{
//       alert('fill the empty field')
//     }
    
//   }


// // userLogin(){
  
// //     if(this.state.userName==''){
// //       alert('please enter your username')
// //     }else if(this.state.password==''){
// //       alert('please enter password')
// //     }else{
// //       this.props.navigation.navigate('ScreenB',{
// //         userName:this.state.userName,
// //         password:this.state.password
// //         })
// //     }
// // }




export default ScreenA;
