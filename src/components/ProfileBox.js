import React from 'react';
import styled from 'styled-components';
import {View, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

const ProfileBox = () => {
  return (
    <ProfileBoxView>
      <Icon
        name="user-circle"
        type="font-awesome"
        color="black"
        size={60}
        style={{marginLeft: 20}}
      />
      <ProfileTextBox>
        <UserName>태태님</UserName>
        <Text>한양유기센터</Text>
      </ProfileTextBox>
      <TouchableOpacity>
        <Icon
          name="edit"
          type="font-awesome"
          color="black"
          size={20}
          style={{marginLeft: 170, marginBottom: 50, marginRight: 10}}
        />
      </TouchableOpacity>
    </ProfileBoxView>
  );
};

export default ProfileBox;

const ProfileBoxView = styled(View)`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100px;
  border: lightgray solid 1px;
  border-radius: 5px;
  margin-top: 15px;
`;

const ProfileTextBox = styled(View)`
  margin-left: 10px;
`;

const UserName = styled(Text)`
  font-weight: bold;
`;
