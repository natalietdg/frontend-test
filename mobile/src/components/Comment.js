import React from 'react';
import {View, Text} from 'react-native';
import CommentStyle from './Comment.style';

const Comment = ({data}) => {
  const {name, email, body, postId, id} = data;
  return (
    <View style={CommentStyle.divWrapper}>
      <View style={CommentStyle.titleWrapper}>
        <Text style={CommentStyle.title}>
          {name} @ <Text style={{...CommentStyle.emailWrapper}}>{email}</Text>
        </Text>
      </View>
      <View style={CommentStyle.titleWrapper}>
        <Text style={CommentStyle.bodyWrapper}>{body}</Text>
      </View>
    </View>
  );
};
export default Comment;
