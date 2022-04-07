import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Button,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import PostsStyle from './Posts.style';
import {getPosts} from '../services';
import Post from './Post';

const Posts = ({navigation}) => {
  const [postList, setPostList] = useState([]);

  const fetchPostList = async () => {
    const posts = await getPosts();
    setPostList(posts);
  };

  useEffect(() => {
    fetchPostList();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={PostsStyle.posts}>
          <Text
            style={{
              fontSize: 30,
              color: 'black',
              paddingBottom: 40,
              paddingLeft: 10,
            }}>
            Posts
          </Text>
          <View>
            <ActivityIndicator
              size="small"
              animating={postList === undefined}
              color="#6c6eff"
            />
          </View>
          {postList &&
            postList.map(p => (
              <TouchableOpacity
                style={{paddingBottom: 30}}
                onPress={() =>
                  navigation.navigate('PostNComments', {postId: p.id})
                }>
                <Post data={{...p}} />
                <View
                  style={{
                    height: 2,
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      display: 'flex',
                      flex: 1,
                      borderRadius: 5,
                      flexDirection: 'row',
                      backgroundColor: '#efeff4',
                    }}
                  />
                </View>
              </TouchableOpacity>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Posts;
