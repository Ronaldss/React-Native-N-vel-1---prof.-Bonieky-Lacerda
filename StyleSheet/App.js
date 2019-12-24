import React, { Component } from 'react';
import { Text } from 'react-native';

export default class PrimeiroNome extends Component {
  render(){
    return(
      <Text>Ronald</Text>
    );
  }
};

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