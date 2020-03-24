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
  ActivityIndicator,
  TouchableHighlightBase
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
import firebase, { firestore } from 'react-native-firebase';
//import EvaButtons from './component/iconComponent/evaButtons'
const storage = AsyncStorage

const FacebookIcon = (style) => (
  <Icon name='facebook'  fill="white" {...style} />
);
const auth = firebase.auth();

const GoogleIcon = (style) => (
  <Icon name='google' fill="white"  {...style} />
);

const PersonIcon = (style) => (
   <Icon name='person-add' {...style} fill='gray' />
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
 const EmailIcon = (style) => (
    <Icon name='at' fill="gray" {...style} />
   );

   const PhoneIcon = (style) => (
    <Icon name='phone-outline' fill="gray" {...style} />
   );





class ScreenC extends React.Component{
        constructor(Props){
          super(Props)
          this.state={
          email:'',
          password:'',
          fullName:'',
          modalStatus: false,
          error:''
          
        }
      }

      Indicator(){
        return(
          <Modal visible={this.state.modalStatus} transparent>
            <View style={{flex:1,justifyContent:'center',alignContent:'center', backgroundColor:"transparent"}}>
              <ActivityIndicator size='large' color='#0000ff'/>
              <Text style={{textAlign:'center', color:'white' , marginBottom:10}}>please wait</Text>
            </View>
          </Modal>
        )
      }
      _signup(){
        let {email,password,fullName} = this.state;
       email = email.trim();
       password = password.trim();
       fullName = fullName.trim();
        
       if(email && password && fullName){
        this.setState({modalStatus:true},()=>{
          auth.createUserWithEmailAndPassword(email,password).then((value)=>{
            value.user.updateProfile({displayName:this.state.fullName}).then((val)=>{
              auth.currentUser.sendEmailVerification().then((val2)=>{
                this.setState({modalStatus:false})
                if(email== 'dixre@gmail.com'){
                  this.props.navigation.navigate('Admin')
                }else{
                  firestore().collection('users').doc(value.user.uid).set({
                    email:email,
                    fullName:fullName,
                    photoUrl:''
                  })
                  this.props.navigation.navigate('MainNav')
                }
              }).catch((e)=>{
                this.setState({modalStatus:false})
              })
            }).catch((error2)=>{
              this.setState({modalStatus:false})
            })
            
          }).catch((error)=>{
            this.setState({modalStatus:false, error: error.message})
            
          })
        })
        
       }else{
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
                source={require("../../assets/img/image2.jpg")} 
                
                style={{width: "100%", height: "100%"}}
              >
                <View style={{backgroundColor: "rgba(0,0,0,0.7)", flex:1, justifyContent: "center", paddingHorizontal: 10}}>
                <Text category='h1' appearance='alternative' style={{marginTop:70, paddingLeft:120}}>Hello</Text>
                 <Text  appearance='alternative' style={{marginTop:15, paddingLeft:100, marginBottom:70}}>Create an Account</Text>
                 <Text style={{color:'tomato', textAlign:'center'}}>{this.state.error}</Text>
                  <Input
                    label='Full Name:'
                    placeholder='Full name'
                    autoComplete='nombre'
                    autoCapitalize='none'
                    style={style.inputBox}
                    icon={PersonIcon}
                    onChangeText={(fullName)=>this.setState({
                     fullName:fullName
                   })}
                   value={this.state.fullName}
                  />
                  <Input
                    label='Email Address:'
                    placeholder='email'
                    autoComplete='email'
                    autoCapitalize='none'
                    keyboardType='email-address'
                    style={style.inputBox}
                    icon={PersonIcon}
                    onChangeText={(email)=>this.setState({
                     email:email
                   })}
                   value={this.state.email}
                  />
                  <Input
                    label='password:'
                    placeholder='password'
                    secureTextEntry={true}
                    autoCapitalize='none'
                    style={style.inputBox}
                    icon={PersonIcon}
                    onChangeText={(password)=>this.setState({
                     password:password
                   })}
                   value={this.state.password}
                  />
                  
                  </View>   
      
                  <View style={{backgroundColor: "rgba(0,0,0,0.7)", flex:1, justifyContent: "center", paddingHorizontal: 10}}>
                  <Button
                    style={style.button2}
                    onPress={()=>this._signup()}
                       >
                        SIGN UP
                  </Button>
                       <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
                       <Text style={{textAlign:'center', marginBottom:100,paddingLeft:20}}>Already have an account?</Text>
                       <TouchableOpacity onPress={()=>this.props.navigation.navigate('ScreenA')}>
                       <Text style={{paddingRight:10,color:'white', textAlign:'center'}} > Login</Text>
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
  backgroundColor:'#4f83cc',
  borderRadius:25,
  paddingVertical:12,
  fontSize:16,
  color:'#002f6c',
  marginVertical:10,
  marginTop:40
}
})


// SignUpUsers(){
      //   //getting user input
      //   let {email,password,fullName} = this.state;
      //   email = email.trim();
      //   password = password.trim();
      //   fullName = fullName.trim();
        


      //   //validation


      //   if(email && password && fullName)
      //   //process signup
      //   {
      //   storage.getItem('users').then((value)=>{
      //     if(value){
      //       let data = JSON.parse(value);
      //       let userExist = false;
      //       for(let i = 0; i < data.length; i++){
      //         if(data[i].email.toLowerCase().trim() == email.toLowerCase()){
      //           alert('email already exist')
      //           userExist = true;
      //           break;


      //         }
      //       }
      //       if(!userExist)
      //       //sign up users
      //       {
      //         let _user = {
      //           email:email,
      //           password:password,
      //           fullName:fullName
      //         }
      //         data.push(_user)
      //         let formatData = JSON.stringify(data)
      //         storage.setItem('users', formatData).then((val)=>{
      //           alert('you have succesfully registered!')
  
      //         }).catch((error)=>{
      //           alert(error.message)
      //         })
      //       }


      //     }else{
      //       let initialRecord = [];
      //       let _user = {
      //         email:email,
      //         password:password,
      //         fullName:fullName
      //       }
      //       initialRecord.push(_user)
      //       let formatData = JSON.stringify(initialRecord)
      //       storage.setItem('users', formatData).then((val)=>{
      //         alert('you have succesfully registered!')

      //       }).catch((error)=>{
      //         alert(error.message)
      //       })
      //     }

      //   }).catch((error)=>{
      //       console.error(error)
      //   })
        
            

      //   }else
      //   {
      //     alert('please fill out empty field')

      //   }
      // }
      

      
      //   signUp(){


      //       //getting user input
      //   let {email,password,fullName} = this.state;


      //   email = email.trim();
      //   password = password.trim();
      //   fullName = fullName.trim();
        


      //   //validation


      //   if(email && password && fullName)
      //   //process signup
      //   {
      //   storage.getItem('users').then((value)=>{
      //     if(value){
      //       let data = JSON.parse(value);
      //       for(let i = 0; i < data.length; i++){
      //         if(data[i].email.toLowerCase().trim() == email.toLowerCase()){
      //           alert('email already exist')
                
      //           break;


      //         }else{
      //           if(i == data.length -1){
      //             let _user = {
      //               email:email,
      //               password:password,
      //               fullName:fullName
      //             }
      //             data.push(_user)
      //             let formatData = JSON.stringify(data)
      //             storage.setItem('users', formatData).then((val)=>{
      //               alert('you have succesfully registered!')
      
      //             }).catch((error)=>{
      //               alert(error.message)
      //             })
      //           }
      //           }
      //         }
      //       }
      //       if(userExist == false)
      //       //sign up users
      //       {
              
              

      //     }else{
      //       let initialRecord = [];
      //       let _user = {
      //         email:email,
      //         password:password,
      //         fullName:fullName
      //       }
      //       initialRecord.push(_user)
      //       let formatData = JSON.stringify(initialRecord)
      //       storage.setItem('users', formatData).then((val)=>{
      //         alert('you have succesfully registered!')

      //       }).catch((error)=>{
      //         alert(error.message)
      //       })
      //     }

      //   }).catch((error)=>{
      //       console.error(error)
      //   })
        
            

      //   }else
      //   {
      //     alert('please fill out empty field')

      //   }
      // }
      // // componentDidMount(){
      // //   storage.removeItem('users').then((val)=>{
      // //     alert('cleared')
      // //   })
      // // }
      

      

     
        
    
    
     
          
        
        
        
    

export default ScreenC;
