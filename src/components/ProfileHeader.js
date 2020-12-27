import React, {useState} from 'react';
import styled from 'styled-components';
import {View, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

import AlertModal from './AlertModal';

const ProfileHeader = ({handleScreen}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View
        style={{
          width: '100%',
          flexDirection: 'row-reverse',
        }}>
        <TouchableOpacity onPress={() => handleScreen()}>
          <Icon name="bell" type="font-awesome" color="black" size={20} />
        </TouchableOpacity>
        <AlertModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </View>
      <MainText>프로필</MainText>
    </>
  );
};

export default ProfileHeader;

const MainText = styled(Text)`
  font-size: 25px;
`;
