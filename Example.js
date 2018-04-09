import React from 'react';
import {
    Image,
    StatusBar,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Text,
    Slider,
    View,
    Animated,
    ActivityIndicatorIOS,
    ProgressBarAndroid,
    Platform,
    NativeModules,
} from 'react-native';


import RCTIJKPlayer from './RCTIJKPlayer';

import RCTIJKPlayerWithController from './RCTIJKPlayerWithController';
var {height, width} = Dimensions.get('window');
console.log("width, height", width, height);
import Icon from 'react-native-vector-icons/FontAwesome';
const iconSize = 120;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    player: {
        width: width,
        height: height,
        backgroundColor: 'rgba(0,0,0,1)',
    },
});


export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.RCTIJKPlayer = null;
        this.state = {
            playBackInfo: {
            },
            fadeAnim: new Animated.Value(1),
            hasController: false,
        };
    }
    componentDidMount() {
        //let url = "http://devimages.apple.com.edgekey.net/streaming/examples/bipbop_4x3/gear1/prog_index.m3u8";
        // let url = "/Users/cong/Downloads/111.mov";
        let url ="rtmp://live.hkstv.hk.lxdns.com/live/hks";
        this.RCTIJKPlayer.start({url: url});
    }
    componentWillUnmount() {
        clearInterval(this.playbackInfoUpdater);
    }

    render() {
        return (<View
                style={styles.container}
                >
                <StatusBar
                animated
                hidden
                />
                <RCTIJKPlayerWithController
                ref={(RCTIJKPlayer) => {
                    this.RCTIJKPlayer = RCTIJKPlayer;
                }}
                style={styles.player}
                height={height/2}
                width={width}
                left={0}
                top={100}
                >
                </RCTIJKPlayerWithController>
                </View>
               );
    }
}
