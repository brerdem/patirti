/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View, Image, ScrollView} from 'react-native';
import Drawer from 'react-native-drawer';
import {RkButton, RkTheme, RkCard, RkText} from 'react-native-ui-kitten';
import {Header, List, ListItem} from 'react-native-elements';
import ImageSlider from 'react-native-image-slider';

/*const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});*/

type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {drawerOpen: null};
    };

    createStory = () => {
        let arr = [];
        for (let i = 0; i < 20; i++) {
            arr.push(
                <RkCard rkType='story' key={i}>
                    <Image rkCardImg
                           source={{uri: 'https://patirti.cubecdn.net/content/images/large/074/0747623_spor-giyim.jpeg'}}/>
                    <View rkCardHeader>
                        <RkText rkType='header'>Abiye giysiler</RkText>
                    </View>
                    <View rkCardContent>
                        <RkText style={{textAlign: 'left'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur
                        </RkText>
                    </View>
                    <View rkCardFooter>
                        <RkButton rkType='small outline'>İncele</RkButton>
                        <RkButton rkType='small'>Sepete Ekle</RkButton>
                    </View>
                </RkCard>
            )
        }
        return arr
    }

    centerImage = () => {
        return <Image source={require('./img/logo.png')} style={{width: 130, height: 25}}/>

    }


    render() {

        const imgs = [
            'https://patirti.cubecdn.net/content/images/large/073/0734734_bluz.jpeg',
            'https://patirti.cubecdn.net/content/images/large/074/0747623_spor-giyim.jpeg',
            'https://patirti.cubecdn.net/content/images/large/073/0734739_cicekli-urunler.jpeg',
            'https://patirti.cubecdn.net/content/images/large/071/0715128_abiye.jpeg'
        ];

        const drawerStyles = {
            drawer: {shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
            main: {paddingLeft: 3},
        }

        const list = [
            {
                title: 'ÇOK SATANLAR',
            },
            {
                title: 'KADIN',

            }, {
                title: 'ERKEK',

            }, {
                title: 'BÜYÜK BEDEN',

            }, {
                title: 'AYAKKABI',

            }, {
                title: 'KOZMETİK',

            }, {
                title: 'SEVGİLİ KOMBİNLERİ',

            }, {
                title: 'İÇ GİYİM',

            }, {
                title: 'ÇOCUK',

            },

        ]

        return <Drawer
            type="overlay"
            content={
                <View style={styles.container}>
                    <List>
                        {
                            list.map((item, i) => (
                                <ListItem
                                    key={i}
                                    title={item.title}

                                />
                            ))
                        }
                    </List>
                </View>

            }
            open={this.state.drawerOpen}
            tapToClose={true}
            openDrawerOffset={0.2} // 20% gap on the right side of drawer
            panCloseMask={0.2}
            closedDrawerOffset={-10}
            styles={drawerStyles}
            onClose={() => {
                this.setState({drawerOpen: false});
            }}
            tweenHandler={(ratio) => ({
                main: {opacity: (2 - ratio) / 2}
            })}

        >
            <View>

                <Header outerContainerStyles={{backgroundColor: '#FFF'}}
                        leftComponent={{
                            icon: 'menu',
                            color: '#E62174',
                            onPress: () => this.setState({drawerOpen: true})
                        }}
                        centerComponent={this.centerImage()}
                        rightComponent={{icon: 'home', color: '#E62174'}}
                />
                <ImageSlider
                    images={imgs}
                    style={{flex: 0, height: '20%'}}
                    autoPlayWithInterval={3000}
                />
                <ScrollView style={{marginTop: 5}}>
                    {this.createStory()}
                </ScrollView>
            </View>

        </Drawer>


    }
}

RkTheme.setType('RkCard', 'story', {
    img: {
        height: 200,
        opacity: 0.7
    },
    header: {
        alignSelf: 'center'
    },
    content: {
        alignSelf: 'center'
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
