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
import books from './bookRef';

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
const SearchIcon = style => <Icon name="search" fill="black" {...style} />;
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
const arrow1 = style => (
  <Icon name="arrow-ios-back-outline" fill="white" {...style} />
);
const arrow2 = style => (
  <Icon name="arrow-ios-forward-outline" fill="white" {...style} />
);

class BiblePage extends React.Component {
  constructor(Props) {
    super(Props);
    this.state = {
      background: 'abcbac',
      chapter: this.props.navigation.state.params.chapterSelected,
      chapters: [],
      book: '',
      verses: [],
      verseText: [],
      verse: '',
      text: [],
      verseIndex: '',
    };
  }

  // goIndex() {
  //   let bookName = this.props.navigation.state.params.bookName;
  //   let chapter = this.props.navigation.state.params.chapterSelected;
  //   //let chapters = this.props.navigation.state.params.chapters;
  //   let verse = this.props.navigation.state.params.verseSelected;
  //   let verses = this.props.navigation.state.params.verses;
  //   let bookRef = books[bookName].chapters[chapter - 1].verses;
  //   //let versesArray = [];
  //   // versesArray = bookRef;
  //   let verseIndex = verse - 1;
  //   alert(verseIndex);
  //   alert(bookRef.length);
  //   this.setState({verseIndex: verseIndex});
  //   this.flatListRef.scrollToIndex({animated: true, index: verseIndex});
  // }
  // goIndex() {
  //   let verse = this.props.navigation.state.params.verseSelected;
  //   this.setState({verseIndex: verse - 1});
  // }

  getItemLayout(data, index) {
    let bookName = this.props.navigation.state.params.bookName;
    let verses = this.props.navigation.state.params.verses;
    let chapter = this.props.navigation.state.params.chapterSelected;
    let bookRef = books[bookName].chapters[chapter - 1].verses;
    let itemHeightSize = bookRef.length;
    return {
      length: itemHeightSize,
      offset: itemHeightSize * index,
      index,
    };
  }

  componentDidMount() {
    let bookName = this.props.navigation.state.params.bookName;
    let chapter = this.props.navigation.state.params.chapterSelected;
    let chapters = this.props.navigation.state.params.chapters;
    let verses = this.props.navigation.state.params.verses;
    let verse = this.props.navigation.state.params.verseSelected;
    let bookRef = books[bookName].chapters[chapter - 1].verses;
    let text = [];
    if (this.state.book != bookName) {
      text = bookRef;
      this.setState({
        verses: verses,
        chapters: chapters,
        book: bookName,
        chapter: chapter,
        verseText: text,
      });
    }
    this.scrollToIndex();
  }
  scrollToIndex() {
    let verse = this.props.navigation.state.params.verseSelected;
    setTimeout(() => {
      this.flatListRef.scrollToIndex({animated: true, index: verse - 1});
    });
  }

  ChapterDecrease() {
    let {chapter} = this.state;
    if (chapter == 1) {
      this.setState({chapter});
    } else {
      this.setState({chapter: chapter - 1});
    }
  }

  chapterIncrease() {
    let bookName = this.props.navigation.state.params.bookName;
    let {chapter} = this.state;
    let bookRef = books[bookName];
    let chapters = bookRef.chapters.length;
    if (chapter == chapters) {
      this.setState({chapter});
    } else {
      this.setState({chapter: chapter + 1});
    }
  }

  render() {
    let bookName = this.props.navigation.state.params.bookName;
    let chapter = this.props.navigation.state.params.chapterSelected;
    let chapters = this.props.navigation.state.params.chapters;
    return (
      <Layout style={{flex: 1}}>
        <Header style={{backgroundColor: '#123456'}}>
          <Left>
            <Button
              onPress={() => this.ChapterDecrease()}
              icon={arrow1}
              style={{height: 0, width: 0}}
              appearance="ghost"
            />
          </Left>
          <Body style={{flexDirection: 'row'}}>
            <Text
              onPress={() => this.props.navigation.navigate('Books')}
              style={{
                color: 'white',
                maxWidth: 140,
                marginLeft: 20,
              }}>
              {bookName}
            </Text>
            <Text style={{color: 'white', marginLeft: 5}}>
              {this.state.chapter}
            </Text>
          </Body>
          <Right>
            <Button
              onPress={() => this.chapterIncrease()}
              icon={arrow2}
              style={{height: 0, width: 0}}
              appearance="ghost"
            />
          </Right>
        </Header>

        <FlatList
          ref={ref => {
            this.flatListRef = ref;
          }}
          data={this.state.verseText}
          // getItemLayout={this.getItemLayout}
          //initialScrollIndex={this.state.verseIndex}
          onScrollToIndexFailed={() => this.scrollToIndex()}
          renderItem={({item, index}) => (
            <TouchableNativeFeedback>
              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: 10,
                  marginBottom: 10,
                  marginTop: 10,
                }}>
                <Text style={{fontSize: 10, color: 'gray', marginTop: 1}}>
                  {item.verse}
                </Text>
                <Text
                  style={{
                    paddingRight: 5,
                    paddingLeft: 2,
                    fontSize: 17,
                  }}>
                  {item.text}
                </Text>
              </View>
            </TouchableNativeFeedback>
          )}
        />
      </Layout>
    );
  }
}

export default BiblePage;
