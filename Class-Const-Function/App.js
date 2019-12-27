// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, { Component } from 'react';
import { Text, View } from 'react-native';
 
const SegundoNome = () => {
  return(
    <Text>Santos</Text>
  );
};

function terceiroNome(){
  return(
    <Text>Silva.</Text>
  );
};

export default class PrimeiroNome extends Component {

  nome = {
    primeiroNome: 'Nome',
    segundoNome: 'Santos',
    terceiroNome: 'Silva.'
  };

  render(){
    return(
      <View>
        <Text>{this.nome.primeiroNome}</Text>
        <Text>{this.nome.segundoNome}</Text>
        <Text>{this.nome.terceiroNome}</Text>
      </View>
    );
  }
};


