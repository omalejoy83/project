import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import{createDrawerNavigator} from 'react-navigation-drawer'
import Settings from './app/screens/settings'
import Channels from './app/screens/channels'
import ScreenA from './app/screens/screen_1'
import ScreenB from './app/screens/screen_2'
import ScreenC from './app/screens/screen_3'
import ScreenD from './app/screens/screen_4'
import Profile from './app/screens/profile'
import Home from './app/screens/homepage'
import Reporter from './app/screens/user_signup'
import Policelogin from './app/screens/police_login'
import { AsyncStorage } from 'react-native';

import SettingsAdmin from './app/admin/settings'
import ChannelsAdmin from './app/admin/channels'
import ProfileAdmin from './app/admin/profile'
import HomeAdmin from './app/admin/homepage'
import NewScreen from './app/admin/newscreen'
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

const MainNav = createDrawerNavigator({
    Home:Home,
    Profile:Profile,
    Settings:Settings
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


const AdminNav = createDrawerNavigator({
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
const persistenceKey2 = 'smakjhgrgggthhgggjmmmoyggkdkdg2yyy2233333kjhg3333'
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