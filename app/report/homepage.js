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
  Alert,
  TouchableNativeFeedback,
  Image, ViewPagerAndroid, TouchableNativeFeedbackBase,Dimensions
} from 'react-native';
import firebase from 'react-native-firebase'
import {GiftedChat} from 'react-native-gifted-chat';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ViewPager from '@react-native-community/viewpager';
import { bold } from 'ansi-colors';
import {Container, content, Thumbnail, Header,Left,Right,Body,Title} from "native-base";
//import EvaButtons from './component/iconComponent/evaButtons'

const {width} = Dimensions.get("window")
const firestore = firebase.firestore();
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

const MessageIcon = (style) => (
  <Icon name='message-circle' fill="darkgray"{...style} />
);

const PinIcon = (style) => (
  <Icon name='pin' fill="white" {...style} />
 );
 const MoreIcon = (style) => (
  <Icon name='more-vertical' fill='white'  {...style} />
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
 const SearchIcon = (style) => (
  <Icon name='search' fill="white" {...style} />
 );
 const logout = (style) => (
  <Icon name='power' fill="red" {...style} />
 );






class Home extends React.Component{
        constructor(Props){
          super(Props)
          
        }
        confirm(){ 
          Alert.alert('','Are you sure you want to logout',[
            {onPress:()=>this.props.navigation.navigate('ScreenA'),text:"Yes"},
            {onPress:()=>"",text:"Cancel"}

          ])

        }
        
       
      render(){
        //const {userName,password} = this.props.navigation.state.params
           
            return(
              
              <Layout style={{flex:1}}>
                
                
                <ImageBackground
               source={require('../../assets/img/pix5.jpg')} 
               
               style={{flex:1}}
             >
               <View style={{flex:1,justifyContent:"center",alignContent:"center",marginHorizontal:10}}>
               <Avatar
                     style={{marginHorizontal:110,marginBottom:30,marginTop:-40, width:130, height:130}}
                     resizeMethod="resize"
                     source={require("../../assets/img/logo1.png")}
                   />
                   <Button 
                   onPress={()=>this.props.navigation.navigate('Channels')}
                    size='large'
                      textStyle={{letterSpacing:10}}
                      style={{
                        width:"100%",
                        height:80,
                     borderRadius:10,
                      marginTop:70,
                   
                      backgroundColor:'black', 
                      borderColor:'black'}}>
                      REPORT
                      </Button>
                      </View>

                      <Button onPress={()=>this.confirm()} icon={logout}appearance='ghost'
                      textStyle={{color:'red'}}
                      >log out</Button>
             </ImageBackground>
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




export default Home;
