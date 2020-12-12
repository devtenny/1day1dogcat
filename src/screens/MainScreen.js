import React from 'react';
import {View} from 'react-native';

import MainList from '../components/MainList';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';

const MainScreen = () => {
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
      <MainList />
      {/* <Footer /> */}
    </View>
  );
};

export default MainScreen;
