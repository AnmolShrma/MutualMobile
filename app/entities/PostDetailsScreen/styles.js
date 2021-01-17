import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  mainContainer: {
    flex: 1,
    padding: 10,
  },
  postDetailsContainer: {
    flex: 1,
    width: '90%',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'center',
    backgroundColor: 'white',
    marginBottom: 20,
    padding: 20,
  },
  textStyle: {
    margin: 2,
    marginBottom: 30,
  },
  commentListContainer: {
    flex: 4,
    width: '90%',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'center',
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 20,
  },
  commentContainer: {
    flex: 1,
    width: '90%',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'center',
    backgroundColor: 'white',
    marginBottom: 20,
    padding: 20,
  },
});

export default styles;
