import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

const Footer = ({nav}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingTop: 5,
        borderTopWidth: 0.2,
      }}>
      <TouchableOpacity onPress={() => nav.push('GpsMap')}>
        <Icon name="map-marker" type="font-awesome" size={20.5} />
        <Text>내 주변</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => nav.push('Main')}>
        <Icon name="home" type="font-awesome" size={20.5} />
        <Text style={{marginLeft: 3}}>홈</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => nav.push('Profile')}>
        <Icon name="user" type="font-awesome" size={20.5} />
        <Text>프로필</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
