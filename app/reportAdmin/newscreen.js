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
  Image, ViewPagerAndroid, TouchableNativeFeedbackBase, FlatList, Alert,Modal
} from 'react-native';

import firebase from 'react-native-firebase'
import MapView from 'react-native-maps';

import {GiftedChat} from 'react-native-gifted-chat';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import moment from "moment"
import ViewPager from '@react-native-community/viewpager';
import { bold } from 'ansi-colors';
import {Divider} from 'react-native-elements';
import {Container, content, Thumbnail, Header,Left,Right,Body,Title} from "native-base";
import { Marker } from 'react-native-maps';

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

 const pin = (style) => (
  <Icon name='pin-outline' fill='red'  {...style} />
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
            reports:[],
            channels:[],
            showMap:false,
            locations:{latitude: 37.78825,
                            longitude: -122.4324,}
          }
        }


       
       

           

        

  
       //1MFsXrZfxvvhQtFqvAIF Personal 
        componentDidMount(){
         
          this.listener =  firestore.collection("Reports").orderBy('createdAt', 'DESC').onSnapshot((val)=>{
            let doc = [];
            val.forEach((value)=>{
                value.data().id = value.id;
                doc.push(value.data());
            })
            this.setState({
              reports:doc
            })
           })
          
        }

        componentWillUnmount(){
          this.listener();
        }
        
        delete(item){
           Alert.alert("","Are you sure you want to delete this report?",
            [
              {onPress:()=> firestore.collection("Reports").doc(item.id).delete(),text:"Delete"},
              {onPress:()=>"",text:"Cancel"}

            ])
        }

        showMedias(){

        }

        showMap(){
          return(
            <Modal onRequestClose={()=>this.setState({showMap:false})} visible={this.state.showMap} transparent>
              <MapView
                style={style.map}
                initialRegion={{
                  latitude: this.state.locations.latitude,
                  longitude: this.state.locations.longitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}>
                       <Marker
                          coordinate={this.state.locations}
                        />
                </MapView>
            </Modal>
          )
        }
      
       
      render(){

        return(
              
              <Layout style={{flex:1}}>
                <Header>
             <Body style={{paddingLeft:10}}><Title>Reports</Title></Body>
                    <Right>
                    <Button  iconleft icon={MoreIcon} appearance='ghost' ></Button>
                    </Right>
                </Header>
                 {this.showMap()}
                <FlatList
                  data={this.state.reports}
                  ItemSeparatorComponent={()=><Divider />}
                  renderItem= {({item})=>(
                    <TouchableOpacity onLongPress={()=>this.delete(item)} onPress={()=>this.showMedias()} >

                    <View style={{flexDirection:'row',paddingBottom:20}}>
                         <View style={{flex:1,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                            <Avatar
                                style={{width:50, height:50}}
                                resizeMethod="resize"
                                source={require("../../assets/img/smart.jpg")}
                              />
                        </View>
                        <View style={{flex:4}}>
                           <Text category='h6' style={{marginTop:25, paddingLeft:12,fontWeight:'bold'}}>{item.name}</Text>
                           <Text  style={{marginTop:5, paddingLeft:12, color:'gray'}}>{item.email}</Text>
                           <Text  style={{marginTop:5, paddingLeft:12, color:'black',flexWrap:'wrap'}}>{item.message}</Text>
                           <Text  style={{marginTop:5, paddingLeft:12, color:'gray'}}>{moment(item.createdAt.toDate()).fromNow()}</Text>



                          

                        </View>
                        <View style={{flex:1,justifyContent:'center',alignItems:'center',alignContent:'center'}}>
                            <Button size="large" onPress={()=>this.setState({showMap:!this.state.showMap,locations:item.coordinates})}  iconleft icon={pin} appearance='ghost' ></Button>
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
  map: {
    ...StyleSheet.absoluteFillObject,
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
