import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeComponents = ({ text, background, navigationScreen, sectionTextId }) => {
  return (
    <TouchableOpacity onPress={navigationScreen}>
      <View style={styles.sections} backgroundColor={background}>
        <Text style={styles.text} testID={`homeSectionText-${sectionTextId}`}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  sections: {
    margin: 5,
    height: 100,
    width: 350,
    borderWidth: 2,
    borderColor: 'black',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 30,
    alignSelf: 'center',
  },
});

export default HomeComponents;
