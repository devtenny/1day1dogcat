import React, {useState} from 'react';
import styled from 'styled-components';
import {View, Text, Switch} from 'react-native';
import {Button} from 'react-native-elements';
import Modal from 'react-native-modal';

const AlertModal = ({modalVisible, setModalVisible}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
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
            <QuizTitle>알림 설정</QuizTitle>

            <AlertView>
              <Text style={{marginTop: 3}}>알림 설정</Text>
              <Switch
                trackColor={{false: 'grey', true: 'skyblue'}}
                thumbColor={isEnabled ? 'white' : 'white'}
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={{marginTop: -22, marginRight: -13}}
              />
            </AlertView>

            <TimeView>
              <Text>알림 시간 설정</Text>
            </TimeView>
            <View>
              <Button onPress={showDatepicker} title="Show date picker!" />
            </View>
            <View>
              <Button onPress={showTimepicker} title="Show time picker!" />
            </View>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}

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

export default AlertModal;

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

const AlertView = styled(View)`
  justify-content: center;
  border: lightgray solid 1px;
  border-radius: 5px;
  height: 40px;
  padding: 20px;
`;

const TimeView = styled(View)`
  justify-content: center;
  border: lightgray solid 1px;
  border-radius: 5px;
  margin-top: 10px;
  height: 40px;
  padding: 20px;
`;

const CloseButton = styled(Button)``;
