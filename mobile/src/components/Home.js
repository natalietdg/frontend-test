import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';

import HomeStyle from './Home.style';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100%',
        }}>
        <View style={HomeStyle.div}>
          <View style={{padding: 20}}>
            <Text style={{fontSize: 25, color: 'black', textAlign: 'center'}}>
              TribeHired FrontEnd Test (React Native)
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={HomeStyle.buttonStyle}
              onPress={() => navigation.navigate('Posts')}>
              <Text style={HomeStyle.textStyle}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
