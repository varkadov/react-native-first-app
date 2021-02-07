import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingTop: 60,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
  },
  input: {
    padding: 10,
    marginBottom: 10,
    fontSize: 20,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#fff',
    width: '100%',
  },
  controls: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
  },
});
