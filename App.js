import React, {useId, useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {firestore } from './firrebase'

const App = () => {
const [position, setPosition] = useState({
latitude: -31.308840,
longitude: -54.113702,
latitudeDelta: 0.0922,
longitudeDelta: 0.0421,
});
const [titulo, setTitulo] = useState('');
const [descricao, setDescriacao] = useState('');

const ref = firestore.collection('Marcador').doc();
const enviarDados = () => {
    ref.set({
      longitude:  position.longitude,
      latitude:   position.latitude, 
      titulo: titulo,
      descricao: descricao,
      id: ref.id,
    })
    .then(() => {
      alert('Marcador adicionado com sucesso');
    });
 }

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
description={descricao}
/>
</MapView>

<TextInput
          placeholder="Titulo"
          value={titulo}
          onChangeText={text => setTitulo(text)}
          style = {styles.texto}
        />

<TextInput
          placeholder="Descrição"
          value={descricao}
          onChangeText={text => setDescriacao(text)}
          style = {styles.texto}
        />
<Text>Latitude: {position.latitude}</Text>
<Text>longitude: {position.longitude}</Text>

<TouchableOpacity
          onPress={enviarDados}
        >
          <Text> Salvar Marcador </Text>
</TouchableOpacity>

</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
},
map: {
height: '50%',
width: '100%',
},

texto:{
    backgroundColor: "White",
    marginTop: 30,
    color: 'black',

}
});
export default App;