import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import styled from 'styled-components';

import Header from '../components/ProfileHeader';
import ProfileBox from '../components/ProfileBox';
import PetProfileBox from '../components/PetProfileBox';
import Footer from '../components/Footer';

const ProfileScreen = ({navigation}) => {
  const handleScreen = () => {
    navigation.push('Alert');
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
      <Header handleScreen={handleScreen} />
      <View style={{height: '84%'}}>
        <ProfileBox />
        <PetProfileBox nav={navigation} />
      </View>
      <Footer nav={navigation} />
    </View>
  );
};

export default ProfileScreen;
