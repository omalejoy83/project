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
  TouchableNativeFeedback,
  Image, ViewPagerAndroid, TouchableNativeFeedbackBase
} from 'react-native';
import firebase from 'react-native-firebase'

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
  const firestore= firebase.firestore();
const FacebookIcon = (style) => (
  <Icon name='facebook'  fill="white" {...style} />
);

const GoogleIcon = (style) => (
  <Icon name='google' fill="white"  {...style} />
);

const PersonIcon = (style) => (
   <Icon name='person' {...style} fill='gray' />
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
  <Icon name='heart-outline' fill="gray" {...style} />
 );
 const HeartIcon2 = (style) => (
    <Icon name='heart-outline' fill="red" {...style} />
   );
 const ClockIcon = (style) => (
  <Icon name='clock-outline' fill="blue" {...style} />
 );
 const SearchIcon = (style) => (
  <Icon name='search' fill="white" {...style} />
 );
 const ArrowIcon = (style) => (
  <Icon name='arrow-forward' fill="white" {...style} />
 );
 const BookIcon = (style) => (
    <Icon name='book-open-outline' fill="gray" {...style} />
   );
   const PeopleIcon = (style) => (
    <Icon name='people' fill="gray" {...style} />
   );
   const SettingsIcon = (style) => (
    <Icon name='settings-2-outline' fill="gray" {...style} />
   );
   const NotificationsIcon = (style) => (
    <Icon name='bell-outline' fill="gray" {...style} />
   );
   const Book2Icon = (style) => (
    <Icon name='book' fill="gray" {...style} />
   );
   const More = (style) => (
    <Icon name='more-vertical' fill="gray" {...style} />
   );
  
  
  
  
  


 class Channels extends React.Component{
    constructor(Props){
        super(Props)
        this.state={
            channels:[]
        }
      }
      channelRef = firestore.collection('Channels');

      componentDidMount(){
         this.channelRef.onSnapshot((snapshot)=>{
                let docArray = [];
                snapshot.forEach((value)=>{
                     docArray.push({
                         id: value.id,
                         name: value.data().name
                     })
                })
                this.setState({
                    channels:docArray
                })
         })
      }

      _navigate(routName, payload){
        this.props.navigation.toggleDrawer();
        this.props.navigation.navigate(routName,{data:payload})
      }

      renderIcon(name){
        switch(name){
            case "Educational":{
                return BookIcon;
                break;
            }
            case "Personal":{
                return HeartIcon;
                break;
            }
            case "Spiritual":{
                return Book2Icon;
                break;
            }
            case "Emotional":{
                return HeartIcon2;
                break;
            }
        }
      }
      render(){
          return(
            <Layout style={{flex:1}}>
            <Header translucent={false}>
                <Left>
                <TouchableNativeFeedback onPress={()=> this._navigate('Profile')}>
                <Avatar
                 size="small"
                 resizeMethod="resize"
                 source={require("../../assets/img/joyo.jpg")}
               />
                </TouchableNativeFeedback>
                </Left>
                <Body><Title>channels</Title></Body>
                
            </Header>
            <View style={{flex:2}}>
            <View style={{flexDirection:'row'}}>
                <View>
                <Button  appearance= 'ghost' style={{height:0, width:0 , marginTop:13}} icon={PersonIcon}></Button>
                </View>
                <TouchableOpacity onPress={()=> this._navigate('Profile')}>
                    <Text category='h6' style={{marginTop:23, paddingLeft:12}}>Profile</Text>
                </TouchableOpacity>
            </View>
              

              <ScrollView>
                    {
                        this.state.channels.map((item)=>
                        <View style={{ flexDirection:'row'}}>
                          {console.log(item.id,item.name)}
                            <View>
                                <Button  appearance= 'ghost' style={{height:0, width:0 , marginTop:13}} icon={this.renderIcon(item.name)}></Button>
                            </View>
                            <TouchableOpacity onPress={()=> this._navigate('Home',{id:item.id, name: item.name})}>
                            <Text category='h6' style={{marginTop:20, paddingLeft:12}}>{item.name}</Text>
                            </TouchableOpacity>
                    </View>
                        )
                    }
              </ScrollView>
            
       
            </View>




            
            <View style={{flex:1}}>
            <View style={{flexDirection:'row'}}>
                <View>
                <Button  appearance= 'ghost' style={{height:0, width:0 , marginTop:13}} icon={NotificationsIcon}></Button>
                </View>
                <TouchableOpacity>
                    <Text category='h6' style={{marginTop:23, paddingLeft:12}}>Notifications</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row'}}>
                <View>
                <Button  appearance= 'ghost' style={{height:0, width:0 , marginTop:13}} icon={SettingsIcon}></Button>
                </View>
                <TouchableOpacity onPress={()=> this._navigate('Settings')}>  
                    <Text category='h6' style={{marginTop:23, paddingLeft:12}}>Settings and privacy</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row'}}>
                <View>
                <Button  appearance= 'ghost' style={{height:0, width:0 , marginTop:13}} icon={PersonIcon}></Button>
                </View>
                <TouchableOpacity>
                    <Text category='h6' style={{marginTop:23, paddingLeft:12}}>Help Center</Text>
                </TouchableOpacity>
            </View>
            </View>
            
            </Layout>
          )
      }
 }

 export default Channels;