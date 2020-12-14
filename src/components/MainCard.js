import React, {useState} from 'react';
import styled from 'styled-components';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {Icon} from 'react-native-elements';

const imageSize = {
  width: 180,
  height: 180,
  marginTop: 10,
};

const MainCard = ({data, handleMainScreen}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [item, setItem] = useState(data);
  return (
    <View
      style={{
        flexDirection: 'column',
      }}>
      <TouchableOpacity onPress={() => handleMainScreen(item)}>
        <Image
          style={imageSize}
          source={{
            uri: item.image_url,
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <CardInfoText>
          #{item.type} #{item.id}
        </CardInfoText>
        <TouchableOpacity onPress={() => setIsSelected(!isSelected)}>
          {isSelected ? (
            <Icon name="heart" type="font-awesome" color="#f50" size={20.5} />
          ) : (
            <Icon name="heart" type="font-awesome-5" color="#f50" size={20} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainCard;

const CardInfoText = styled(Text)`
  font-weight: bold;
`;
