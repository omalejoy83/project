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
  TouchableNativeFeedback,
  Image,
  ViewPagerAndroid,
  TouchableNativeFeedbackBase,
} from 'react-native';
import firebase from 'react-native-firebase';
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
} from 'native-base';
//import EvaButtons from './component/iconComponent/evaButtons'

const firestore = firebase.firestore();
const auth = firebase.auth();
const FacebookIcon = style => <Icon name="facebook" fill="white" {...style} />;

const GoogleIcon = style => <Icon name="google" fill="white" {...style} />;

const PersonIcon = style => <Icon name="person-add" {...style} fill="gray" />;

const MessageIcon = style => (
  <Icon name="message-circle" fill="darkgray" {...style} />
);

const PinIcon = style => <Icon name="pin" fill="white" {...style} />;
const MoreIcon = style => <Icon name="more-vertical" fill="white" {...style} />;
const BulbIcon = style => <Icon name="bulb-outline" fill="white" {...style} />;
const HeartIcon = style => <Icon name="heart-outline" fill="red" {...style} />;
const ClockIcon = style => <Icon name="clock-outline" fill="blue" {...style} />;
const SearchIcon = style => <Icon name="search" fill="white" {...style} />;
const ArrowIcon = style => (
  <Icon name="arrow-forward" fill="white" {...style} />
);

class Home extends React.Component {
  constructor(Props) {
    super(Props);
    this.state = {
      routeName: '',
      messages: [],
      imagesource: require('../../assets/img/image2.jpg'),
    };
  }
  componentWillUnMount() {
    this.listener();
  }

  _imageswitch() {
    const routeName = this.props.navigation.state.params
      ? this.props.navigation.state.params.data.name
      : 'Personal';
    if (routeName == 'Personal') {
      this.setState({
        imagesource: require('../../assets/img/personal1.jpg'),
      });
    } else if (routeName == 'Educational') {
      this.setState({
        imagesource: require('../../assets/img/education.jpg'),
      });
    } else if (routeName == 'Emotional') {
      this.setState({
        imagesource: require('../../assets/img/emotional1.jpg'),
      });
    } else if (routeName == 'Spiritual') {
      this.setState({
        imagesource: require('../../assets/img/spiritual.jpg'),
      });
    } else {
      this.setState({
        imagesource: require('../../assets/img/image2.jpg'),
      });
    }
  }

  _listening() {
    const id = this.props.navigation.state.params
      ? this.props.navigation.state.params.data.id
      : '1MFsXrZfxvvhQtFqvAIF';
    const routeName = this.props.navigation.state.params
      ? this.props.navigation.state.params.data.name
      : 'Personal';

    if (routeName) {
      if (routeName == this.state.routeName) {
        //dont do anything
      } else {
        this.setState({routeName: routeName}, () => {
          this._imageswitch();
        });
        try {
          this.listener();
        } catch (error) {}

        this.listener = firestore
          .collection('students')
          .doc(auth.currentUser.uid)
          .collection(id)
          .orderBy('createdAt', 'DESC')
          .onSnapshot(snapshot => {
            if (snapshot.empty) return this.setState({messages: []});
            let docArray = [];
            snapshot.forEach(val => {
              try {
                val.data().createdAt = val.data().createdAt.toDate();
              } catch (e) {}
              docArray.push(val.data());
            });

            this.setState({
              messages: docArray,
            });
          });
      }
    }
  }

  componentDidMount() {
    this._listening();
  }

  _navigate(routName) {
    this.props.navigation.navigate(routName);
  }
  componentDidUpdate() {
    this._listening();
  }

  ReceivedText(message = []) {
    message[0].createdAt = firebase.firestore.FieldValue.serverTimestamp();
    const id = this.props.navigation.state.params
      ? this.props.navigation.state.params.data.id
      : '1MFsXrZfxvvhQtFqvAIF';
    firestore
      .collection('students')
      .doc(auth.currentUser.uid)
      .collection(id)
      .add(message[0]);
    firestore
      .collection('Admin')
      .doc(id)
      .collection(auth.currentUser.uid)
      .add(message[0]);
    firestore
      .collection(id)
      .doc(auth.currentUser.uid)
      .set({
        id: auth.currentUser.uid,
        date: new Date(),
        name: auth.currentUser.displayName,
        photoUrl: '',
        email: auth.currentUser.email,
      });
  }

  render() {
    //const {userName,password} = this.props.navigation.state.params

    return (
      <Layout style={{flex: 1}}>
        <Header>
          <Left>
            <TouchableNativeFeedback
              onPress={() => this.props.navigation.toggleDrawer()}>
              <Avatar
                size="medium"
                resizeMethod="resize"
                source={require('../../assets/img/joyo.jpg')}
              />
            </TouchableNativeFeedback>
          </Left>
          <Body>
            <Title>{this.state.routeName}</Title>
          </Body>
          <Right>
            <Button iconleft icon={SearchIcon} appearance="ghost" />
            <Button
              onPress={() => this._navigate('Settings')}
              iconleft
              icon={MoreIcon}
              appearance="ghost"
            />
          </Right>
        </Header>

        <ImageBackground source={this.state.imagesource} style={{flex: 1}}>
          <GiftedChat
            messages={this.state.messages}
            onSend={text => this.ReceivedText(text)}
            user={{
              _id: auth.currentUser.uid,
            }}
          />
        </ImageBackground>
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
