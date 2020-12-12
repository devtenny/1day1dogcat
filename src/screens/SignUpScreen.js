import React from 'react';
import styled from 'styled-components';
import {View, Text, TextInput, Button} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Picker} from '@react-native-picker/picker';
import {useState} from 'react';

const SignUpScreen = ({navigation}) => {
  const [location, setLocation] = useState('1');
  return (
    <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'white'}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <SignUpText>네가 내 집사냥?</SignUpText>
        <SignUpText>주인님이멍?</SignUpText>
        <SignUpInput placeholder=" 이름(닉네임)"></SignUpInput>
        <SignUpInput
          placeholder=" 이메일 주소"
          keyboardType="email-address"></SignUpInput>
        <SignUpInput
          placeholder=" 비밀번호"
          secureTextEntry={true}></SignUpInput>
        <SignUpInput
          placeholder=" 비밀번호 확인"
          secureTextEntry={true}></SignUpInput>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'flex-start',
          marginLeft: 50,
          marginTop: 5,
        }}>
        <CheckBox value={true} tintColors={{true: '#3A9FF9', false: 'grey'}} />
        <Text style={{textAlignVertical: 'center'}}>
          유기동물 보호센터 사용자신가요?
        </Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <SignUpInput placeholder=" 보호센터명"></SignUpInput>
        <View
          style={{
            borderColor: 'lightgrey',
            borderWidth: 1,
            borderRadius: 5,
            marginTop: 5,
          }}>
          <LocationPicker
            mode="dialog"
            selectedValue={location}
            onValueChange={(itemValue) => setLocation(itemValue)}>
            <Picker.Item label="서울" value="1" />
            <Picker.Item label="경기" value="2" />
            <Picker.Item label="인천" value="3" />
            <Picker.Item label="강원" value="4" />
            <Picker.Item label="제주" value="5" />
            <Picker.Item label="대전" value="6" />
            <Picker.Item label="충북" value="7" />
            <Picker.Item label="충남/세종" value="8" />
            <Picker.Item label="부산" value="9" />
            <Picker.Item label="울산" value="10" />
            <Picker.Item label="경남" value="11" />
            <Picker.Item label="대구" value="12" />
            <Picker.Item label="경북" value="13" />
            <Picker.Item label="광주" value="14" />
            <Picker.Item label="전남" value="15" />
            <Picker.Item label="전주/전북" value="16" />
          </LocationPicker>
        </View>
        <SignUpInput placeholder=" 전화번호"></SignUpInput>
        <View style={{width: 300, marginTop: 10}}>
          <Button title="회원가입" onPress={() => navigation.push('Login')} />
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;

const SignUpText = styled(Text)`
  font-size: 25px;
`;

const SignUpInput = styled(TextInput)`
  width: 300px;
  height: 40px;
  border: lightgray solid 1px;
  border-radius: 5px;
  margin-top: 10px;
`;

const LocationPicker = styled(Picker)`
  width: 300px;
  height: 40px;
`;
