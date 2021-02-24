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
  FlatList,
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
  Dimensions,
} from 'react-native';
import firebase, {auth} from 'react-native-firebase';
import ImagePicker from 'react-native-image-crop-picker';

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
  Input,
} from 'native-base';
import Geolocation from 'react-native-geolocation-service';
import books from './bookRef';

// import AudioRecorderPlayer from 'react-native-audio-recorder-player';
// const audioRecorderPlayer = new AudioRecorderPlayer();
//import EvaButtons from './component/iconComponent/evaButtons'
const storage = AsyncStorage;
const {width} = Dimensions.get('window');
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

class Chapters extends React.Component {
  constructor(Props) {
    super(Props);
    super(Props);
    this.state = {
      chapters: [],
      book: '',
    };
  }

  componentDidMount() {
    let book = this.props.navigation.state.params
      ? this.props.navigation.state.params.bookName
      : 'Genesis';
    let bookRef = books[book];
    let noOfChapters = bookRef.chapters.length;
    let chapters = [];
    if (this.state.book != book) {
      for (let i = 1; i <= noOfChapters; i++) {
        chapters.push(i);
      }

      this.setState({
        chapters: chapters,
        book: book,
      });
    }
  }
  componentDidUpdate() {
    let book = this.props.navigation.state.params
      ? this.props.navigation.state.params.bookName
      : 'Genesis';
    let bookRef = books[book];
    let noOfChapters = bookRef.chapters.length;
    let chapters = [];
    if (this.state.book != book) {
      for (let i = 1; i <= noOfChapters; i++) {
        chapters.push(i);
      }

      this.setState({
        chapters: chapters,
        book: book,
      });
    }
  }

  selectedChapter(chapter) {
    let bookName = this.state.book;
    let chapterSelected = chapter;
    let createObject = {
      bookName: bookName,
      chapterSelected: chapterSelected,
    };

    this.props.navigation.navigate('Verses', createObject);
  }

  render() {
    return (
      <FlatList
        data={this.state.chapters}
        numColumns={5}
        renderItem={({item, index}) => (
          <TouchableNativeFeedback onPress={() => this.selectedChapter(item)}>
            <View
              style={{width: width / 5, paddingHorizontal: 20, marginTop: 15}}>
              <View
                style={{
                  borderRadius: 50,
                  width: 45,
                  height: 45,
                  backgroundColor: '#123456',
                }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    marginTop: 10,
                  }}>
                  {item}
                </Text>
              </View>
            </View>
          </TouchableNativeFeedback>
        )}
      />
    );
  }
}

export default Chapters;
