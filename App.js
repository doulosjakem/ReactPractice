import React from 'react';
import {FlatList, Image, View, Text, StyleSheet} from 'react-native';

// const textStyles = {fontSize: 56};
// const imageStyles = {marginBottom: 8};

// const SampleImageList = () =>
//   Array(5)
//     .fill(src)
//     .map((p, i) => <Image style={imageStyles} source={p} key={i} />);
// Image source
// const src = {
//   uri: 'https://www.ilponticello.net/wp-content/uploads/2019/10/donkey-2996965_1920.jpg',
//   width: 96,
//   height: 96,
// };

// Sample data
const data = [
  {name: 'John Owen', years: ' Lived: 1616-1683'},
  {name: 'Jonathan Edwards', years: ' Lived: 1703-1758'},
  {name: 'G.K. Chesterton', years: ' Lived: 1874–1936'},
  {name: 'Thomas Watson', years: ' Lived: 1874-1956'},
  {name: 'Jeremiah Burroughs', years: ' Lived: 1599-1646'},

  {name: 'John Winthrop', years: ' Lived: 1588-1649'},
  {name: 'Anne Hutchinson', years: ' Lived: 1591-1643'},
  {name: 'Roger Williams', years: ' Lived: 1603-1683'},
  {name: 'Thomas Hooker', years: ' Lived: 1586-1647'},
  {name: 'John Cotton', years: ' Lived: 1585-1652'},

  {name: 'Increase Mather', years: ' Lived: 1639-1723'},
  {name: 'Cotton Mather', years: ' Lived: 1663-1728'},
  {name: 'John Davenport', years: ' Lived: 1597-1670'},
  {name: 'John Eliot', years: ' Lived: 1604-1690'},
  {name: 'Richard Sibbes', years: ' Lived: 1577-1635'},

  {name: 'John Bunyan', years: ' Lived: 1628-1688'},
  {name: 'John Flavel', years: ' Lived: 1627-1691'},
  {name: 'Charles Spurgeon', years: ' Lived: 1834-1892'},
  {name: 'John Calvin', years: ' Lived: 1509-1564'},
  {name: 'John Knox', years: ' Lived: 1514-1572'},
];
// In your code, you're probably not rendering the same picture 5
// times over, but just go with it
const Item = ({name, years}) => (
  <View style={styles.flatList}>
    <Text style={styles.flatList}>
      {name}, {years}
    </Text>
  </View>
);

const App = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.header}>CWI</Text>
    </View>

    <View style={styles.listContainer}>
      <FlatList
        data={data}
        renderItem={({item}) => <Item name={item.name} years={item.years} />}
      />
    </View>

    <View style={styles.footer}>
      <Text style={styles.footer}>Jake Miller</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  flatList: {
    textAlign: 'center',
    alignContent: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'tan',
    justifyContent: 'center',
    marginTop: 5,
  },
  listContainer: {
    display: 'flex',
    backgroundColor: 'tan',
    textAlign: 'center',
    textAlignVertical: 'center',
    flex: 80,
    fontSize: 22,
    color: 'white',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  header: {
    display: 'flex',
    backgroundColor: 'forestgreen',
    textAlign: 'center',
    textAlignVertical: 'center',
    flex: 10,
    fontSize: 40,
    color: 'white',
  },
  footer: {
    display: 'flex',
    backgroundColor: 'teal',
    textAlign: 'center',
    textAlignVertical: 'center',
    flex: 10,
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
