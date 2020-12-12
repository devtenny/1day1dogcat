import React, {useState} from 'react';
import styled from 'styled-components';
import {View, Text, TouchableOpacity} from 'react-native';
import QuizModal from './QuizModal';

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View
        style={{
          width: '100%',
          flexDirection: 'row-reverse',
        }}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text>QUIZ</Text>
        </TouchableOpacity>
        <QuizModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </View>
      <MainText>1일 1댕냥</MainText>
    </>
  );
};

export default Header;

const MainText = styled(Text)`
  font-size: 25px;
`;
