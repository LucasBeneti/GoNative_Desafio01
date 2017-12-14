import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Post = ({post}) => (
    <View style={styles.postContainer}>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.author}>{post.author}</Text>
        <Text style={styles.description}>{post.description}</Text>
    </View>
);

Post.propTypes = { //seta qual tipo das props que o componente usa
    post: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        author: PropTypes.string,
        description: PropTypes.string,
    }).isRequired, //o isRequired é usado pra ser obrigatorio passar as props
}

const styles = StyleSheet.create({
    postContainer: {   
        padding: 20,
        marginTop: 20, //tive que setar separadas as margens pq dava uma dupla margem em cima se nao especificasse
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
    },
  
    title: {
       fontSize: 20,
       color: '#333333',
       fontWeight: 'bold',
       shadowColor: '#DA6C6C', // não sei se as sombras estão funcionando
       shadowOffset: { width: 0, height: 10 },
       shadowRadius: 5,
       shadowOpacity: 100
    },
    
    author: {
        color: '#999999',
        borderBottomWidth: 1,
        borderColor:  '#EEEEEE',   
    },
  
    description: {
        fontSize: 14,
        color: '#666666',
        marginTop: 10,
    },
  });

  export default Post;