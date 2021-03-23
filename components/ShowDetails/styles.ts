import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  moviePreview: {
    width: '100%',
    aspectRatio: 16 / 9,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  match: {
    color: '#00aa00',
    fontWeight: 'bold',
    marginRight: 5,
  },
  subtext: {
    color: '#757575',
    marginRight: 5,
  },
  ageContainer: {
    backgroundColor: '#e6e229',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    paddingHorizontal: 3,
    marginRight: 5,
    maxHeight: 20,
  },
  age: {
    color: 'black',
    fontWeight: 'bold',
  },
  playButton: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    padding: 8,
    marginVertical: 5,
  },
  playButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  downloadButton: {
    backgroundColor: '#2b2b2b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    padding: 8,
    marginVertical: 5,
  },
  downloadButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
