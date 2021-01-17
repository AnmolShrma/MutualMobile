import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  cardContainer: {
    height: 150,
    width: '80%',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'center',
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 20,
  },
  titleContainer: {
    margin: 2,
    marginBottom: 30,
  },
  textStyle: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default styles;
