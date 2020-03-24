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
  ActivityIndicator,
  Modal,
  Image, ViewPagerAndroid
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
const auth = firebase.auth();
//import EvaButtons from './component/iconComponent/evaButtons'
const storage = AsyncStorage
const FacebookIcon = (style) => (
  <Icon name='facebook'  fill="white" {...style} />
);

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






class ScreenD extends React.Component{
        constructor(Props){
          super(Props)
          this.state={
            email:'',
            modalStatus: false
            
          }
        }
        

        forgottenPassword(){
          let {email} = this.state;
          email = email.trim();
          
          if(email){
            this.setState({modalStatus:true},()=>{
              auth.sendPasswordResetEmail(email).then((value)=>{
                this.setState({modalStatus:false})
                alert('go to your email')
                this.props.navigation.navigate('ScreenA')
            }).catch((error)=>{
              this.setState({modalStatus:false})
              alert(error.message);
            })
            })
            
             }else{
               alert('fill empty field')
             }
              
            }
            Indicator(){
              return(
                <Modal visible={this.state.modalStatus} transparent>
                  <View style={{flex:1,justifyContent:'center',alignContent:'center', backgroundColor:"transparent"}}>
                    <ActivityIndicator size='large' color='#0000ff'/>
                  </View>
                </Modal>
              )
            }
            
        
          
            
        
      render(){
        
             return(
                <View style={{flex: 1}} key="1">
                <ScrollView showsVerticalScrollIndicator={false}>
                {this.Indicator()}
              <StatusBar translucent={true} backgroundColor="transparent"/>
              <ImageBackground
                source={require("../../assets/img/image7.jpeg")} 
                
                style={{width: "100%", height: "100%"}}
              >
                <View style={{backgroundColor: "rgba(0,0,0,0.7)", flex:1, justifyContent: "center", paddingHorizontal: 10}}>
                <Text category='h3' appearance='alternative' style={{marginTop:70, paddingLeft:60,marginBottom:60}}>Reset Password</Text>
                 
                  <Input
                  label= 'Email Address:'
                    placeholder='Enter your email address'
                    size="small"
                    style={style.inputBox}
                    icon={EmailIcon}
                    onChangeText={(email)=>this.setState({
                     email:email.trim()
                   })}
                  />
      
                  
                 
                  
                  </View>   
      
                  <View style={{backgroundColor: "rgba(0,0,0,0.7)", flex:1, justifyContent: "center", paddingHorizontal: 10}}>
                  <Button
                    style={style.button2}
                    onPress={()=>this.forgottenPassword()}
                       >
                        RESET
                  </Button>

                  
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
  marginTop:70,
  marginBottom:300
}
})




export default ScreenD;
