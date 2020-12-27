import React from 'react';
import {View, ScrollView} from 'react-native';

import MainCard from './MainCard';

const MainList = ({handleMainScreen, data}) => {
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
