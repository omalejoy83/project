import { ApplicationProvider, Layout, Text, Avatar, Button, IconRegistry,Icon} from '@ui-kitten/components';
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
  ImageBackground,Modal, ActivityIndicator,
  TouchableNativeFeedback,Alert,Platform,PermissionsAndroid,
  Image, ViewPagerAndroid, TouchableNativeFeedbackBase,AsyncStorage
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
  
  
  
  
  


 class Channels extends React.Component{
    constructor(Props){
        super(Props)
        this.state={
          photoLen:0,
          videoLen:0,
          modalStatus:false,
          message:""
        }
      }

      Indicator(){
        return(
          <Modal visible={this.state.modalStatus} transparent>
            <View style={{flex:1,justifyContent:'center',alignContent:'center', backgroundColor:"transparent"}}>
              <ActivityIndicator size='large' color='#0000ff'/>
              <Text style={{textAlign:'center', color:'white'}}>please wait</Text>
            </View>
          </Modal>
        )
      }

      componentDidMount(){
        storage.getItem('photos').then((val)=>{
          if(val){
            let item = JSON.parse(val)
            this.setState({
              photoLen:item.length,
              modalStatus:false
            })
          }else{
            this.setState({modalStatus:false})
          }
        })

        storage.getItem('videos').then((val)=>{
          if(val){
            let item = JSON.parse(val)
            this.setState({
              videoLen:item.length
            })
          }
        })

      }
    async  photo(){
        let permission = await this.permission();

        ImagePicker.openCamera({
          mediaType: 'photo',
          compressImageQuality:0.4
        }).then(res => {
          if(!permission) return alert("Please grant permission")
          storage.getItem('photos').then((value)=>{
               if(value){
                 let photoArray= JSON.parse(value)
                 photoArray.push(res.path);
                 let storeItem = JSON.stringify(photoArray);
                 storage.setItem('photos',storeItem)
                 this.setState({photoLen:photoArray.length})
               }else{
                 let photoArray = [];
                 photoArray.push(res.path);
                 let storeItem= JSON.stringify(photoArray)
                 storage.setItem('photos',storeItem)
                 this.setState({
                   photoLen:photoArray.length
                 })

               }
          }).catch((error)=>{
              alert(error.message)
          })
        });
      }
    async  video(){
          let permission = await this.permission();
          if(!permission) return alert("Please grant permission")
        ImagePicker.openCamera({
          mediaType: 'video',
        }).then(res => {
          storage.getItem('videos').then((value)=>{
            if(value){
              let videoArray= JSON.parse(value)
              videoArray.push(res.path);
              let storeItem = JSON.stringify(videoArray);
              storage.setItem('videos',storeItem)
              this.setState({videoLen:videoArray.length})
            }else{
              let videoArray = [];
              videoArray.push(res.path);
              let storeItem= JSON.stringify(videoArray)
              storage.setItem('videos',storeItem)
              this.setState({
                videoLen:videoArray.length
              })

            }
       })
        }).catch((error)=>{})
      }
      clearStorage(){
        storage.multiRemove(['photos','videos']).then(()=>{
          this.setState({
            photoLen:0,
            videoLen:0
          })
        })
      }
      confirm(){ 
        Alert.alert('','Are you sure you want to clear progress?',[
          {onPress:()=>this.clearStorage(),text:"Yes"},
          {onPress:()=>"",text:"Cancel"}

        ])

      }

     async permission(){
          if (Platform.OS === 'android') {
            try {
              const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                  title: 'Permissions for write access',
                  message: 'Give permission to your storage to write a file',
                  buttonPositive: 'ok',
                },
              );
              if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                      const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.CAMERA,
                        {
                          title: 'Permissions for write access',
                          message: 'Give permission to your storage to write a file',
                          buttonPositive: 'ok',
                        },
                      );
                      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                            return true;
                          } else {
                            return false;
                          }
                        } else {
                          
                          return false;
                        }


            } catch (err) {
              return false;
            }
          }
          
      }
      
      async  audio(){
        let permission = await this.permission();
        if(permission){
          
        }

      }


    getLocation(){
       
       return new Promise((resolve,reject)=>{
          Geolocation.getCurrentPosition(
              (position) => {
                const {longitude,latitude} = position.coords;
                resolve({longitude,latitude})
              },
              (error) => {
                  // See error code charts below.
                  reject(error)
              },
              { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
          );
       })
       
     
    }

     async sendReport(){
          
          let message = this.state.message.trim();
          if(!message)return alert('message cannot be empty!');
          this.setState({modalStatus:true})
          let location = await this.getLocation();
          if(location instanceof Error) return alert("unable to get location");

          let media = [];
          let photos = await storage.getItem("photos");
          let videos = await storage.getItem("videos");
          if(photos){
            let data = JSON.parse(photos);
            data.forEach((val)=>{
               media.push({type:"photo",url:val})
            })
          }
          if(videos){
            let data = JSON.parse(videos);
            data.forEach((val)=>{
               media.push({type:"video",url:val})
            })
          }


          let uploaded = [];
          if(media.length > 0){
            for(let item of media){
              try{
                let _item = new Date().getTime();
                let uploading = await firebaseStorage.ref("/report/medias/").child("Img"+_item).putFile(item.url);
                if(item.type == "photo"){
                  uploaded.push({url:uploading.downloadURL,type:"photo"})
                }else{
                  uploaded.push({url:uploading.downloadURL,type:"video"})
                }
              }catch(e){

              }
            }
          }

            let report = {
              coordinates:location,
              email:auth().currentUser.email,
              name: auth().currentUser.displayName,
              message: this.state.message,
              files:uploaded,
              createdAt : firebase.firestore.FieldValue.serverTimestamp(),
            }


          await  firestore.collection("Reports").add(report);
          this.setState({modalStatus:false,message:""},()=>{
             this.clearStorage();
             alert("report sent!!!!");
             this.props.navigation.goBack();
          })

          
      }
      
      render(){
          return(
            <Layout style={{flex:1}}>
              {this.Indicator()}
               <View style={{flex:1}}>
               <Input
                   placeholder='Please enter report....'
                   returnKeyType='next'
                   autoCapitalize='none'
                   onChangeText={(text)=>this.setState({
                     message:text
                   })}
                   multiline={true}
                   
                   style={{flex:1,textAlignVertical:'top',flexWrap:'wrap',fontSize:25,paddingTop:30}}
                   
                   
                  
                 />
               </View>
               <Footer style={{backgroundColor:"white"}}>
                 <FooterTab style={{backgroundColor:'white'}}>
          <Button size="medium" onPress={()=>this.photo()} icon={camera}  appearance="ghost" textStyle={{color:'red'}} >{this.state.photoLen+""}</Button>
                     <Button size="medium" onPress={()=>this.video()} icon={video} appearance="ghost" textStyle={{color:'red'}}>{this.state.videoLen+""}</Button>
                     <Button size="medium" onPress={()=>this.audio()}icon={audio} appearance="ghost"></Button>
                     <Button size="medium" onPress={()=>this.confirm()} icon={trash} appearance="ghost" ></Button>
                     <Button onPress={()=>this.sendReport()} style={{backgroundColor:'black', borderColor:'black'}}>Send</Button>
                     
                     

                 </FooterTab>
               </Footer>
            </Layout>
          )
      }
 }

 export default Channels;