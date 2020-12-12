import React, {useState} from 'react';
import styled from 'styled-components';
import {View, ScrollView, Text, Image} from 'react-native';
import {Icon} from 'react-native-elements';

const imageSize = {
  width: 180,
  height: 180,
  marginTop: 10,
};

const MainList = (data) => {
  console.log(data);
  return (
    <View
      style={{
        flexDirection: 'column',
      }}>
      <Image
        style={imageSize}
        source={{
          uri: data.data.image_url,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <CardInfoText>
          #{data.data.type} #{data.data.id}
        </CardInfoText>
        <Icon name="heart" type="font-awesome-5" color="#f50" size={18} />
      </View>
    </View>
  );
};

export default MainList;

const CardInfoText = styled(Text)`
  font-weight: bold;
`;
