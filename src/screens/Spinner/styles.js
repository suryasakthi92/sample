'use strict';
import {Dimensions} from 'react-native';
let {
  StyleSheet
} = require('react-native');
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

module.exports = StyleSheet.create({
   container: {
      flex: 1,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
       alignSelf:'center'
   },

   loadingContainer: {
     padding: 10,
     backgroundColor: '#000',
     borderRadius: 8,
     opacity: .8,
     justifyContent: 'center',
     alignItems: 'center'
   },

   loadingText: {
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    fontSize: 21,
       paddingTop:5
   },

   spinnerContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 4,

   },
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
