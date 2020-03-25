/**
 * @format
 */
//import 'react-native-gesture-handler';
import {AppRegistry, Text} from 'react-native';
import App from './reportConfig';
//import App from './app/home';
import React from 'react'
import {name as appName} from './app.json';
import { ApplicationProvider, Layout, IconRegistry } from '@ui-kitten/components';
import { mapping, light as lightTheme,dark } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import {Root} from 'native-base';


AppRegistry.registerComponent(appName, () =>Index );

const Index = ()=>(
     <ApplicationProvider mapping={mapping} theme={lightTheme}>
         <IconRegistry icons={EvaIconsPack} />
         <Root>
            <App/>
         </Root>
         
     </ApplicationProvider>
)
