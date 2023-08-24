import { View, Text, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { setItem } from '../utils/asyncStorage';

const {width,height} = Dimensions.get('window');

export default function OnBoardingScreen() {
  const navigation = useNavigation();
  const handleDone = ()=>{
    navigation.navigate('Home');
    setItem('onboarded','1');
  }
  
  return (
    <View style={styles.container}>
      <Onboarding
      onDone={handleDone}
      onSkip={handleDone}
      containerStyles={{paddingHorizontal: 15}}
        pages={[
          {
            backgroundColor: '#a7f3d0',
            image: (
              <View style={styles.lottie}>
                <LottieView source={require('../assets/animations/a.json')} autoPlay loop />
              </View>
            ),
            title: 'Be Productive',
            subtitle: 'For a good and efficient day!',
          },
          {
            backgroundColor: '#fef3c7',
            image: (
              <View style={styles.lottie}>
                <LottieView source={require('../assets/animations/achieve.json')} autoPlay loop />
              </View>
            ),
            title: 'Achieve Success',
            subtitle: 'Strive, Thrive, Succeed!!',
          },
          {
            backgroundColor: '#a78bfa',
            image: (
              <View style={styles.lottie}>
                <LottieView source={require('../assets/animations/work.json')} autoPlay loop />
              </View>
            ),
            title: 'Stay Focused',
            subtitle: 'Get your work done seamlessly without interruption',
          },
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  lottie: {
    width: width*0.9,
    height:width
  },
  // doneButton: {
  //   padding: 20,
  //   backgroundColor: 'white',
  //   borderTopLeftRadius: 100,
  //   borderBottomLeftRadius: 100,
  // }
})