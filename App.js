import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
} from 'react-native';
import data from './cities.json';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const chicagoIcon = require('./images/chicago.png');

export default class App extends React.Component {

  renderRow({item}) {
    return (
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Image source={chicagoIcon} style={styles.icon} />
        </View>
        <View style={styles.info}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.address}>{item.address}</Text>
          <Text style={styles.urlmodifier}>{item.urlmodifier}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>City Guide</Text>
    <FlatList data={data} renderItem={this.renderRow} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ede2e0',
  },
  title: {
    backgroundColor: '#1c7da5',
    color: '#ede2e0',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    paddingTop: 50,
    textAlign: 'center',
  },
  row: {
    borderColor: '#7b7983',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: '#1f3243',
    borderColor: '#1f3243',
    borderRadius: 25,
    borderWidth: 1,
    justifyContent: 'center',
    height: 70,
    width: 70,
  },
  icon: {
    height: 45,
    width: 45,
  },
  name: {
    color: '#122737',
    fontSize: 18,
  },
  address: {
    color: '#3c4f62',
    fontSize: 16,
  },
  urlmodifier: {
    color: '#3c4f62',
    fontSize: 16,
    fontStyle: 'italic',
  },
  info: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
  },
});