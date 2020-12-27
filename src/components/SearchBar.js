import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {View} from 'react-native';
import {SearchBar as Search, Button} from 'react-native-elements';

import sampleData from '../sampleData.json';

const SearchBar = ({data, setData}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const indexContainerStyle = {
    borderRadius: 30,
    borderColor: 'lightgrey',
    borderWidth: 1,
    marginLeft: 5,
  };

  useEffect(() => {
    setData(sampleData);
  }, []);

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
          onPress={() => {
            setData(sampleData);
          }}
          title="전체"
        />
        <IndexButton
          titleStyle={{color: 'grey', fontSize: 15}}
          containerStyle={indexContainerStyle}
          type="clear"
          onPress={() => {
            setIsChecked(!isChecked);
            const newData = data.filter((item) => item.type === '댕');
            setData(newData);
          }}
          title="강아지"
        />
        <IndexButton
          titleStyle={{color: 'grey', fontSize: 15}}
          containerStyle={indexContainerStyle}
          type="clear"
          onPress={() => {
            setIsChecked(!isChecked);
            const newData = data.filter((item) => item.type === '냥');
            setData(newData);
          }}
          title="고양이"
        />
        <IndexButton
          titleStyle={{color: 'grey', fontSize: 15}}
          containerStyle={indexContainerStyle}
          type="clear"
          onPress={() => {
            setIsChecked(!isChecked);
            const newData = data.filter((item) => item.adopt);
            setData(newData);
          }}
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
