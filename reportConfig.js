import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import{createDrawerNavigator} from 'react-navigation-drawer'
import Settings from './app/report/settings'
import Channels from './app/report/channels'
import ScreenA from './app/report/screen_1'
import ScreenB from './app/report/screen_2'
import ScreenC from './app/report/screen_3'
import ScreenD from './app/report/screen_4'
import Profile from './app/report/profile'
import Home from './app/report/homepage'
import Reporter from './app/report/user_signup'
import Policelogin from './app/report/police_login'
import { AsyncStorage } from 'react-native';

import SettingsAdmin from './app/reportAdmin/settings'
import ChannelsAdmin from './app/reportAdmin/channels'
import ProfileAdmin from './app/reportAdmin/profile'
import HomeAdmin from './app/reportAdmin/homepage'
import NewScreen from './app/reportAdmin/newscreen'
console.disableYellowBox =true;

const Auth = createStackNavigator({
    // Reporter:Reporter,
    // Policelogin:Policelogin,
    // Home:Home,
    ScreenA:ScreenA,
    ScreenB: ScreenB,
    ScreenC:ScreenC,
    ScreenD:ScreenD,
    
},{
    headerMode:'none',
    
})

const MainNav = createStackNavigator({
    Home:Home,
    Profile:Profile,
    Settings:Settings,  
    Channels:Channels

},{
    headerMode:'none',
    drawerType:"slide",
   contentComponent:(props)=><Channels {...props}/>
    
})


const AdminAction = createStackNavigator({
    NewScreen:NewScreen,
    HomeAdmin:HomeAdmin, 
},{
    headerMode:'none',
    
})


const AdminNav = createStackNavigator({
    Index:AdminAction,
    ProfileAdmin:ProfileAdmin,
    SettingsAdmin:SettingsAdmin
},{
    headerMode:'none',
    drawerType:"slide",
   contentComponent:(props)=><ChannelsAdmin {...props}/>
    
})
const Switch = createSwitchNavigator({
    Auth:Auth,
    MainNav:MainNav,
    Admin:AdminNav,

},{
    headerMode:'none',
    
})
const persistenceKey2 = 'smakjhgrgggthhgggjmmmoyggkduuggggkdg2hhhyyy2233333kjhg3333'
const persistNavigationState = async(navState)=>{
    console.log(navState)

    try{
        await AsyncStorage.setItem(persistenceKey2, JSON.stringify(navState))
    }catch(err){

    }
}

const loadNavigationState = async ()=>{
    const jsonString = await AsyncStorage.getItem(persistenceKey2)
    return JSON.parse(jsonString)
}

const AppContainer = createAppContainer(Switch)
function getPersistenceFunctions(){
    return{
        persistNavigationState,
        loadNavigationState,
    }
}

class App extends React.Component{
        render(){
            return(
                <AppContainer
                {...getPersistenceFunctions()}
                />
            )
        }
}
export default App;