//
// Alunos, o Exemplo base foi retirado do site
// https://devsamurai.com.br/react-native-mapa-geolocalizacao/
//
import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableWithoutFeedback} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
const App = () => {
const [position, setPosition] = useState({
latitude: -31.308840,
longitude: -54.113702,
latitudeDelta: 0.0922,
longitudeDelta: 0.0421,
});
const [titulo, setTitulo] = useState('');

return (
<View style={styles.container}>
<MapView
style={styles.map}
region={position}
onPress={e =>setPosition({...position,
    latitude: e.nativeEvent.coordinate.latitude,
    longitude: e.nativeEvent.coordinate.longitude,
    latitudeDelta:e.nativeEvent.coordinate.latitudeDelta,
    longitudeDelta:e.nativeEvent.coordinate.longitudeDelta
})
}>
<Marker
coordinate={position}
title={titulo}
description={'Testando o marcador no mapa'}
/>
</MapView>

<TextInput
          placeholder="Titulo"
          value={titulo}
          onChangeText={text => setTitulo(text)}
          style = {styles.texto}
        />
<Text>Latitude: {position.latitude}</Text>
<Text>longitude: {position.longitude}</Text>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
},
map: {
height: '80%',
width: '100%',
},

texto:{
    backgroundColor: "White",
    marginTop: 30,
    color: 'black',

}
});
export default App;