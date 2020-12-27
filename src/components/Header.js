import React, {useState} from 'react';
import styled from 'styled-components';
import {View, Text, TouchableOpacity} from 'react-native';
import QuizModal from './QuizModal';

const Header = ({text}) => {
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
      <MainText>{text}</MainText>
    </>
  );
};

export default Header;

const MainText = styled(Text)`
  font-size: 25px;
`;
