import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  divWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    paddingBottom: 20,
    paddingTop: 20,
  },
  emailWrapper: {
    color: 'grey',
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
  },
  title: {
    color: 'black',
    flexShrink: 1,
  },
  bodyWrapper: {
    color: 'black',
  },
});
