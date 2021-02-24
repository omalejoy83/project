import {
  ApplicationProvider,
  Layout,
  Text,
  Avatar,
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
  Modal,
  ActivityIndicator,
  TouchableNativeFeedback,
  Alert,
  Platform,
  PermissionsAndroid,
  Image,
  ViewPagerAndroid,
  TouchableNativeFeedbackBase,
  AsyncStorage,
  Switch,
  Picker,
} from 'react-native';
import firebase, {auth} from 'react-native-firebase';
import ImagePicker from 'react-native-image-crop-picker';
import {Divider} from 'react-native-elements';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ViewPager from '@react-native-community/viewpager';
import {bold} from 'ansi-colors';
import DateTimePicker from 'react-native-modal-datetime-picker';
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
  Input,
} from 'native-base';
import Geolocation from 'react-native-geolocation-service';

// import AudioRecorderPlayer from 'react-native-audio-recorder-player';
// const audioRecorderPlayer = new AudioRecorderPlayer();
//import EvaButtons from './component/iconComponent/evaButtons'
const storage = AsyncStorage;
const firestore = firebase.firestore();
const firebaseStorage = firebase.storage();
const FacebookIcon = style => <Icon name="facebook" fill="white" {...style} />;

const camera = style => <Icon name="camera-outline" fill="black" {...style} />;

const video = style => <Icon name="video-outline" {...style} fill="black" />;

const audio = style => (
  <Icon name="headphones-outline" fill="black" {...style} />
);

const PinIcon = style => <Icon name="pin" fill="white" {...style} />;
const MoreIcon = style => <Icon name="more-vertical" fill="white" {...style} />;
const BulbIcon = style => <Icon name="bulb-outline" fill="white" {...style} />;
const HeartIcon = style => <Icon name="heart-outline" fill="gray" {...style} />;
const HeartIcon2 = style => <Icon name="heart-outline" fill="red" {...style} />;
const ClockIcon = style => <Icon name="clock-outline" fill="blue" {...style} />;
const SearchIcon = style => <Icon name="search" fill="white" {...style} />;
const ArrowIcon = style => (
  <Icon name="arrow-forward" fill="white" {...style} />
);
const BookIcon = style => (
  <Icon name="book-open-outline" fill="gray" {...style} />
);
const PeopleIcon = style => <Icon name="people" fill="gray" {...style} />;
const SettingsIcon = style => (
  <Icon name="settings-2-outline" fill="gray" {...style} />
);
const NotificationsIcon = style => (
  <Icon name="bell-outline" fill="gray" {...style} />
);
const Book2Icon = style => <Icon name="book" fill="gray" {...style} />;
const trash = style => <Icon name="trash-2" fill="red" {...style} />;
const More = style => <Icon name="more-vertical" fill="gray" {...style} />;

class MoreScreen extends React.Component {
  constructor(Props) {
    super(Props);
    this.state = {
      isSwitchedEnabled: false,
      nightswitched: false,
      user: '',
      fullscreenswitch: false,
      isDateTimePickerVisible: false,
    };
  }
  swicthing() {
    if (this.state.isSwitchedEnabled != true) {
      this.setState({isSwitchedEnabled: true});
    } else {
      this.setState({isSwitchedEnabled: false});
    }
  }

  fullScreenswicthing() {
    if (this.state.fullscreenswitch != true) {
      this.setState({fullscreenswitch: true});
    } else {
      this.setState({fullscreenswitch: false});
    }
  }

  nightModeswicthing() {
    if (this.state.nightswitched != true) {
      this.setState({nightswitched: true});
    } else {
      this.setState({nightswitched: false});
    }
  }

  userChanging(user) {
    this.setState({user: user});
  }

  showDateTimePicker() {
    this.setState({isDateTimePickerVisible: true});
  }
  hideDateTimePicker() {
    this.setState({isDateTimePickerVisible: false});
  }
  handleDatePicked(date) {
    alert('A date was picked: ' + date);
    this.hideDateTimePicker();
  }

  render() {
    const {isSwitchedEnabled, nightswitched, fullscreenswitch} = this.state;
    return (
      <Layout>
        <Header style={{backgroundColor: '#123456'}}>
          <Body style={{justifyContent: 'center', alignContent: 'center'}}>
            <Title style={{alignSelf: 'center'}}>Settings</Title>
          </Body>
        </Header>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={date => this.handleDatePicked(date)}
          onCancel={() => this.hideDateTimePicker()}
          mode="date"
        />
        <View style={{marginTop: 12}}>
          <Text style={{marginLeft: 10, fontWeight: 'bold', fontSize: 18}}>
            About
          </Text>
        </View>
        <Divider style={{marginTop: 20}} />

        <View style={{flexDirection: 'row'}}>
          <Text style={{marginVertical: 10, paddingLeft: 10, color: 'black'}}>
            Full Screen
          </Text>
          <View style={{paddingLeft: 210, marginVertical: 10}}>
            <Switch
              value={fullscreenswitch}
              onValueChange={() => this.fullScreenswicthing()}
              trackColor={{true: 'green'}}
            />
          </View>
        </View>
        <Divider style={{marginTop: 20}} />
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginVertical: 10, paddingLeft: 10, color: 'black'}}>
            Daily Notifications
          </Text>
          <View style={{paddingLeft: 170, marginVertical: 10}}>
            <Switch
              value={isSwitchedEnabled}
              onValueChange={() => this.swicthing()}
              trackColor={{true: 'green'}}
            />
          </View>
        </View>
        <Divider style={{marginTop: 20}} />
        <View style={{marginTop: 12}}>
          <Text style={{marginLeft: 10, color: 'black'}}>Set alert time</Text>
          <TouchableOpacity onPress={() => this.showDateTimePicker()}>
            <Text style={{marginLeft: 16, color: 'gray'}}>8:00AM</Text>
          </TouchableOpacity>
        </View>
        <Divider style={{marginTop: 20}} />

        <View style={{flexDirection: 'row'}}>
          <Text style={{marginVertical: 17, paddingLeft: 10, color: 'black'}}>
            Font Size
          </Text>
          <View style={{flex: 2, paddingLeft: 110, marginVertical: 1}}>
            <Picker
              style={{
                marginTop: 5,
                marginRight: 1,
              }}
              selectedValue={this.state.user}
              onValueChange={user => this.userChanging(user)}>
              <Picker.Item label="micro" value="micro" />
              <Picker.Item label="small" value="small" />
              <Picker.Item label="medium" value="medium" />
              <Picker.Item label="large" value="large" />
            </Picker>
          </View>
        </View>
        <Divider style={{marginTop: 20}} />

        <View style={{flexDirection: 'row'}}>
          <Text style={{marginVertical: 17, paddingLeft: 10, color: 'black'}}>
            Font Style
          </Text>
          <View style={{flex: 2, paddingLeft: 110, marginVertical: 1}}>
            <Picker
              style={{
                marginTop: 5,
                marginRight: 1,
              }}
              selectedValue={this.state.user}
              onValueChange={user => this.userChanging(user)}>
              <Picker.Item label="Bold" value="Bold" />
              <Picker.Item label="Italic" value="Italic" />
              <Picker.Item label="Roboto" value="Roboto" />
              <Picker.Item label="Bold-Italic" value="Bold-Italic" />
            </Picker>
          </View>
        </View>
        <Divider style={{marginTop: 20}} />

        <View style={{flexDirection: 'row'}}>
          <Text style={{marginVertical: 17, paddingLeft: 10, color: 'black'}}>
            Audio Speed
          </Text>
          <View style={{flex: 2, paddingLeft: 110, marginVertical: 1}}>
            <Picker
              style={{
                marginTop: 5,
                marginRight: 1,
              }}
              selectedValue={this.state.user}
              onValueChange={user => this.userChanging(user)}>
              <Picker.Item label="very slow" value="very slow" />
              <Picker.Item label="slow" value="slow" />
              <Picker.Item label="normal" value="normal" />
              <Picker.Item label="fast" value="fast" />
            </Picker>
          </View>
        </View>
        <Divider style={{marginTop: 10}} />
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginVertical: 10, paddingLeft: 10, color: 'black'}}>
            Night Mode
          </Text>
          <View style={{paddingLeft: 210, marginVertical: 10}}>
            <Switch
              value={nightswitched}
              onValueChange={() => this.nightModeswicthing()}
              trackColor={{true: 'green'}}
            />
          </View>
        </View>
        <Divider style={{marginTop: 30}} />
      </Layout>
    );
  }
}

export default MoreScreen;
