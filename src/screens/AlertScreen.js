import React, {useState} from 'react';
import styled from 'styled-components';
import {View, Text, Switch} from 'react-native';
import {Button} from 'react-native-elements';
import TimePicker from 'react-native-simple-time-picker';

import Header from '../components/AlertHeader';

const AlertScreen = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [selectedHours, setSelectedHours] = useState(0);
  const [selectedMinutes, setSelectedMinutes] = useState(0);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 15,
        paddingBottom: -15,
        width: '100%',
      }}>
      <Header title={'알림 설정'} />

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

      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          width: '100%',
          alignItems: 'center',
        }}>
        <TimeView>
          <Text>알림 시간 설정</Text>
          <Text style={{marginLeft: 310, marginTop: -18}}>
            {selectedHours}:{selectedMinutes}
          </Text>
        </TimeView>
        <TimePicker
          selectedHours={selectedHours}
          selectedMinutes={selectedMinutes}
          onChange={(hours, minutes) => {
            setSelectedHours(hours);
            setSelectedMinutes(minutes);
          }}
        />
      </View>

      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 20,
        }}>
        <CloseButton
          onPress={() => navigation.push('Profile')}
          title="취소"
          type="solid"
          containerStyle={{
            height: 40,
            width: '40%',
            marginLeft: 20,
          }}
          titleStyle={{fontSize: 14}}
        />
        <CloseButton
          onPress={() => navigation.push('Profile')}
          title="확인"
          type="solid"
          containerStyle={{
            height: 40,
            width: '40%',
            marginRight: 20,
          }}
          titleStyle={{fontSize: 14}}
        />
      </View>
    </View>
  );
};

export default AlertScreen;

const AlertView = styled(View)`
  justify-content: center;
  border: lightgray solid 1px;
  border-radius: 5px;
  height: 40px;
  padding: 20px;
  width: 100%;
  margin-top: 20px;
`;

const TimeView = styled(View)`
  /* flex-direction: row; */
  justify-content: center;
  border: lightgray solid 1px;
  border-radius: 5px;
  margin-top: 10px;
  height: 40px;
  width: 100%;
  padding: 20px;
`;

const CloseButton = styled(Button)``;
