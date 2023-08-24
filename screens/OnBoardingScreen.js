import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';



export default function OnBoardingScreen() {
  return (
    <View style={styles.container}>
      <Onboarding
      containerStyles={{paddingHorizontal: 15}}
        pages={[
          {
            backgroundColor: '#fff',
            image: (
              <View style={styles.lottie}>
                <LottieView source={require('../assets/animations/wakeup.json')} autoPlay loop />
              </View>
            ),
            title: 'Wake Up Early',
            subtitle: 'For a good and productive day!',
          },
          {
            backgroundColor: '#fff',
            image: (
              <View>
                <Text>Hello Chirag</Text>
              </View>
            ),
            title: 'Eat Healthy',
            subtitle: 'To stay Fit and Energitic!!',
          },
          {
            backgroundColor: '#fff',
            image: (
              <View>
                <Text>Hello Chirag</Text>
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
    width: 300,
    height: 300,
  }
})