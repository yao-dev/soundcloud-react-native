import Dimensions from 'Dimensions';
import React from 'react';
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const { width } = Dimensions.get('window')

const playlist = {
  hots: [{
    title: 'Summer Vibes',
    followersCount: '1,300,231',
    cover: 'https://picsum.photos/200'
  }, {
    title: 'Rap Zone',
    followersCount: '650,231',
    cover: 'https://picsum.photos/200'
  }, {
    title: 'Rap Zone',
    followersCount: '650,231',
    cover: 'https://picsum.photos/200'
  }, {
    title: 'Rap Zone',
    followersCount: '650,231',
    cover: 'https://picsum.photos/200'
  }, {
    title: 'Rap Zone',
    followersCount: '650,231',
    cover: 'https://picsum.photos/200'
  }, {
    title: 'Rap Zone',
    followersCount: '650,231',
    cover: 'https://picsum.photos/200'
  }, {
    title: 'Rap Zone',
    followersCount: '650,231',
    cover: 'https://picsum.photos/200'
  }, {
    title: 'Rap Zone',
    followersCount: '650,231',
    cover: 'https://picsum.photos/200'
  }],
  mood: [{
    title: 'Shower Time',
    followersCount: '1,300,231',
    cover: 'https://picsum.photos/200'
  }, {
    title: 'Old School',
    followersCount: '300,231',
    cover: 'https://picsum.photos/200'
  }, {
    title: 'Old School',
    followersCount: '300,231',
    cover: 'https://picsum.photos/200'
  }, {
    title: 'Old School',
    followersCount: '300,231',
    cover: 'https://picsum.photos/200'
  }, {
    title: 'Old School',
    followersCount: '300,231',
    cover: 'https://picsum.photos/200'
  }, {
    title: 'Old School',
    followersCount: '300,231',
    cover: 'https://picsum.photos/200'
  }, {
    title: 'Old School',
    followersCount: '300,231',
    cover: 'https://picsum.photos/200'
  }]
}

class PlayList extends React.Component {
  render() {
    return (
      <View style={playListStyles.container}>
        <ImageBackground source={{ uri: this.props.cover }} style={playListStyles.cover} imageStyle={playListStyles.coverRadius}>
          <Text style={playListStyles.coverTitle}>{this.props.title}</Text>
        </ImageBackground>
        <Text style={playListStyles.title}>{this.props.title}</Text>
        <View>
          <Text style={playListStyles.followersCount}>{this.props.followersCount}</Text>
          <Text style={playListStyles.followers}>FOLLOWERS</Text>
        </View>
      </View>
    )
  }
}

const playListStyles = StyleSheet.create({
  container: {
    width: 150,
    marginRight: 20
  },
  cover: {
    width: 150,
    height: 150,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5
  },
  coverRadius: {
    borderRadius: 6
  },
  coverTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    textAlign: 'center'
  },
  title: {
    color: '#484747',
    textAlign: 'center',
    fontWeight: '700'
  },
  followersCount: {
    textAlign: 'center',
    fontSize: 10,
    color: 'grey'
  },
  followers: {
    textAlign: 'center',
    fontSize: 10,
    color: 'grey'
  }
})

class Section extends React.Component {
  render() {
    return (
      <View {...this.props.style}>
        <View>
          <Text style={[sectionStyles.title, this.props.highlight && sectionStyles.highlight]}>
            {this.props.title}
          </Text>
        </View>
        <View style={sectionStyles.scrollViewContainer}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <View style={sectionStyles.scrollView}>
              {this.props.playList.map((item, index) => {
                return (
                  <PlayList
                    key={index}
                    cover={item.cover}
                    title={item.title}
                    followersCount={item.followersCount}
                  />
                )
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const sectionStyles = StyleSheet.create({
  title: {
    fontSize: 26,
    color: '#000000',
    letterSpacing: 0,
    lineHeight: 26,
    marginLeft: 30,
    marginBottom: 25,
  },
  highlight: {
    color: '#FF6D26'
  },
  scrollViewContainer: {
    width,
  },
  scrollView: {
    flexDirection: 'row'
  }
})

class Home extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          <Section
            style={styles.firstSection}
            title='Hots now'
            highlight={true}
            playList={playlist.hots}
          />
          <Section
            title='Mood'
            playList={playlist.hots}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#FFF'
  },
  container: {
    marginTop: 30
  },
  firstSection: {
    marginBottom: 20
  }
})

export default Home;