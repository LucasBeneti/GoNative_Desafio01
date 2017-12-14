import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';

//import './config/ReactotronConfig';

//console.tron.log('Hello Gonative!'); //utilizacao do tron, criado no ReactotronConfig

import Post from './components/Posts';

export default class App extends Component {
  
  state = {
    posts: [
    {
      id: 0,
      title: 'Aprendendo React Native',
      author: 'Lucas Beneti',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra mattis enim eu pharetra. Aliquam enim nisi, dictum sed molestie luctus, pellentesque a nisl. Nam lacus massa, ullamcorper id tortor nec, imperdiet pharetra metus. Quisque odio ante, ultrices a velit vitae, venenatis lacinia lectus. Nam blandit bibendum nisi ac auctor. In hac habitasse platea dictumst.',
    },
    {
      id: 1,
      title: 'Aprendendo com GoNative',
      author: 'Lucas Beneti',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra mattis enim eu pharetra. Aliquam enim nisi, dictum sed molestie luctus, pellentesque a nisl. Nam lacus massa, ullamcorper id tortor nec, imperdiet pharetra metus. Quisque odio ante, ultrices a velit vitae, venenatis lacinia lectus. Nam blandit bibendum nisi ac auctor. In hac habitasse platea dictumst.',
    },
    {
      id: 2,
      title: 'Aprendendo com GoNative',
      author: 'Lucas Beneti',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra mattis enim eu pharetra. Aliquam enim nisi, dictum sed molestie luctus, pellentesque a nisl. Nam lacus massa, ullamcorper id tortor nec, imperdiet pharetra metus. Quisque odio ante, ultrices a velit vitae, venenatis lacinia lectus. Nam blandit bibendum nisi ac auctor. In hac habitasse platea dictumst.',
    },
    {
      id: 3,
      title: 'Aprendendo com GoNative',
      author: 'Lucas Beneti',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra mattis enim eu pharetra. Aliquam enim nisi, dictum sed molestie luctus, pellentesque a nisl. Nam lacus massa, ullamcorper id tortor nec, imperdiet pharetra metus. Quisque odio ante, ultrices a velit vitae, venenatis lacinia lectus. Nam blandit bibendum nisi ac auctor. In hac habitasse platea dictumst.',
    }
  ],
};
  
  addNewPost = () => {
    this.setState({
      posts: [
        ...this.state.posts,
        {
          id: Math.random(),
          title: 'Aprendendo React Native',
          author: 'Lucas Beneti',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra mattis enim eu pharetra. Aliquam enim nisi, dictum sed molestie luctus, pellentesque a nisl. Nam lacus massa, ullamcorper id tortor nec, imperdiet pharetra metus. Quisque odio ante, ultrices a velit vitae, venenatis lacinia lectus. Nam blandit bibendum nisi ac auctor. In hac habitasse platea dictumst. Etiam nec sollicitudin est. Sed iaculis viverra aliquam. In posuere aliquam elit eget blandit.',
        },
      ]
    });
  };
  render() {
    return (
      <View style={styles.container}>
       <View style = {styles.header}>
        <Text style={styles.headerText}>GoNative App</Text>
      </View>
       
       <ScrollView>
        { this.state.posts.map( post =>( <Post key={post.id} post={post} />)) }
       </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EE7777',
    
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    
  },
  headerText: {
    color: '#333333',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1 //o componente pega todo o espaço dele
  }
});
