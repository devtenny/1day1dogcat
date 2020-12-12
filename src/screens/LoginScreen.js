import React from 'react';
import styled from 'styled-components';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <LoginText>어서오라냥</LoginText>
      <LoginText>반갑다멍!</LoginText>
      <LoginInput
        placeholder={' 이메일 주소'}
        keyboardType="email-address"></LoginInput>
      <LoginInput placeholder={' 비밀번호'} secureTextEntry={true}></LoginInput>
      <View style={{width: 300, marginTop: 10}}>
        <Button title="로그인" onPress={() => navigation.push('Main')} />
      </View>
      <FindIdOrPwd>아이디 찾기 / 비밀번호 찾기</FindIdOrPwd>
      <TouchableOpacity onPress={() => navigation.push('SignUp')}>
        <GoToSignUp>아직 회원이 아니신가요?</GoToSignUp>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const LoginText = styled(Text)`
  font-size: 25px;
`;

const LoginInput = styled(TextInput)`
  width: 300px;
  height: 40px;
  border: lightgray solid 1px;
  border-radius: 5px;
  margin-top: 10px;
`;

const FindIdOrPwd = styled(Text)`
  color: grey;
  font-size: 12px;
  margin-top: 10px;
`;

const GoToSignUp = styled(Text)`
  margin-top: 5px;
`;
