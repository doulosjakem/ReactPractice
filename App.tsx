/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Jake Miller</Text>
      <Image style={styles.image} source={require('./assets/cwi.jpeg')} />
      <View style={styles.space} />
      <Text style={styles.footer}>SWDV 265</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  header: {
    backgroundColor: 'limegreen',
    textAlign: 'center',
    textAlignVertical: 'center',
    flex: 1,
    fontSize: 40,
    color: 'white',
  },
  footer: {
    backgroundColor: 'lightblue',
    textAlign: 'center',
    textAlignVertical: 'center',
    flex: 1,
    fontSize: 40,
    color: 'white',
  },
  image: {
    width: 'auto',
    justifyContent: 'center',
    flex: 4,
  },
  space: {
    flex: 4,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
