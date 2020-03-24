/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { ApplicationProvider, Layout, Text, Avatar,  Button, IconRegistry,Icon} from '@ui-kitten/components';
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
import {Input} from 'react-native-elements'
//import EvaButtons from './component/iconComponent/evaButtons'

const FacebookIcon = (style) => (
  <Icon name='facebook'  fill="white" {...style} />
);

const GoogleIcon = (style) => (
  <Icon name='google' fill="white"  {...style} />
);
const ArrowIcon = (style) => (
  <Icon name='arrow-forward'  fill="white" {...style} />
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






class Policelogin extends React.Component{
        constructor(Props){
          super(Props)
          
        }
       
      render(){
        //const {userName,password} = this.props.navigation.state.params
             return(
            
             
              <ImageBackground
              source={require("../../assets/img/admin5.jpg")} 
         
              style={{width: "100%", height: "100%"}}
          >
              <View style={{flex:1, backgroundColor:'rgba(0,0,0,0.6)'}}>
              <ScrollView showsVerticalScrollIndicator={false}>
              <StatusBar translucent={true} backgroundColor="transparent"/>
              <View style={{paddingHorizontal:150, marginVertical:40}}>
              <Thumbnail
                 resizeMethod="resize"
                 large source={require("../../assets/img/logos.jpeg")}
                 style={{marginTop:20}}
               />
              </View>
              
                  <Input
                  placeholder= 'Id'
                  placeholderTextColor='white'
                  style={{marginTop:100}}
                  />
                  <Input
                  placeholder= 'access code'
                  placeholderTextColor='white'
                  style={style.input}
                  />
      
      
                  
                  <Button icon={ArrowIcon} style={{backgroundColor:'black', borderRadius:400, borderColor:'black', width:80, alignSelf:'center',marginTop:70, padding:5,height:80}} onPress={()=>this.props.navigation.navigate('Reporter')}></Button>
              </ScrollView>
              </View>

          </ImageBackground>
          
           
  )
}
}

const style= StyleSheet.create({
  input:{
      backgroundColor:'#f2f2f2',
      justifyContent:'center',
      width:'30%',
      alignSelf:'center',
      margin:20,
      borderWidth:1,
      borderColor:'red'

  },
  input2:{
      backgroundColor:'#f2f2f2',
      position:'relative',
      display:'flex',
      height:200,
      width:800,
      marginTop:100

  }
})




export default Policelogin;
