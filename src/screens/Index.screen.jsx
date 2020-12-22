// BASIC:
import React, { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';

// UTILITIES:
import BlogContext from '../context/Root.context';

// Index SCREEN:=>
const IndexScreen = () => {
  const {} = useContext(BlogContext);

  return (
    <View style={Styles.container}>
      <Text>Home</Text>
    </View>
  );
};

// write screen style:
const Styles = StyleSheet.create({
  // screen wrapper:
  container: {},
});

export default IndexScreen;
