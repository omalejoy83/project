/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import {
  ApplicationProvider,
  Layout,
  Text,
  Avatar,
  Input,
  Button,
  IconRegistry,
  Icon,
} from '@ui-kitten/components';
import {mapping, light as lightTheme} from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Alert,
  TouchableNativeFeedback,
  Image,
  ViewPagerAndroid,
  TouchableNativeFeedbackBase,
  Dimensions,
  FlatList,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import firebase from 'react-native-firebase';
import {Divider} from 'react-native-elements';
import {GiftedChat} from 'react-native-gifted-chat';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ViewPager from '@react-native-community/viewpager';
import {bold} from 'ansi-colors';
import {
  Container,
  content,
  Thumbnail,
  Header,
  Left,
  Right,
  Body,
  Title,
  Footer,
  FooterTab,
} from 'native-base';
//import EvaButtons from './component/iconComponent/evaButtons'

const {width} = Dimensions.get('window');
const firestore = firebase.firestore();
const auth = firebase.auth();
const FacebookIcon = style => <Icon name="facebook" fill="white" {...style} />;

const GoogleIcon = style => <Icon name="google" fill="white" {...style} />;

const PersonIcon = style => <Icon name="person" {...style} fill="white" />;

const MessageIcon = style => (
  <Icon name="message-circle" fill="blue" {...style} />
);

const PinIcon = style => <Icon name="pin" fill="blue" {...style} />;
const MoreIcon = style => <Icon name="more-vertical" fill="white" {...style} />;
const BulbIcon = style => <Icon name="sun-outline" fill="white" {...style} />;
const HeartIcon = style => <Icon name="heart-outline" fill="gray" {...style} />;
const ClockIcon = style => <Icon name="clock-outline" fill="blue" {...style} />;
const SearchIcon = style => <Icon name="search" fill="gray" {...style} />;
const House = style => <Icon name="home-outline" fill="gray" {...style} />;
const Book = style => <Icon name="book-outline" fill="gray" {...style} />;
const SettingsIcon = style => (
  <Icon name="settings-2-outline" fill="gray" {...style} />
);
const Favourite = style => (
  <Icon name="plus-circle-outline" fill="blue" {...style} />
);
const MoreIcon2 = style => <Icon name="menu-outline" fill="gray" {...style} />;
const logout = style => <Icon name="power" fill="red" {...style} />;

class Home extends React.Component {
  constructor(Props) {
    super(Props);
    this.state = {
      images: [
        require('../../assets/img/bible5.jpg'),
        require('../../assets/img/bible2.jpg'),
        require('../../assets/img/bible4.jpg'),
        require('../../assets/img/bible7.jpg'),
      ],
    };
  }

  render() {
    return (
      <Layout style={{flex: 1}}>
        <Header style={{backgroundColor: '#123456'}}>
          <Left>
            <Button
              icon={PersonIcon}
              style={{
                borderRadius: 300,
                height: 0,
                width: 0,
                backgroundColor: 'maroon',
                borderColor: 'maroon',
              }}
            />
          </Left>
          <Body>
            <Title>KJV Bible</Title>
          </Body>
          <Right>
            <Button
              icon={BulbIcon}
              appearance="ghost"
              size="medium"
              style={{height: 0, width: 0}}
            />
          </Right>
        </Header>

        <SliderBox
          images={this.state.images}
          sliderBoxHeight={200}
          inactiveDotColor="#90A4AE"
          dotColor="#FFEE58"
          autoplay
          circleLoop
        />
        <View>
          <Text
            category="h6"
            style={{
              textDecorationLine: 'underline',
              marginLeft: 12,
              marginTop: 10,
            }}>
            Verse of the Day
          </Text>
          <Text style={{marginHorizontal: 12, marginTop: 2, color: 'gray'}}>
            There be many that say, Who will shew us any good?Lord, lift thou up
            the light of thy countenance upon us.
          </Text>
          <Text style={{marginHorizontal: 12, color: 'gray'}}>Psalms 4:6</Text>
          <Button
            textStyle={{fontSize: 17, fontWeight: 'bold'}}
            style={{
              border: 30,
              marginHorizontal: 12,
              marginTop: 10,
              backgroundColor: '#123456',
            }}>
            Share Verse of the Day
          </Button>
        </View>
        <View>
          <Text
            category="h6"
            style={{
              textDecorationLine: 'underline',
              marginLeft: 12,
              marginTop: 10,
            }}>
            Book of the Day
          </Text>
          <Text style={{marginHorizontal: 12, marginTop: 2, color: 'gray'}}>
            1 Corinthians
          </Text>

          <Button
            textStyle={{fontSize: 17, fontWeight: 'bold'}}
            style={{
              border: 30,
              marginHorizontal: 12,
              marginTop: 10,
              backgroundColor: '#123456',
            }}>
            Share Book of the Day
          </Button>
        </View>
        <Divider style={{marginTop: 12}} />
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Button
              size="large"
              style={{marginLeft: 20}}
              icon={House}
              appearance="ghost"
            />
            <Text style={{marginLeft: 35}}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Button
              size="large"
              style={{marginLeft: 20}}
              icon={Book}
              onPress={() => this.props.navigation.navigate('TabNav')}
              appearance="ghost"
            />
            <Text style={{marginLeft: 40}}>Bible</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Button
              size="large"
              style={{marginLeft: 20}}
              icon={HeartIcon}
              appearance="ghost"
              onPress={() => this.props.navigation.navigate('PracticeScreen')}
            />
            <Text style={{marginLeft: 30}}>favourite</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Button
              onPress={() => this.props.navigation.navigate('MoreScreen')}
              size="large"
              style={{marginLeft: 20}}
              icon={SettingsIcon}
              appearance="ghost"
            />
            <Text style={{marginLeft: 40}}>Settings</Text>
          </TouchableOpacity>
        </View>
      </Layout>
    );
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0)',
    paddingHorizontal: 15,
    flexDirection: 'row',
  },

  button: {
    margin: 10,
    color: 'white',
  },

  avatar: {
    margin: 10,
    flexDirection: 'row',
  },
  box: {
    width: 100,
  },
  image: {
    width: 200,
    height: 100,
  },
  text1: {
    flex: 4,
    color: 'white',
    marginTop: 40,
  },
  text2: {
    flex: 3,
    color: 'white',
    marginTop: 40,
  },
  text3: {
    flex: 1,
    color: 'white',
    marginTop: 40,
  },
  image2: {
    width: 400,
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 30,
  },
  image3: {
    width: 200,
    height: 150,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    marginTop: 30,
  },
});

export default Home;
