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
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image, ViewPagerAndroid,TouchableNativeFeedback
} from 'react-native';
import {Divider} from 'react-native-elements';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ViewPager from '@react-native-community/viewpager';
import { bold } from 'ansi-colors';
import {Container, content, Thumbnail,Header,Left,Right,Body,Title} from "native-base";
//import EvaButtons from './component/iconComponent/evaButtons'

const FacebookIcon = (style) => (
  <Icon name='facebook'  fill="white" {...style} />
);

const GoogleIcon = (style) => (
  <Icon name='google' fill="white"  {...style} />
);

const PersonIcon = (style) => (
   <Icon name='person-add' {...style} fill='gray' />
);
const PersonIcon2 = (style) => (
  <Icon name='person' {...style} fill='blue' />
);
const MessageIcon = (style) => (
  <Icon name='message-circle' fill="darkgray"{...style} />
);
const MessageIcon2 = (style) => (
  <Icon name='message-square' fill="blue"{...style} />
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
 const BackIcon = (style) => (
  <Icon name='arrow-back' fill="white" {...style} />
 );
 const CameraIcon = (style) => (
  <Icon name='camera' fill="white" {...style} />
 );
 const EditIcon = (style) => (
  <Icon name='edit' fill="gray" {...style} />
 );
 const InfoIcon = (style) => (
  <Icon name='info' fill="blue" {...style} />
 );
 const PhoneIcon = (style) => (
  <Icon name='phone' fill="blue" {...style} />
 );
 const More = (style) => (
  <Icon name='more-vertical' fill="white" {...style} />
 );








class Settings extends React.Component{
        constructor(Props){
          super(Props)
        }
        _navigate(routName){
          this.props.navigation.navigate(routName)
        }
      render(){
        return(
            <Layout>
              <Header>
                    <Left>
                    <Button style={{width:0, height:0}} onPress={()=> this._navigate('Home')} appearance= 'ghost' icon={BackIcon}></Button>
                    </Left>
                    <Body ><Title>Settings</Title></Body>
                    
             </Header>
             <View style={{flex:1, flexDirection:'row'}}>
                    <View>
                    <Avatar
                     style={{width:60, height:60,marginLeft:20,marginTop:25}}
                     resizeMethod="resize"
                     source={require("../../assets/img/joyo.jpg")}
                   />
                    </View>
                    <View><Text category='h6' style={{paddingLeft:20,marginTop:30}}>Smarty</Text></View>
                    
             </View>
             <Text style={{marginTop:50,paddingLeft:100,color:'gray'}}>Dont stop until you are done!</Text>
              
             <Text style={{marginTop:60,paddingLeft:30}} category='h6'>Profile</Text>
             <Text style={{marginTop:2,paddingLeft:30, color:'gray'}}>Edit Profile</Text>
             <Divider />
             <Text style={{marginTop:5,paddingLeft:30}} category='h6'>Availability</Text>
             <Text style={{marginTop:2,paddingLeft:30, color:'gray'}}>Edit Profile</Text>
             <Divider />
             <Text style={{marginTop:60,paddingLeft:30}} category='h6'>Notification</Text>
             <Text style={{marginTop:2,paddingLeft:30, color:'gray'}}>all notifications</Text>
             <Divider />
             
             <Text style={{marginTop:5,paddingLeft:30}} category='h6'>Dark Mode</Text>
             <Text style={{marginTop:2,paddingLeft:30, color:'gray'}}>Battery saver mode</Text>
             <Divider />
             
             <Text style={{marginTop:5,paddingLeft:30}} category='h6'>Feedback</Text>
             <TouchableOpacity onPress={()=> this._navigate('ScreenA')}><Text style={{paddingLeft:180,marginTop:50, color:'red'}} category='h6'>sign Out</Text></TouchableOpacity> 
             <Divider />
            <Text style={{marginTop:40,textAlign:'center', color:'gray'}}>Version 03.04.20-0-10340-3</Text>
            </Layout>
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
}
})




export default Settings;
