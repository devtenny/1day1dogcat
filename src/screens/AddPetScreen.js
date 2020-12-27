import React, {useState} from 'react';
import styled from 'styled-components';
import {View, Text, TextInput} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import CheckBox from '@react-native-community/checkbox';
import {Picker} from '@react-native-picker/picker';
import RadioForm from 'react-native-simple-radio-button';

import Header from '../components/AlertHeader';
import {TouchableOpacity} from 'react-native-gesture-handler';

const AddPetScreen = ({navigation}) => {
  const [location, setLocation] = useState('1');
  const [data, setData] = useState([
    {label: '강아지     ', value: 0},
    {label: '고양이', value: 1},
  ]);

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
      <Header title={'동물 등록'} />

      <View style={{marginTop: 15}}>
        <View
          style={{
            borderRadius: 50,
            borderWidth: 2,
            padding: 15,
            borderColor: 'lightgrey',
            marginBottom: 10,
          }}>
          <TouchableOpacity>
            <Icon name="image" type="font-awesome" size={60} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <RadioForm
          formHorizontal={true}
          radio_props={data}
          initial={0}
          buttonSize={10}
          wrapStyle={{paddingLeft: 10}}
        />
      </View>
      <Input placeholder=" 이름"></Input>
      <Input placeholder=" 나이"></Input>
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
          <Picker.Item label="말티즈" value="1" />
          <Picker.Item label="푸들" value="2" />
          <Picker.Item label="코카스파니엘" value="3" />
          <Picker.Item label="치와와" value="4" />
          <Picker.Item label="포메라니안" value="5" />
          <Picker.Item label="기타" value="6" />
        </LocationPicker>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'flex-start',
          marginTop: 5,
        }}>
        <CheckBox value={true} tintColors={{true: '#3A9FF9', false: 'grey'}} />
        <Text style={{textAlignVertical: 'center'}}>유기동물이에요.</Text>
      </View>
      <Input placeholder=" 보호센터명"></Input>

      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 20,
          marginTop: 150,
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

export default AddPetScreen;

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

const LocationPicker = styled(Picker)`
  width: 300px;
  height: 40px;
`;

const Input = styled(TextInput)`
  width: 300px;
  height: 40px;
  border: lightgray solid 1px;
  border-radius: 5px;
  margin-top: 10px;
`;
