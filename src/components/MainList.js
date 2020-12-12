import React, {useState} from 'react';
import styled from 'styled-components';
import {View, ScrollView, Text, Image} from 'react-native';
import {SearchBar, Button} from 'react-native-elements';

import sampleData from '../sampleData.json';
import MainCard from './MainCard';

const MainList = () => {
  const [data] = useState(sampleData);
  return (
    <ScrollView style={{width: '100%', marginTop: 10}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}>
        {data.map((item) => {
          // console.log(item.image_url);
          return <MainCard key={item.id} data={item} />;
        })}
      </View>
    </ScrollView>
  );
};

export default MainList;
