import React from 'react';
import {SafeAreaView, Image, StyleSheet, Text, View} from 'react-native';
import logo from '../assets/logo.png';

export default function() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} />
      <View style={styles.cardsContainer}>
        <View style={[styles.card, {zIndex: 1}]}>
          <Image
            style={styles.avatar}
            source={{
              uri:
                'https://avatars0.githubusercontent.com/u/42836882?s=460&v=4',
            }}
          />
          <View style={styles.footer}>
            <Text style={styles.name}>Valdeilson Ramos</Text>
            <Text style={styles.bio} numberOfLines={3}>
              Sou eu mesmo
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardsContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    maxHeight: 500,
  },
  card: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    margin: 30,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  avatar: {
    flex: 1,
    height: 400,
  },
  footer: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  bio: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
    lineHeight: 18,
  },
});
