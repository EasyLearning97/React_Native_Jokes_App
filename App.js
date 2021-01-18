import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
// the ./ means same folder structure level
import Input from './Components/Input/Input';
import Tinder from './Components/Tinder/Tinder';
export default class App extends React.Component {

  state = {
    value: '',
    // array
    jokes: [],
  }

// props are a channel to pass info from an instance to the class
  render() {
    return (
      <View style={styles.container}>
        <Input
          updateJokes={(jokes) => this.setState({ jokes: jokes })}
          value={this.state.value}
          onChange={(value) => this.setState({ value: value })}
        />
        <Tinder
          jokes={this.state.jokes}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 100,
    height: 50
  }
});
