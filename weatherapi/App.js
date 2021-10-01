import React, { useState, useEffect } from 'react';

import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  ImageBackground,
  TextInput,
  ScrollView,
  TouchableOpacity,Image
} from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import Constants from 'expo-constants';
import Weather from './components/Weather';
const sun = require('./assets/pexels-photo-186980.jpeg')
const snow = require('./assets/96284_ESP20200109SNOWAFP_1610205912316.jpeg')
const haze = require("./assets/pexels-photo-1162251.jpeg")
const rain = require('./assets/Weather.jpeg')
// You can import from local files


const time = new Date();
let month = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep', 
  'Oct',
  'Nov',
  'Dec',
];
let day = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
let mins = time.getMinutes();
let dispMins = mins < 10 ? '0' + mins : mins;
let hours = time.getHours();
let dispHours = hours < 10 ? '0' + hours : hours;
let ampm = time.getHours() >= 12 ? 'pm' : 'am';
let months = time.getMonth();
let days = time.getDay();
let date = time.getDate();

const API_key = '0a7963f23613fedfb26853f28148c6c2';

export default function App() {
  const [weatherData, setWeatherData] = useState('');
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('Kimberly');
  const [temp, setTemp] = useState('');
  const [presure, setPresure] = useState('');
  const [humidity, setHumidity] = useState('');
  const [description, setDescription] = useState('');
  const [SunS, setSunS] = useState('');
  const [sunR, setSunR] = useState('');
  const [wind, setWind] = useState('');
  const [name, setName] = useState('');

 const img = temp <20? require('./assets/Weather.jpeg'): require('./assets/pexels-photo-186980.jpeg');
 const logo= description!=="clear sky" ?require('./10d@4x.png'):require('./assets/icons8-sun-96.png');
 const celc= temp==""? " ":"°C";


function fetchWeather() {
    const API =`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${search}&appid=${API_key}`;
    fetch(API).then(success=>success.json()).then(data=>{
       Collectdata(data)
       
    })
}

  const Collectdata = (load) => {
    let { description } = load.weather;
    let { temp } = load.main;
    let { pressure } = load.main;
    let { humidity } = load.main;
    let { sunrise } = load.sys;
    let { sunset } = load.sys;
    let { speed } = load.wind;
    let { name } = load;
    setTemp(temp);
    setPresure(pressure);
    setHumidity(humidity);
    setDescription(description);
    setSunS(sunset);
    setSunR(sunrise);
    setWind(speed);
    setName(name);
     
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.back}>
        <View style={styles.vie}>
          <TextInput
            style={styles.txt}
            value={search}
            onChangeText={(search) => setSearch(search)}
          />
          <TouchableOpacity onPress={()=>fetchWeather()}>
            <FontAwesome
              name="search"
              size={24}
              color="black"
              style={{ marginTop: 4 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 31, fontWeight: 'bolder', color: 'white' }}>
            {name}
          </Text>
          <Text style={{ fontSize: 28, color: 'white', marginVertical: 5 }}>
            {hours}:{dispMins} {ampm}
          </Text>
          <Text style={{ fontSize: 23, color: 'white' }}>
            {day[days]}, {date} {month[months]}
          </Text>
          <Text
            style={{
              fontSize: 31,
              fontWeight: 'bold',
              color: 'white',
              paddingTop: 10,
            }}>
            {temp}{celc}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 80 }}>
          <View style={styles.box}>
           <Text style={{ fontWeight: 'bold' }}>Temerature :{temp}</Text>
            <Text style={{ fontWeight: 'bold' }}>Humidity :{humidity}</Text>
            <Text style={{ fontWeight: 'bold' }}>Pressure :{presure}</Text>
             <Text style={{ fontWeight: 'bold' }}>Windspeed :{wind}</Text>
          </View>
          
        </View>
        <ScrollView horizontal="true">
          <View style={styles.scroll}>
          <Image source={logo} style={styles.img}/>
          <View>
          <Text style={styles.im} >Sunday</Text>
          <Text style={{color:"#fff"}}>Day-</Text>
          <Text style={{color:"#fff"}}>Night-</Text>
          </View>
          </View>
          <View style={styles.scroll}>
          <Image source={logo} style={styles.img}/>
          <View>
          <Text style={styles.im} >Monday</Text>
          <Text style={{color:"#fff"}}>Day-</Text>
          <Text style={{color:"#fff"}}>Night-</Text>
          </View></View>
          <View style={styles.scroll}><Image source={logo} style={styles.img}/>
          <View>
          <Text style={styles.im} >Tuesday</Text>
          <Text style={{color:"#fff"}}>Day-</Text>
          <Text style={{color:"#fff"}}>Night-</Text>
          </View></View>
          <View style={styles.scroll}><Image source={logo} style={styles.img}/>
          <View>
          <Text style={styles.im} >Wednesday</Text>
          <Text style={{color:"#fff"}}>Day-</Text>
          <Text style={{color:"#fff"}}>Night-</Text>
          </View></View>
          <View style={styles.scroll}><Image source={logo} style={styles.img}/>
          <View>
          <Text style={styles.im} >Thursday</Text>
          <Text style={{color:"#fff"}}>Day-</Text>
          <Text style={{color:"#fff"}}>Night-</Text>
          </View></View>
          <View style={styles.scroll}><Image source={logo} style={styles.img}/>
          <View>
          <Text style={styles.im} >Friday</Text>
          <Text style={{color:"#fff"}}>Day-</Text>
          <Text style={{color:"#fff"}}>Night-</Text>
          </View></View>
          <View style={styles.scroll}><Image source={logo} style={styles.img}/>
          <View>
          <Text style={styles.im} >Saturday</Text>
          <Text style={{color:"#fff"}}>Day-</Text>
          <Text style={{color:"#fff"}}>Night-</Text>
          </View></View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  im:{
    backgroundColor:"#18181bcc",
    height:25,
    width:70,
    borderRadius:8,
    textAlign:"center",
    color:"#FFF",
    fontWeight:"Bold",
  borderWidth:1,
  borderColor:"white"
  },
  img:{height:90,
  width:50,
  borderRadius:10,
  marginRight:10,
  },
  scroll: {
    marginTop: 110,
    flexDirection:"row",
    height: 140,
    width: 150,
    backgroundColor: 'grey',
    opacity: 0.7,
    borderWidth: 3,
    padding: 10,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  vie: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 30,
    margin: 20,
  },
  box: {
    height: 135,
    width: 240,
    backgroundColor: 'white',
    opacity: 0.5,
    marginHorizontal: 13,
    borderRadius: 10,
    borderWidth: 7,
    borderColor: 'grey',
    padding: 10,
  },
  txt: {
    outline: 'none',
    width: '83%',
    height: 35,
    backgroundColor: 'white',
    marginLeft: 20,
  },

  back: {
    flex: 1,
    resizeMode: 'cover',
  },
});
