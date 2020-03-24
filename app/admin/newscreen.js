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
  TouchableNativeFeedback,
  Image, ViewPagerAndroid, TouchableNativeFeedbackBase, FlatList
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
import {Divider} from 'react-native-elements';
import {Container, content, Thumbnail, Header,Left,Right,Body,Title} from "native-base";
//import EvaButtons from './component/iconComponent/evaButtons'


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
 const ArrowIcon = (style) => (
  <Icon name='arrow-forward' fill="white" {...style} />
 );






class NewScreen extends React.Component{
        constructor(Props){
          super(Props)
          this.state={
            routeName:"",
            messages: [],
            imagesource:  require("../../assets/img/image2.jpg"),
            users:[],
            channels:[]
          }
        }


       
        _listening(){
          
          const routeName = this.props.navigation.state.params? this.props.navigation.state.params.data.name:'Personal'
          const id = this.props.navigation.state.params? this.props.navigation.state.params.data.id:'1MFsXrZfxvvhQtFqvAIF'

             if(routeName){
              if(routeName == this.state.routeName){
                //dont do anything
             }else{
              firestore.collection(id).orderBy('date', 'DESC').get().then((val)=>{
                let doc = [];
                val.forEach((value)=>{
                    doc.push(value.data())
                })
                this.setState({
                  users:doc
                })
               })
              this.setState({routeName:routeName})
               try{
                 this.listener()
   
               }catch(error){
   
               }
            }
        }
    }
    

           

        

  
       //1MFsXrZfxvvhQtFqvAIF Personal 
        componentDidMount(){
         
          this._listening()
          
        }
        

        _navigate(user){
          const id = this.props.navigation.state.params? this.props.navigation.state.params.data.id:'1MFsXrZfxvvhQtFqvAIF'
          const routeName = this.props.navigation.state.params? this.props.navigation.state.params.data.name:'Personal'
          const usersId = user.id
          const details= {
            userId:usersId,
            channelId:id,
            channelName:routeName
            
            
          }
          
         this.props.navigation.navigate('HomeAdmin',details)
        }
        componentDidUpdate(){
          
          this._listening()
        }

       
      render(){
        //const {userName,password} = this.props.navigation.state.params
             return(
              
              <Layout style={{flex:1}}>
                <Header style={{height:90}}>
             <Body style={{paddingLeft:10}}><Title>{this.state.routeName} chats</Title></Body>
                    <Right>
                    <Button  iconleft icon={MoreIcon} appearance='ghost' ></Button>
                    </Right>
                </Header>

                <FlatList
                  data={this.state.users}
                  ItemSeparatorComponent={()=><Divider />}
                  renderItem= {({item})=>(
                    <TouchableOpacity onPress={()=> this._navigate(item)}>

                    <View style={{flexDirection:'row'}}>
                         <View>
                            <Avatar
                                style={{width:50, height:50,marginLeft:20,marginTop:25}}
                                resizeMethod="resize"
                                source={require("../../assets/img/smart.jpg")}
                              />
                        </View>
                        <View>
                           <Text category='h6' style={{marginTop:25, paddingLeft:12}}>{item.name}</Text>
                           <Text  style={{marginTop:5, paddingLeft:12, color:'gray'}}>{item.email}</Text>
                        </View>
                   </View>
                </TouchableOpacity>

                  )}
                />
              
                
                
                
                
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




export default NewScreen;
