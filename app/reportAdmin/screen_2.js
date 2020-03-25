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






class ScreenB extends React.Component{
        constructor(Props){
          super(Props)
          
        }
       
      render(){
        //const {userName,password} = this.props.navigation.state.params
             return(
              <View style={{flex: 1}} key="2">
              <ScrollView vertical showsVerticalScrollIndicator={false}>
              <ImageBackground
                source={require("../../assets/img/image24.jpeg")} 
                
                style={{flex: 1,width: "100%", height: "100%"}}
              >
                <View style={{
                  backgroundColor: "rgba(0,0,0,0.5)", 
                  flex:1, 
                  justifyContent: "center", 
                  paddingHorizontal: 15
                }}>
      
                  <Layout style={{
                    justifyContent: "center", 
                    alignItems: "center", 
                    backgroundColor: "rgba(0,0,0,0.1"
                  }}>
 
                  <Thumbnail
                    resizeMethod="resize"
                    large source={require("../../assets/img/smart.jpg")}
                    style={{marginTop:20}}
                  />
                  <Text 
                    category="h6" 
                    appearance="alternative" 
                    style={{fontWeight: "bold"
                    }}>Joy smart
                  </Text>
      
                  <Button 
                    category="h1" 
                    appearance="ghost" 
                    style={{fontWeight: "bold",backgroundColor: "rgba(0,0,0,0.1)", color:'white'}} 
                    icon={PinIcon}>North Korea
                  </Button>
                  </Layout>
      
                  <Layout style={style.container}>
                    <Button icon={PersonIcon} style={style.button}>FOLLOW</Button>
                    <Button appearance="outline" icon={MessageIcon} style={style.button}>MESSAGE</Button>
                  </Layout>
                  <View style={{flex:1, flexDirection:'row', paddingHorizontal:50, backgroundColor: "rgba(0,0,0,0.1})"}}>
                     <Text style={style.text1}>1500</Text>
                     <Text style={style.text2}>86</Text>
                     <Text style={style.text3}>115</Text>
                    </View>
                    <View style={{flex:1, flexDirection:'row', paddingHorizontal:50, backgroundColor: "rgba(0,0,0,0.1})"}}>
                     <Text style={{flex:4, color:'white'}}>followers</Text>
                     <Text style={{flex:3, color:'white'}}>following</Text>
                     <Text style={{flex:2, color:'white', paddingLeft:40}}>posts</Text>
                    </View>
                </View>
 
                
                  
                <View style={{flex: 1, paddingHorizontal: 15, backgroundColor: "rgba(0,0,0,0.1})"}}></View>
              </ImageBackground>
                    
      
              <View style={{flex: 1, paddingHorizontal: 15}}>
                <Text style={{marginTop:25}} >About</Text>
                <Text style={{color:'gray', marginTop:15}}>I'm an Extrovert. I love listening to music, watching korean movies 
                  playing space attack games on my phone, chatting with friends and catching fun.</Text>
              </View> 
              
              <Text style={{paddingHorizontal:15, marginTop:20}} >Friends</Text>  
      
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      
      
              <View style={{paddingHorizontal: 15,flexDirection:'row',flex:1}}>
      
                <View style={style.box}>
                    <Avatar
                      size="giant"
                      style={style.avatar}
                      resizeMethod="resize"
                      source={require("../../assets/img/salvic.jpg")}
                    />
                    <Text style={{fontWeight: "bold", textAlign:'center'}}>salvic</Text>
                </View>
                <View style={style.box}>
                      <Avatar
                        size="giant"
                        resizeMethod="resize"
                        style={style.avatar}
                        source={require("../../assets/img/elpee.jpg")}
                      />
                      <Text style={{fontWeight: "bold", textAlign:'center'}}>El-Pee</Text>
      
                </View>
                <View style={style.box}>
                    <Avatar
                      size="giant"
                      resizeMethod="resize"
                      style={style.avatar}
                      source={require("../../assets/img/mulla.jpg")}
                    />
                    <Text style={{fontWeight: "bold", textAlign:'center'}}>Mulla</Text>
      
                </View>
                <View style={style.box}>
                    <Avatar
                      size="giant"
                      resizeMethod="resize"
                      style={style.avatar}
                      source={require("../../assets/img/smarty.jpg")}
                    />
                    <Text style={{fontWeight: "bold", textAlign:'center'}}>Hellen</Text>
      
                </View>
                <View style={style.box}>
                    <Avatar
                      size="giant"
                      resizeMethod="resize"
                      style={style.avatar}
                      source={require("../../assets/img/madu.jpg")}
                    />
                    <Text style={{fontWeight: "bold" ,textAlign:'center'}}>Madu</Text>
      
                </View>
                <View style={style.box}>
                    <Avatar
                      size="giant"
                      resizeMethod="resize"
                      style={style.avatar}
                      source={require("../../assets/img/madu.jpg")}
                    />
                    <Text style={{fontWeight: "bold", textAlign:'center'}}>Dawn</Text>
      
                </View>
              </View>
               
              </ScrollView>
              <Text style={{paddingHorizontal:15, marginTop:20}}>Shots</Text>
              <View style={{flex:1, flexDirection:'row', backgroundColour:'white'}}>
                     <View style={{flex:1}}>
                     <Image
                    source={require("../../assets/img/image18.jpeg")} 
                    style={style.image}
                     resizeMethod="resize"
                       />
                     </View>
                     <View style={{flex:1}}>
                     <Image
                    source={require("../../assets/img/image30.jpg")} 
                    style={style.image}
                     resizeMethod="resize"
                       />
                     </View>
                     <View style={{flex:1}}>
                     <Image
                    source={require("../../assets/img/image11.jpeg")} 
                    style={style.image}
                     resizeMethod="resize"
                       />
                     </View>
                
                 
              </View>
 
              <View style={{flex:1, flexDirection:'row', backgroundColour:'white'}}>
                     <View style={{flex:1}}>
                     <Image
                    source={require("../../assets/img/image20.jpeg")} 
                    style={style.image}
                     resizeMethod="resize"
                       />
                     </View>
                     <View style={{flex:1}}>
                     <Image
                    source={require("../../assets/img/elpee.jpg")} 
                    style={style.image}
                     resizeMethod="resize"
                       />
                     </View>
                     <View style={{flex:1}}>
                     <Image
                    source={require("../../assets/img/image14.jpeg")} 
                    style={style.image}
                     resizeMethod="resize"
                       />
                     </View>
              </View>
              <View style={{flex:1, flexDirection:'row', backgroundColour:'white'}}>
                     <View style={{flex:1}}>
                     <Image
                    source={require("../../assets/img/mulla.jpg")} 
                    style={style.image}
                     resizeMethod="resize"
                       />
                     </View>
                     <View style={{flex:1}}>
                     <Image
                    source={require("../../assets/img/image16.jpeg")} 
                    style={style.image}
                     resizeMethod="resize"
                       />
                     </View>
                     <View style={{flex:1}}>
                     <Image
                    source={require("../../assets/img/image24.jpeg")} 
                    style={style.image}
                     resizeMethod="resize"
                       />
                     </View>
                
                 
              </View>
              <View style={{flex:1, flexDirection:'row', backgroundColour:'white'}}>
                     <View style={{flex:1}}>
                     <Image
                    source={require("../../assets/img/smart.jpg")} 
                    style={style.image}
                     resizeMethod="resize"
                       />
                     </View>
                     <View style={{flex:1}}>
                     <Image
                    source={require("../../assets/img/elpe.jpg")} 
                    style={style.image}
                     resizeMethod="resize"
                       />
                     </View>
                     <View style={{flex:1}}>
                     <Image
                    source={require("../../assets/img/image25.jpeg")} 
                    style={style.image}
                     resizeMethod="resize"
                       />
                     </View>
                
                 
              </View>
              <View style={{flex:1, flexDirection:'row', backgroundColour:'white'}}>
                     <View style={{flex:1}}>
                     <Image
                    source={require("../../assets/img/image24.jpeg")} 
                    style={style.image}
                     resizeMethod="resize"
                       />
                     </View>
                     <View style={{flex:1}}>
                     <Image
                    source={require("../../assets/img/image26.jpeg")} 
                    style={style.image}
                     resizeMethod="resize"
                       />
                     </View>
                     <View style={{flex:1}}>
                     <Image
                    source={require("../../assets/img/image28.jpeg")} 
                    style={style.image}
                     resizeMethod="resize"
                       />
                     </View>
                
                 
              </View>
 
                    
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
}
})




export default ScreenB;
