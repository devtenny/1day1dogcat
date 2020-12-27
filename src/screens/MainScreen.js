import React, {useState} from 'react';
import {View} from 'react-native';

import MainList from '../components/MainList';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';

import sampleData from '../sampleData.json';

const MainScreen = ({navigation}) => {
  const [data, setData] = useState(sampleData);

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
      <Header text={'1일 1댕냥'} />
      <View style={{height: '84%'}}>
        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <SearchBar data={data} setData={setData} />
        </View>
        <MainList handleMainScreen={handleMainScreen} data={data} />
      </View>
      <Footer nav={navigation} />
    </View>
  );
};

export default MainScreen;
