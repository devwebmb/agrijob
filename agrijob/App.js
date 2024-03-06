import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import globalStyles from './src/styles/globalStyles'; // Importe le style global

function App() {
  return (
    <View style={[globalStyles.reset, styles.container]}>
      <Text style={styles.title}>Accueil</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
