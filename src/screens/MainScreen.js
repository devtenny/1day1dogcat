import React from 'react';
import {Button, View} from 'react-native';

import MainList from '../components/MainList';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import {TouchableOpacity} from 'react-native-gesture-handler';
// import Footer from '../components/Footer';

const MainScreen = ({navigation}) => {
  const handleMainScreen = (item) => {
    navigation.push('MainDetail', {
      item: item,
    });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 15,
        paddingBottom: -15,
      }}>
      <Header />
      <SearchBar />
      {/* <TouchableOpacity onPress={() => navigation.push('MainDetail')}> */}
      <MainList handleMainScreen={handleMainScreen} />
      {/* </TouchableOpacity> */}
      {/* <Footer /> */}
    </View>
  );
};

export default MainScreen;
