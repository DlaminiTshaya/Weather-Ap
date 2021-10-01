import  React,{useState,useEffect} from 'react';
import { Text, View, StyleSheet, ImageBackground,Dimensions} from 'react-native';
import SearchBar from "./SearchBar"
const sun = require('../assets/pexels-photo-186980.jpeg')
const snow = require('../assets/96284_ESP20200109SNOWAFP_1610205912316.jpeg')
const haze = require("../assets/pexels-photo-1162251.jpeg")
const rain = require('../assets/Weather.jpeg')
export default function Weather({weatherData}) {
  const [background, setBackground]= useState("")
  const {weather,
  name,
  main:{temp, humidity}}= weatherData;
  const [{main}]=weather;
  useEffect(()=>{
   setBackground(getBackgroungImg(main))
  },[weatherData])
  const getBackgroungImg=(weather)=>{
      if(weather=== "Sow"){
        return {snow}}
        if(weather=== "Clear"){
        return {sun}}
        if(weather=== "Rain"){
        return {rain}}
        if(weather=== "Haze"){
        return {haze}}
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.back} resizeMode="cover"></ImageBackground> 
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
   
    padding: 24,
  },
 
});
