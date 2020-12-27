import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

import Header from '../components/Header';
import Footer from '../components/Footer';
import {PermissionsAndroid} from 'react-native';
import {Button} from 'react-native-elements';

const requestPermission = async () => {
  try {
    return await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
  } catch (e) {
    console.log(e);
  }
};

const MainScreen = ({navigation}) => {
  const [location, setLocation] = useState();
  const [refreshLocation, setRefreshLocation] = useState(false);

  useEffect(() => {
    requestPermission().then((result) => {
      console.log({result});
      if (result === 'granted') {
        Geolocation.getCurrentPosition(
          (pos) => {
            setLocation(pos.coords);
            console.log(pos.coords);
          },
          (error) => {
            console.log(error);
          },
          {
            enableHighAccuracy: true,
            timeout: 3600,
          },
        );
      }
    });
  }, [refreshLocation]);

  const [region, setRegion] = useState({
    latitude: 37.4995042,
    longitude: 127.1098713,
    latitudeDelta: 0.008,
    longitudeDelta: 0.008,
  });

  if (!location) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: 15,
          paddingBottom: -15,
        }}>
        <Header text={'내 주변 실종 동물'} />
        <MapView
          style={{width: '100%', height: '78%'}}
          provider={PROVIDER_GOOGLE}
          initialRegion={region}>
          <Marker coordinate={region} title="현 위치"></Marker>
        </MapView>
        <Footer nav={navigation} />
      </View>
    );
  } else {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: 15,
          paddingBottom: -15,
        }}>
        <Header text={'내 주변 실종 동물'} />
        <View style={{flexDirection: 'row'}}>
          <Button
            title="현 위치로"
            titleStyle={{fontSize: 14, paddingTop: -5}}
            type="clear"
            onPress={() => setRefreshLocation(!refreshLocation)}></Button>
        </View>
        <MapView
          style={{width: '100%', height: '78.5%'}}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}>
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
            title="현 위치"></Marker>
          <Marker
            coordinate={{
              latitude: 37.505236,
              longitude: 127.105737,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
            title="강아지를 찾아요"></Marker>
          <Marker
            coordinate={{
              latitude: 37.506627,
              longitude: 127.106616,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
            title="강아지를 찾아요"></Marker>
          <Marker
            coordinate={{
              latitude: 37.50355,
              longitude: 127.107142,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
            title="강아지를 찾아요"></Marker>
        </MapView>
        <Footer nav={navigation} />
      </View>
    );
  }
};

export default MainScreen;
