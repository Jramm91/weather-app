import React from 'react'
import {
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  View
} from 'react-native'
import IconText from '../components/IconText'

const City = () => {
  // Array for styles from the stylesheet
  const {
    container,
    image,
    cityName,
    countryName,
    cityCountryText,
    populationWrapper,
    populationText,
    sunSetRiseWrapper,
    sunSetRiseText,
    rowLayout
  } = styles
  
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/city-background.jpg')}
        style={image}
      >
        {/* Header for city and country name */}
        <Text style={[cityName, cityCountryText]}>Marion</Text>
        <Text style={[countryName, cityCountryText]}>USA</Text>
        {/* Population icon and amount */}
        <View style={[populationWrapper, rowLayout]}>
            <IconText 
            iconName={'user'}
            iconColor={'red'} 
            size={50} 
            bodyText={'8000'} 
            bodyTextStyles={populationText} 
            />
        </View>
        {/* Sunrise and sunset section */}
        <View style={[sunSetRiseWrapper, rowLayout]}>
          <IconText 
          iconName={'sunrise'} 
          iconColor={'white'} 
          size={50} 
          bodyText={'10:46:58am'} 
          bodyTextStyles={sunSetRiseText} 
          />
          <IconText 
          iconName={'sunset'} 
          iconColor={'white'}  
          size={50} 
          bodyText={'17:28:15pm'} 
          bodyTextStyles={sunSetRiseText} 
          />
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
  cityCountryText: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white'
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    color: 'red',
    fontWeight: 'bold'
  },
  sunSetRiseWrapper: {
    justifyContent: 'space-around',
    marginTop: 30
  },
  sunSetRiseText: {
    fontSize: 20,
    color: 'white',
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default City
