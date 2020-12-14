import React, {useState} from 'react';
import styled from 'styled-components';
import {View} from 'react-native';
import {SearchBar as Search, Button} from 'react-native-elements';

const indexContainerStyle = {
  borderRadius: 30,
  borderColor: 'lightgrey',
  borderWidth: 1,
  marginLeft: 5,
};

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <>
      <SearchBarView>
        <Search
          value={searchValue}
          onChangeText={(value) => setSearchValue(value)}
          placeholder="검색어를 입력하세요."
          platform="android"
          containerStyle={{
            height: 48,
            marginTop: 10,
            marginBottom: 10,
            paddingTop: -20,
            borderRadius: 10,
            borderColor: 'lightgrey',
            borderWidth: 1,
          }}
        />
      </SearchBarView>
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'flex-start',
        }}>
        <IndexButton
          titleStyle={{color: 'grey', fontSize: 15}}
          containerStyle={indexContainerStyle}
          type="clear"
          title="강아지"
        />
        <IndexButton
          titleStyle={{color: 'grey', fontSize: 15}}
          containerStyle={indexContainerStyle}
          type="clear"
          title="고양이"
        />
        <IndexButton
          titleStyle={{color: 'grey', fontSize: 15}}
          containerStyle={indexContainerStyle}
          type="clear"
          title="입양을 기다려요"
        />
      </View>
    </>
  );
};

export default SearchBar;

const SearchBarView = styled(View)`
  width: 100%;
`;

const IndexButton = styled(Button)``;
