import React, {useState} from 'react';
import styled from 'styled-components';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';

import AlertModal from './AlertModal';

const AlertHeader = ({handleScreen, title}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View
        style={{
          width: '100%',
          flexDirection: 'row-reverse',
        }}>
        <Icon name="bell" type="font-awesome" color="white" size={20} />
        <AlertModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </View>
      <MainText>{title}</MainText>
    </>
  );
};

export default AlertHeader;

const MainText = styled(Text)`
  font-size: 25px;
`;
