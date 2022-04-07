import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, View, Button, Text} from 'react-native';
import PostStyle from './Post.style';

const Post = props => {
  const {navigation, route, data, ...otherProps} = props;
  const {index, userId, body, id, title} = data;

  return (
    <View style={PostStyle.postWrapper}>
      <View style={{padding: 10}}>
        <Text style={{fontSize: 26, color: 'black'}}>{title}</Text>
      </View>
      <View style={{padding: 10}}>
        <Text style={{fontSize: 20, color: 'black'}} {...otherProps}>
          {body && body.trim()}
        </Text>
      </View>
    </View>
  );
};

export default Post;
