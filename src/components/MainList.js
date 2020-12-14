import React, {useState} from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';

import sampleData from '../sampleData.json';
import MainCard from './MainCard';

const MainList = ({handleMainScreen}) => {
  const [data] = useState(sampleData);
  return (
    <ScrollView style={{width: '100%', marginTop: 10}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          marginBottom: 30,
        }}>
        {data.map((item) => {
          return (
            <MainCard
              key={item.id}
              data={item}
              handleMainScreen={handleMainScreen}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default MainList;
