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






class App extends React.Component{
        constructor(Props){
          super(Props)
          this.state={
            selectedIndex:0
          }
        }
        slider(pos){
          if(this.state.selectedIndex ==1){
            this.setState({
              selectedIndex:this.state.selectedIndex -1
            })
          }else{
            this.setState({
              selectedIndex:this.state.selectedIndex + 1
            })
          }
        }
      render(){
        return(
          <ViewPager style={{flex: 1}} 
          initialPage={this.setState.selectedIndex}
         onPageSelected={(e)=>this.slider(e.nativeEvent.position)}
         >
             <View style={{flex: 1}} key="1">
             <ScrollView showsVerticalScrollIndicator={false}>
             <StatusBar translucent={true} backgroundColor="transparent"/>
             <ImageBackground
               source={require("../assets/img/image25.jpeg")} 
               
               style={{width: "100%", height: "100%"}}
             >
               <View style={{backgroundColor: "rgba(0,0,0,0.7)", flex:1, justifyContent: "center", paddingHorizontal: 10}}>
               <Text category='h1' appearance='alternative' style={{marginTop:70, paddingLeft:135}}>Hello</Text>
                <Text  appearance='alternative' style={{marginTop:15, paddingLeft:100, marginBottom:70}}>Sign in to your account</Text>
                 <Input
                   placeholder='Enter your User Name'
                   size="small"
                   style={{marginBottom: 20,borderRadius: 10, backgroundColor: "white"}}
                   icon={PersonIcon}
                 />
     
                 <Input
                   placeholder='Enter your password'
                   size="small"
                   style={{marginBottom: 10,
                     lineHeight: 1.5, 
                     borderRadius: 10, 
                     fontWeight:"bold",
                     backgroundColor:'white'}}
                    icon={PersonIcon}
                    
                 />
                 <Text style={{paddingLeft:173, marginBottom:20, marginTop:7, color:'white'}}>Forgot your password?</Text>
                 
                 </View>   
     
                 <View style={{backgroundColor: "rgba(0,0,0,0.7)", flex:1, justifyContent: "center", paddingHorizontal: 10}}>
                 <Button
                   style={{marginBottom: 15,
                     lineHeight: 1.5,
                     textAlign:'center',
                     fontWeight:'bold',
                     borderRadius: 10,}}
                     size="giant" appearance='filled'>
                       SIGN IN
                 </Button>   
                 <Text style={{marginTop:20, textAlign:'center'}}>Or Sign in using Social Media</Text>
               </View>
               <View style={{backgroundColor: "rgba(0,0,0,0.7)", flex:1, flexDirection:'row',justifyContent: "center"}}>
                    <Button icon={GoogleIcon} appearance='ghost' style={{paddingRight:80,fontWeight:'bold', marginTop:30}}></Button>
                    <Button icon={FacebookIcon} appearance='ghost' style={{paddingRight:90,fontWeight:'bold', marginTop:30}}></Button>
                    <Button icon={MessageIcon} appearance='ghost' size='large' style={{marginTop:30, fontWeight:'bold'}}></Button>
                    </View>
                    <View style={{backgroundColor: "rgba(0,0,0,0.7)", flex:1,justifyContent: "center"}}>
                    <Text style={{textAlign:'center',marginTop:20, marginBottom:30, color:'white'}}>Don't have an account? Sign Up</Text>

                 </View>         
             </ImageBackground>
             </ScrollView>
           </View> 
     
           {/* second viewpager */}
           <View style={{flex: 1}} key="2">
             <ScrollView vertical showsVerticalScrollIndicator={false}>
             <ImageBackground
               source={require("../assets/img/image24.jpeg")} 
               
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
                   large source={require("../assets/img/smart.jpg")}
                   style={{marginTop:20}}
                 />
                 <Text 
                   category="h6" 
                   appearance="alternative" 
                   style={{fontWeight: "bold"
                   }}>Joy Smart
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
                     source={require("../assets/img/salvic.jpg")}
                   />
                   <Text style={{fontWeight: "bold", textAlign:'center'}}>salvic</Text>
               </View>
               <View style={style.box}>
                     <Avatar
                       size="giant"
                       resizeMethod="resize"
                       style={style.avatar}
                       source={require("../assets/img/elpee.jpg")}
                     />
                     <Text style={{fontWeight: "bold", textAlign:'center'}}>El-Pee</Text>
     
               </View>
               <View style={style.box}>
                   <Avatar
                     size="giant"
                     resizeMethod="resize"
                     style={style.avatar}
                     source={require("../assets/img/mulla.jpg")}
                   />
                   <Text style={{fontWeight: "bold", textAlign:'center'}}>Mulla</Text>
     
               </View>
               <View style={style.box}>
                   <Avatar
                     size="giant"
                     resizeMethod="resize"
                     style={style.avatar}
                     source={require("../assets/img/smarty.jpg")}
                   />
                   <Text style={{fontWeight: "bold", textAlign:'center'}}>Hellen</Text>
     
               </View>
               <View style={style.box}>
                   <Avatar
                     size="giant"
                     resizeMethod="resize"
                     style={style.avatar}
                     source={require("../assets/img/madu.jpg")}
                   />
                   <Text style={{fontWeight: "bold" ,textAlign:'center'}}>Madu</Text>
     
               </View>
               <View style={style.box}>
                   <Avatar
                     size="giant"
                     resizeMethod="resize"
                     style={style.avatar}
                     source={require("../assets/img/madu.jpg")}
                   />
                   <Text style={{fontWeight: "bold", textAlign:'center'}}>Dawn</Text>
     
               </View>
             </View>
              
             </ScrollView>
             <Text style={{paddingHorizontal:15, marginTop:20}}>Shots</Text>
             <View style={{flex:1, flexDirection:'row', backgroundColour:'white'}}>
                    <View style={{flex:1}}>
                    <Image
                   source={require("../assets/img/image18.jpeg")} 
                   style={style.image}
                    resizeMethod="resize"
                      />
                    </View>
                    <View style={{flex:1}}>
                    <Image
                   source={require("../assets/img/image30.jpg")} 
                   style={style.image}
                    resizeMethod="resize"
                      />
                    </View>
                    <View style={{flex:1}}>
                    <Image
                   source={require("../assets/img/image11.jpeg")} 
                   style={style.image}
                    resizeMethod="resize"
                      />
                    </View>
               
                
             </View>

             <View style={{flex:1, flexDirection:'row', backgroundColour:'white'}}>
                    <View style={{flex:1}}>
                    <Image
                   source={require("../assets/img/image20.jpeg")} 
                   style={style.image}
                    resizeMethod="resize"
                      />
                    </View>
                    <View style={{flex:1}}>
                    <Image
                   source={require("../assets/img/elpee.jpg")} 
                   style={style.image}
                    resizeMethod="resize"
                      />
                    </View>
                    <View style={{flex:1}}>
                    <Image
                   source={require("../assets/img/image14.jpeg")} 
                   style={style.image}
                    resizeMethod="resize"
                      />
                    </View>
             </View>
             <View style={{flex:1, flexDirection:'row', backgroundColour:'white'}}>
                    <View style={{flex:1}}>
                    <Image
                   source={require("../assets/img/mulla.jpg")} 
                   style={style.image}
                    resizeMethod="resize"
                      />
                    </View>
                    <View style={{flex:1}}>
                    <Image
                   source={require("../assets/img/image16.jpeg")} 
                   style={style.image}
                    resizeMethod="resize"
                      />
                    </View>
                    <View style={{flex:1}}>
                    <Image
                   source={require("../assets/img/image24.jpeg")} 
                   style={style.image}
                    resizeMethod="resize"
                      />
                    </View>
               
                
             </View>
             <View style={{flex:1, flexDirection:'row', backgroundColour:'white'}}>
                    <View style={{flex:1}}>
                    <Image
                   source={require("../assets/img/smart.jpg")} 
                   style={style.image}
                    resizeMethod="resize"
                      />
                    </View>
                    <View style={{flex:1}}>
                    <Image
                   source={require("../assets/img/elpe.jpg")} 
                   style={style.image}
                    resizeMethod="resize"
                      />
                    </View>
                    <View style={{flex:1}}>
                    <Image
                   source={require("../assets/img/image25.jpeg")} 
                   style={style.image}
                    resizeMethod="resize"
                      />
                    </View>
               
                
             </View>
             <View style={{flex:1, flexDirection:'row', backgroundColour:'white'}}>
                    <View style={{flex:1}}>
                    <Image
                   source={require("../assets/img/image24.jpeg")} 
                   style={style.image}
                    resizeMethod="resize"
                      />
                    </View>
                    <View style={{flex:1}}>
                    <Image
                   source={require("../assets/img/image26.jpeg")} 
                   style={style.image}
                    resizeMethod="resize"
                      />
                    </View>
                    <View style={{flex:1}}>
                    <Image
                   source={require("../assets/img/image28.jpeg")} 
                   style={style.image}
                    resizeMethod="resize"
                      />
                    </View>
               
                
             </View>

                   
                   </ScrollView>
           </View> 
           <View key='3' style={{paddingHorizontal:15, flex:1}}>
             <ScrollView showsVerticalScrollIndicator={false}>
                   <StatusBar translucent={true} backgroundColor="transparent"/>
                   <Text style={{textAlign:'center', marginTop:15}}>Article list 2</Text>
             <ImageBackground
               source={require("../assets/img/eatinggirl.jpeg")} 
               
               style={style.image2}
             >
               <View style={{backgroundColor:'rgba(0,0, 0, 0.5)', flex:1}}>
               <Text category='h4'style={{marginTop:20, color:'white',paddingLeft:15}}>How To Eat</Text>
               <Text category='h4'style={{color:'white',paddingLeft:15}}>Healthy</Text>
               </View>
               <View style={{backgroundColor:'rgba(0,0, 0, 0.5)', flex:1,  flexDirection:'row'}}>
                <Button icon={BulbIcon} appearance='ghost' style={{width:0,height:0,paddingLeft:15, marginBottom:150}}></Button>
                <Text style={{marginTop:7, color:'white'}}>10 Useful Tips</Text>
                
                </View>
             </ImageBackground>
             <View style={{flex:1, flexDirection:'row'}}>
             <Avatar
                     size="medium"
                     style={style.avatar}
                     resizeMethod="resize"
                     source={require("../assets/img/salvic.jpg")}
                   />
                   <Text style={{marginTop:15,paddingLeft:10}}>Vhee Salvic</Text>
                   <Button icon={MessageIcon} appearance='ghost' style={{width:0,height:0,paddingLeft:25}}></Button>
                   <Text style={{marginTop:10,paddingLeft:10}}>3</Text>
                   <Button icon={HeartIcon} appearance='ghost' style={{width:0,height:0}}></Button>
                   <Text style={{marginTop:10,paddingLeft:5}}>320</Text>
                   
             </View>
             
            
             <ImageBackground
               source={require("../assets/img/girl.jpeg")} 
               
               style={style.image2}
             >
               <View style={{backgroundColor:'rgba(0,0, 0, 0.5)', flex:2}}>
               <Text category='h4'style={{marginTop:20, color:'white',paddingLeft:15}}>Why Is The</Text>
               <Text category='h4'style={{color:'white',paddingLeft:15}}>Workout</Text>
               <Text category='h4'style={{color:'white',paddingLeft:15}}>Important?</Text>
               </View>
               <View style={{backgroundColor:'rgba(0,0, 0, 0.5)', flex:1,  flexDirection:'row'}}>
                <Button icon={BulbIcon} appearance='ghost' style={{width:0,height:0,paddingLeft:15, marginBottom:150}}></Button>
                <Text style={{marginTop:7, color:'white'}}>10 Useful Tips</Text>
                
                </View>
             </ImageBackground>
             <View style={{flex:1, flexDirection:'row'}}>
             <Avatar
                     size="medium"
                     style={style.avatar}
                     resizeMethod="resize"
                     source={require("../assets/img/smart.jpg")}
                   />
                   <Text style={{marginTop:15,paddingLeft:10}}>Joy Smart</Text>
                   <Button icon={MessageIcon} appearance='ghost' style={{width:0,height:0,paddingLeft:25}}></Button>
                   <Text style={{marginTop:10,paddingLeft:10}}>10</Text>
                   <Button icon={HeartIcon} appearance='ghost' style={{width:0,height:0}}></Button>
                   <Text style={{marginTop:10,paddingLeft:5}}>320</Text>
                   
             </View>
             <ImageBackground
               source={require("../assets/img/girls.jpeg")} 
               
               style={style.image2}
             >
               <View style={{backgroundColor:'rgba(0,0, 0, 0.5)', flex:2}}>
               <Text category='h4'style={{marginTop:20, color:'white',paddingLeft:15}}>The 5 Rules</Text>
               <Text category='h4'style={{color:'white',paddingLeft:15}}>Of Morning</Text>
               <Text category='h4'style={{color:'white',paddingLeft:15}}>Workouts</Text>
               </View>
               <View style={{backgroundColor:'rgba(0,0, 0, 0.5)', flex:1,  flexDirection:'row'}}>
                <Button icon={BulbIcon} appearance='ghost' style={{width:0,height:0,paddingLeft:15, marginBottom:150}}></Button>
                <Text style={{marginTop:7, color:'white'}}>5 Useful Tips</Text>
                
                </View>
             </ImageBackground>
             <View style={{flex:1, flexDirection:'row'}}>
             <Avatar
                     size="medium"
                     style={style.avatar}
                     resizeMethod="resize"
                     source={require("../assets/img/madu.jpg")}
                   />
                   <Text style={{marginTop:15,paddingLeft:10}}>Dickson Madu</Text>
                   <Button icon={MessageIcon} appearance='ghost' style={{width:0,height:0,paddingLeft:25}}></Button>
                   <Text style={{marginTop:10,paddingLeft:10}}>3</Text>
                   <Button icon={HeartIcon} appearance='ghost' style={{width:0,height:0}}></Button>
                   <Text style={{marginTop:10,paddingLeft:5}}>320</Text>
                   
             </View>
             <ImageBackground
               source={require("../assets/img/food.jpeg")} 
               
               style={style.image2}
             >
               <View style={{backgroundColor:'rgba(0,0, 0, 0.5)', flex:1}}>
               <Text category='h4'style={{marginTop:20, color:'white',paddingLeft:15}}>Light & Easy</Text>
               <Text category='h4'style={{color:'white',paddingLeft:15}}>Breakfasts</Text>
               </View>
               <View style={{backgroundColor:'rgba(0,0, 0, 0.5)', flex:1,  flexDirection:'row'}}>
                <Button icon={BulbIcon} appearance='ghost' style={{width:0,height:0,paddingLeft:15, marginBottom:150}}></Button>
                <Text style={{marginTop:7, color:'white'}}>5 Useful Tips</Text>
                
                </View>
             </ImageBackground>
             <View style={{flex:1, flexDirection:'row'}}>
             <Avatar
                     size="medium"
                     style={style.avatar}
                     resizeMethod="resize"
                     source={require("../assets/img/elpee.jpg")}
                   />
                   <Text style={{marginTop:15,paddingLeft:10}}>El-pee</Text>
                   <Button icon={MessageIcon} appearance='ghost' style={{width:0,height:0,paddingLeft:25}}></Button>
                   <Text style={{marginTop:10,paddingLeft:10}}>3</Text>
                   <Button icon={HeartIcon} appearance='ghost' style={{width:0,height:0}}></Button>
                   <Text style={{marginTop:10,paddingLeft:5}}>320</Text>
                   
             </View>
             </ScrollView>
     
                   </View>
                   <View key='4' style={{paddingHorizontal:15, flex:1}}>
                     <ScrollView showsVerticalScrollIndicator={false}>
                     <StatusBar translucent={true} backgroundColor="transparent"/>
                     <Text category="h6" style={{textAlign:'center', marginTop:20}}>Products List</Text>
                       <View style={{flex:1, flexDirection:'row'}}>
                         <View style={{flex:1}}>
                           <Image
                           source={require("../assets/img/whitechair.jpeg")} 
                           style={style.image3}
                            resizeMethod="resize"
                           />
                         </View>
                         <View style={{flex:1}}>
                         <Image
                           source={require("../assets/img/pinkchair.jpeg")} 
                           style={style.image3}
                            resizeMethod="resize"
                           />
                         </View>
                       </View>
                       <View style={{flex:1, flexDirection:'row'}}>
                         <View style={{flex:1}}>
                           <Text style={{marginTop:20, paddingLeft:20}}>White chair</Text>
                           <Text style={{marginTop:1, paddingLeft:20, color:'gray'}}>funiture</Text>
                           <Text style={{marginTop:20, paddingLeft:20}}>150 $</Text>
                         </View>
                         <View style={{flex:1}}>
                         <Text style={{marginTop:20, paddingLeft:20}}>Pink chair</Text>
                         <Text style={{marginTop:1, paddingLeft:20, color:'gray'}}>furniture</Text>
                         <Text style={{marginTop:20, paddingLeft:20}}>130 $</Text>
                         
                         </View>
                       </View>
                       <View style={{flex:1, flexDirection:'row'}}>
                         <View style={{flex:1}}>
                           <Image
                           source={require("../assets/img/blacklamp1.jpeg")} 
                           style={style.image3}
                            resizeMethod="resize"
                           />
                         </View>
                         <View style={{flex:1}}>
                         <Image
                           source={require("../assets/img/yellowlamp.jpeg")} 
                           style={style.image3}
                            resizeMethod="resize"
                           />
                         </View>
                       </View>
                       <View style={{flex:1, flexDirection:'row'}}>
                         <View style={{flex:1}}>
                           <Text style={{marginTop:20, paddingLeft:20}}>black lamp</Text>
                           <Text style={{marginTop:1, paddingLeft:20, color:'gray'}}>Lighting</Text>
                           <Text style={{marginTop:20, paddingLeft:20}}>80 $</Text>
                         </View>
                         <View style={{flex:1}}>
                         <Text style={{marginTop:20, paddingLeft:20}}>yellow lamp</Text>
                         <Text style={{marginTop:1, paddingLeft:20, color:'gray'}}>Lighting</Text>
                         <Text style={{marginTop:20, paddingLeft:20}}>100 $</Text>
                         
                         </View>
                         
                       </View>

                       <View style={{flex:1, flexDirection:'row'}}>
                         <View style={{flex:1}}>
                           <Image
                           source={require("../assets/img/image24.jpeg")} 
                           style={style.image3}
                            resizeMethod="resize"
                           />
                         </View>
                         <View style={{flex:1}}>
                         <Image
                           source={require("../assets/img/mug.jpeg")} 
                           style={style.image3}
                            resizeMethod="resize"
                           />
                         </View>
                       </View>
                       <View style={{flex:1, flexDirection:'row'}}>
                         <View style={{flex:1}}>
                           <Text style={{marginTop:20, paddingLeft:20}}>plate</Text>
                           <Text style={{marginTop:1, paddingLeft:20, color:'gray'}}>cookware</Text>
                           <Text style={{marginTop:20, paddingLeft:20}}>10 $</Text>
                         </View>
                         <View style={{flex:1}}>
                         <Text style={{marginTop:20, paddingLeft:20}}>Mug</Text>
                         <Text style={{marginTop:1, paddingLeft:20, color:'gray'}}>cookware</Text>
                         <Text style={{marginTop:20, paddingLeft:20}}>10 $</Text>
                         
                         </View>
                       </View>
                     </ScrollView>
                   </View>
         </ViewPager>
           
              
              
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




export default App;
