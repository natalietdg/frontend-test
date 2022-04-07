import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  commentWrapper: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%'
  },
  postWrapper: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    paddingTop: 40,
    paddingBottom: 40,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
  },
  divider: {
    flex: 1,
    borderRadius: 5,
    flexDirection: 'row',
    backgroundColor: '#efeff4',
    borderStyle: 'dotted'
  },
});
