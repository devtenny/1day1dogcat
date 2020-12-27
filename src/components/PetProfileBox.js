import React from 'react';
import styled from 'styled-components';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

const PetProfileBox = ({nav}) => {
  return (
    <View style={{marginTop: 10}}>
      <BoxView>
        <ProfileTextBox>
          <Title>댕냥이들</Title>
        </ProfileTextBox>
        <TouchableOpacity onPress={() => nav.push('AddPet')}>
          <Icon
            name="plus"
            type="font-awesome"
            color="black"
            size={20}
            style={{marginLeft: 270}}
          />
        </TouchableOpacity>
      </BoxView>
      <PetImageBox>
        <PetImage
          source={{
            uri:
              'https://user-images.githubusercontent.com/45069571/101986752-392dc900-3cd3-11eb-8ba0-8b551050ac24.png',
          }}
        />
        <Text style={{fontWeight: 'bold', marginTop: 5, marginLeft: 33}}>
          댕 / 구름이 / 11세
        </Text>
      </PetImageBox>
    </View>
  );
};

export default PetProfileBox;

const BoxView = styled(View)`
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-top: 15px;
`;

const ProfileTextBox = styled(View)`
  margin-left: 10px;
`;

const Title = styled(Text)`
  font-weight: bold;
  font-size: 18px;
`;

const PetImage = styled(Image)`
  width: 180px;
  height: 180px;
`;

const PetImageBox = styled(View)`
  margin-top: 10px;
`;
