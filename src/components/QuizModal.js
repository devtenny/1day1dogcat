import React from 'react';
import styled from 'styled-components';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import Modal from 'react-native-modal';

const QuizModal = ({modalVisible, setModalVisible}) => {
  return (
    <View>
      <Modal isVisible={modalVisible}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <ModalView>
            <QuizTitle>오늘의 펫티켓 QUIZ!</QuizTitle>
            <QuestionView>
              <Text>
                Q. 생후 3개월까지는 반려견 동물 등록을 하지 않아도 된다.
              </Text>
            </QuestionView>
            <AnswerView>
              <Text>
                A. No! 생후 2개월 이상 반려견은 가까운
                동물등록대행기관(동물병원) 등에 방문하여 신청해야 합니다.
              </Text>
            </AnswerView>
            <View
              style={{
                width: '100%',
                flexDirection: 'row-reverse',
              }}>
              <CloseButton
                onPress={() => setModalVisible(false)}
                title="닫기"
                type="solid"
                containerStyle={{
                  height: 40,
                  width: 80,
                  marginTop: 10,
                }}
                titleStyle={{fontSize: 14}}
              />
            </View>
          </ModalView>
        </View>
      </Modal>
    </View>
  );
};

export default QuizModal;

const ModalView = styled(View)`
  background-color: white;
  height: 100%;
  width: 100%;
  padding: 30px;
`;

const QuizTitle = styled(Text)`
  font-size: 25px;
  margin: 10px;
`;

const QuestionView = styled(View)`
  border: lightgray solid 1px;
  border-radius: 5px;
  height: 80px;
  padding: 20px;
`;

const AnswerView = styled(View)`
  border: lightgray solid 1px;
  border-radius: 5px;
  margin-top: 10px;
  height: 350px;
  padding: 20px;
`;

const CloseButton = styled(Button)``;
