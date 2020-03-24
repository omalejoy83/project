/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends React.Component  {
    constructor(props){
      super(props)
      this.state={
        myNumber:0
        
     }  
    }
    increase(){
        this.setState({
          myNumber: this.state.myNumber + 1
        })
           
       }
       decrease(){
         this.myNumber = this.state.myNumber
         if(this.myNumber == 0){
           alert('this application deals with positive numbers only!');
  
         }
         else{
          this.setState({
            myNumber:this.state.myNumber - 1
          })
         }
       }

    

  render(){
    return (
      <View style ={{flex:1,justifyContent:'center', alignContent:'center', alignItems:'center', backgroundColor:'black'}}>
        <Text style ={{fontSize:40,fontWeight:'bold', color:'papayawhip'}}> {this.state.myNumber}</Text>
        <View style ={{flexDirection:'row', padding:150}}>
        <TouchableOpacity onPress={()=>this.increase()} style={{backgroundColor:'cadetblue', width:40,marginRight:20,borderRadius:20, alignItems:'center'}}><Text style={{fontSize:40, color:'blueviolet' }}>+</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>this.decrease()} style={{borderRadius:20, width:40, backgroundColor:'blueviolet', alignItems:'center'}}><Text style={{fontSize:45, color:'cadetblue'}}>-</Text></TouchableOpacity>
        </View>
        
      </View>
      
    );
  }
  
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
