import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import Lua from './assets/lua.png'
export default function App() {
  return (
    <View style={styles.container}>
        <Image source={Lua} style={styles.img}/>
      <View style={styles.container3}>
        <Text style={styles.titulo}>Lua</Text>
        <Text style={styles.texto}>A Lua é o satélite natural do <Text style={styles.destaque}>Planeta Terra</Text>, distanciados por aproximadamente 384.405 km.</Text>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding:30
  },
  img: {
    width:100,
    height:100,
    marginBottom:50
  },
  container3: {
    borderColor:"#fff",
    borderWidth:2,
    borderRadius:15,
    borderStyle:'dotted',
    width:300,
    paddingVertical:10,
    paddingHorizontal:25,

  },
  titulo:{
    color:"#fff",
    marginBottom:20,
    fontSize:26,
    fontWeight:'bold',
    textAlign:'center',

  },
  texto:{
    color:"#fff",
    textAlign:'center',
    lineHeight:20

  },
  destaque:{
    fontStyle:'italic',
    fontWeight:'bold'
  }
});
