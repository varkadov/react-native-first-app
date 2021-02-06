import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    paddingBottom: 30,
    paddingLeft: 30,
    paddingRight: 30,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ccc',
    marginLeft: -30,
    marginRight: -30,
    paddingTop: 40,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
  },
  input: {
    padding: 10,
    fontSize: 20,
    borderColor: 'black',
    borderWidth: 1,
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  listItem: {
    marginVertical: 5,
    paddingVertical: 15,
    paddingHorizontal: 10,
    fontSize: 20,
    borderColor: '#ddd',
    borderWidth: 1,
  },
});
