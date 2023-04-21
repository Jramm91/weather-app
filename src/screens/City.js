import React from 'react'
import {
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  View
} from 'react-native'
import { Feather } from '@expo/vector-icons'

const City = () => {
  const {
    container,
    image,
    cityName,
    countryName,
    contentText,
    populationWrapper,
    populationText,
    sunSetRiseWrapper,
    sunSetRiseText,
  } = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/city-background.jpg')}
        style={image}
      >
        <Text style={[cityName, contentText]}>Marion</Text>
        <Text style={[countryName, contentText]}>USA</Text>
        <View style={populationWrapper}>
            <Feather name="user" size={50} color="red" />
            <Text style={populationText}>8000</Text>
        </View>
        <View style={sunSetRiseWrapper}>
            <Feather name="sunrise" size={24} color="black" />           
            <Text style={sunSetRiseText}>Sunrise</Text> 
            <Feather name="sunset" size={24} color="black" />
           <Text style={sunSetRiseText}>Sunset</Text> 

        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  image: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  contentText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white'
  },
  populationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red',
    fontWeight: 'bold'
  },
  sunSetRiseWrapper: {

  },
  sunSetRiseText: {

  }
})
export default City
