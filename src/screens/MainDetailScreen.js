import React from 'react';
import styled from 'styled-components';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

import Header from '../components/Header';

const imageSize = {
  width: 380,
  height: 380,
  marginTop: 10,
  marginBottom: 10,
};

const MainDetailScreen = ({route, navigation}) => {
  console.log(navigation);
  const item = route.params.item;
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
        padding: 15,
        paddingBottom: -15,
      }}>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Header />
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            alignContent: 'center',
          }}>
          <Icon
            name="chevron-left"
            type="font-awesome"
            color="black"
            size={14}
            containerStyle={{borderTopWidth: 3, borderColor: 'white'}}
          />
          <Text style={{marginLeft: 5}}>돌아가기</Text>
        </View>
      </TouchableOpacity>
      <Image
        style={imageSize}
        source={{
          uri: item.image_url,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: 10,
          paddingRight: 10,
        }}>
        <Text>
          #{item.type}
          {item.id} - {item.name} / {item.kind} / {item.age}세
        </Text>
        {true ? (
          <Icon name="heart" type="font-awesome" color="#f50" size={20.5} />
        ) : (
          <Icon name="heart" type="font-awesome-5" color="#f50" size={20} />
        )}
      </View>
      <TextView>
        <Text>{item.text}</Text>
      </TextView>
    </View>
  );
};

export default MainDetailScreen;

const TextView = styled(ScrollView)`
  width: 100%;
  border: lightgray solid 1px;
  border-radius: 5px;
  margin: 10px 0px 30px 0px;
  padding: 20px;
`;
