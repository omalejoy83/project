import { ApplicationProvider, Layout, Text, Avatar, Button, IconRegistry,Icon} from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';




import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  ImageBackground,Modal, ActivityIndicator,
  TouchableNativeFeedback,Alert,Platform,PermissionsAndroid,
  Image, ViewPagerAndroid, TouchableNativeFeedbackBase,AsyncStorage, Animated
} from 'react-native';
import firebase, { auth } from 'react-native-firebase'
import ImagePicker from 'react-native-image-crop-picker';


import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ViewPager from '@react-native-community/viewpager';
import { bold } from 'ansi-colors';
import {Container, content, Thumbnail, Header,Left,Right,Body,Title,Footer,FooterTab,Input} from "native-base";
import Geolocation from 'react-native-geolocation-service';
import { TabView, SceneMap } from 'react-native-tab-view';


// import AudioRecorderPlayer from 'react-native-audio-recorder-player';
// const audioRecorderPlayer = new AudioRecorderPlayer();
//import EvaButtons from './component/iconComponent/evaButtons'
  const storage=  AsyncStorage;
  const firestore= firebase.firestore();
  const firebaseStorage = firebase.storage();
const FacebookIcon = (style) => (
  <Icon name='facebook'  fill="white" {...style} />
);

const camera = (style) => (
  <Icon name='camera-outline' fill="black"  {...style} />
);

const video = (style) => (
   <Icon name='video-outline' {...style} fill='black' />
);

const audio = (style) => (
  <Icon name='headphones-outline' fill="black"{...style} />
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
   const trash = (style) => (
    <Icon name='trash-2' fill="red" {...style} />
   );
   const More = (style) => (
    <Icon name='more-vertical' fill="gray" {...style} />
   );
  
  const { width} = Dimensions.get('window');
  // const { width2} = Dimensions.get('window');
  
  
  
  
  
  
  


 class Bible extends React.Component{
        constructor(Props){
          super(Props)
          this.state={
            active:0,
            xtab1:0,
            xtab2:0,
            xtab3:0,
            translateX: new Animated.Value(0),
            translateXTab1:new Animated.Value(0),
            translateXTab2:new Animated.Value(width),
            translateXTab3:  new Animated.Value(width),
            translateY: -1000

          }

          
        }
        handleSlide(type){
              let {xtab1,xtab2, xtab3,translateX,active,translateXTab1,translateXTab2,translateXTab3}= this.state;
              Animated.spring(translateX,{
                toValue:type,
                duration:100
              }).start()
              if(active===0){
                Animated.parallel([
                  Animated.spring(translateXTab1,{
                    toValue:0,
                    duration:100
                  }).start(),
                  Animated.spring(translateXTab2,{
                    toValue:width,
                    duration:100
                  }).start(),
                  Animated.spring(translateXTab3,{
                    toValue:width,
                    duration:100
                  }).start(),
                ])
              }else if(active===1){
                Animated.parallel([
                  Animated.spring(translateXTab1,{
                    toValue:-width,
                    duration:100
                  }).start(),
                  Animated.spring(translateXTab2,{
                    toValue:0,
                    duration:100
                  }).start(),
                  Animated.spring(translateXTab3,{
                    toValue:-width,
                    duration:100
                  }).start(),
                ])
              }else{
                Animated.parallel([
                  Animated.spring(translateXTab1,{
                    toValue:-width,
                    duration:100
                  }).start(),
                  Animated.spring(translateXTab2,{
                    toValue:-width,
                    duration:100
                  }).start(),
                  Animated.spring(translateXTab3,{
                    toValue:0,
                    duration:100
                  }).start()
                ])
              }
        }
      render(){

        let {xtab1,xtab2, xtab3,translateX, translateY,active,translateXTab1 ,translateXTab2, translateXTab3} = this.state;
          return(
            
              <View style={{flex:1}}>
                <View style={{width:'90%',marginLeft:'auto', marginRight:'auto'}}>
                <View style={{flexDirection:'row', marginTop:40,marginBottom:20, height:36,position:'relative'}}>
                    <Animated.View 
                    style={{position:'absolute',
                    width:'33.4%',
                     height:'100%',
                     top:0, left:0, 
                     backgroundColor:"#bfaafc",
                     transform:[{translateX}]
                     }}/>
                    <TouchableOpacity style={{flex:1, justifyContent:'center',alignItems:'center',
                      borderWidth:1,
                      borderColor:'blue',
                      borderRightWidth:0,
                      borderTopRightRadius:0,
                      borderBottomRightRadius:0,


                  }}
                  onLayout={(e)=>this.setState({
                    xtab1: e.nativeEvent.layout.x
                  })}
                  onPress={()=>this.setState({
                    active:0
                  },()=>this.handleSlide(xtab1))}
                  >
                      <Text style={{color:active ===0? 'white' : 'black'}}>Books</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1, justifyContent:'center',alignItems:'center',
                  borderWidth:1,
                  borderColor:'blue',
                  borderRightWidth:0,
                  borderTopRightRadius:0,
                  borderBottomRightRadius:0,
                  }}
                  onLayout={(e)=>this.setState({
                    xtab2: e.nativeEvent.layout.x
                  })}
                  onPress={()=>this.setState({
                    active:1
                  },()=>this.handleSlide(xtab2))}
                  >
                      <Text style={{color:active ===1? 'white' : 'black'}}>Chapters</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1, justifyContent:'center',alignItems:'center',
                      borderWidth:1,
                      borderColor:'blue',
                      borderRightWidth:1,
                      borderTopLeftRadius:0,
                      borderBottomLeftRadius:0,
                      borderRadius:4
                  }}
                  onLayout={(e)=>this.setState({
                    xtab3: e.nativeEvent.layout.x
                  })}
                  onPress={()=>this.setState({
                    active:2
                  },()=>this.handleSlide(xtab3))}
                  >
                      <Text style={{color:active ===2 ? 'white' : 'black'}}>Verses</Text>
                    </TouchableOpacity>
                </View>
                </View>
                  
                      <Animated.View style={{
                          transform:[{translateX:translateXTab1}]
                      }}
                      onLayout={(e)=>this.setState({
                        translateY: e.nativeEvent.layout.height
                      })}
                      >
                          <Text>Genesis</Text>
                          <Text>Exodus</Text>
                          <Text>Leveticus</Text>
                          <Text>Numbers</Text>
                      </Animated.View>


                      <Animated.View style={{
                          transform:[{translateX:translateXTab2},{translateY:-translateY}],flexDirection:'row'
                      }}
                      onLayout={(e)=>this.setState({
                        translateY: e.nativeEvent.layout.height
                      })}
                      >
                          <Text>1</Text>
                         <Text>2</Text>
                          <Text>3</Text>
                          <Text>4</Text>
                      </Animated.View>

                      <Animated.View style={{
                          transform:[{translateX:translateXTab3},{translateY:-translateY}]
                      }}>
                          <Text>1</Text>
                          <Text>2</Text>
                          <Text>3</Text>
                     </Animated.View>
            
              </View>
                
            
          )
      }
 }
 const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

 export default Bible;