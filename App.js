import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  Button,
  Alert,
  StyleSheet,
} from 'react-native';

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Code Editor</Text>
        <View style={{flex:1,flexDirection:'row',}}>
        <Text style={styles.lineColumn}>1</Text>
          <TextInput style={styles.inputBox}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    backgroundColor: '#000000',
    color: '#ffffff',
    textAlign: 'center',
  },
  // editorWrap: {
  //   flex: 1,
  //   flexDirection:'row',
  // },
  inputBox: {
    borderStyle: 'solid',
    borderColor:'#000000',
    borderWidth:2,
    height: 400,
    width:'360',
    textAlignVertical: 'top',
    backgroundColor: '#d2d2e6',
  },
  lineColumn: {
    textAlign:'center',
    width: 50,
    height: 400,
    backgroundColor:'lightgray'
  },
});
