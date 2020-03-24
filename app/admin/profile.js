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








class Profile extends React.Component{
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
                    <Button style={{width:0, height:0}} onPress={()=> this._navigate('NewScreen')} appearance= 'ghost' icon={BackIcon}></Button>
                    </Left>
                    <Body ><Title>Profile</Title></Body>
                    
             </Header>
             <View style={{justifyContent:'center',alignContent:'center', paddingHorizontal:90,flexDirection:'row'}}>
             <View style={{flex:3}}>
             <Avatar
                     style={{width:150,height:150,marginTop:20}}
                     resizeMethod="resize"
                     source={require("../../assets/img/joyo.jpg")}
                   />
             </View>
             
                   <View>
                   <Left style={{paddingRight:40,marginTop:130}}>
                    <Button style={{width:45, height:45, borderRadius:90}}  icon={CameraIcon}></Button>
                    </Left>
                   </View>
             </View>
             <View style={{ flex:2}}>
                    <Left><Button style={{paddingRight:300, marginTop:50}} appearance='ghost' icon={PersonIcon2}></Button></Left>
                    <Right><Button style={{marginTop:50,paddingLeft:300}} appearance='ghost' icon={EditIcon}></Button></Right>
                    <Body style={{marginTop:50, paddingRight:200}}><Text style={{color:'gray'}}>Name</Text></Body>
                    <Body style={{marginTop:20, paddingRight:190}}><Text>Smarty</Text></Body>
                    <Body style={{marginTop:25, paddingLeft:63}}>
                    <Text style={{color:'gray'}}>This is not your real name or pin. This name will be visible to your counsellor.
                    </Text>
                    </Body>
                    <Divider style={{backgroundColor:'gray', marginTop:40,width:300,marginLeft:60}}
             />  
                    
                    
                    
                    <Left><Button style={{paddingRight:300, marginTop:10}} appearance='ghost' icon={InfoIcon}></Button></Left>
                    
                    <Right><Button style={{marginTop:10,paddingLeft:300}} appearance='ghost' icon={EditIcon}></Button></Right>
                    <Body style={{marginTop:10, paddingRight:200}}><Text style={{color:'gray'}}>About</Text></Body>
                    <Body style={{marginTop:20, paddingRight:162}}><Text>set status...</Text></Body>
                    <Divider style={{backgroundColor:'gray', marginTop:40,width:300,marginLeft:60}}/>
                    <Left><Button style={{paddingRight:300, marginTop:10}} appearance='ghost' icon={PhoneIcon}></Button></Left>
                    <Body style={{marginTop:10, paddingRight:200}}><Text style={{color:'gray'}}>Phone</Text></Body>
                    <Body style={{marginTop:20, paddingRight:162}}><Text>+22981746</Text></Body>
                   </View>
                   
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




export default Profile;
