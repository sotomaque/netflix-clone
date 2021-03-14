import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  image: {
    height: 80,
    aspectRatio: 16 / 9,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  titleContainer: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
  },
  duration: {
    color: 'darkgrey',
    fontSize: 15,
  },
  plot: {
    color: 'darkgrey',
  },
});

export default styles;
