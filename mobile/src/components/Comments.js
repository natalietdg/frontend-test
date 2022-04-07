import React, {useEffect, useState, useCallback, useLayoutEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Button,
  Text,
  TextInput,
  RefreshControl,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import {getComments, getPost} from '../services';
import Post from './Post';
import Comment from './Comment';
import CommentsStyle from './Comments.style';
import SearchIcon from '../assets/searchIcon.svg';

const Comments = ({route, navigation}) => {
  const {postId} = route.params;
  const [commentList, setCommentList] = useState(undefined);
  const [post, setPost] = useState(undefined);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [loading, setLoading] = useState(false);

  const [refreshing, setRefreshing] = useState(false);

  const wait = timeout => new Promise(resolve => setTimeout(resolve, timeout));

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    if (commentList === undefined) setRefreshing(true);
    else setRefreshing(false);
  }, [commentList]);

  const fetchKeywordResults = async searchKeyword => {
    const nameResults = await getComments(
      postId,
      `name=${searchKeyword.toLowerCase().replaceAll(' ', '+').replaceAll('\\n', '%0A')}`,
    );
    const emailResults = await getComments(
      postId,
      `email=${`${searchKeyword.charAt(0).toUpperCase()}${searchKeyword.slice(1)}`.replaceAll(' ', '+').replaceAll('\\n', '%0A')}`,
    );
    const bodyResults = await getComments(
      postId,
      `body=${searchKeyword.toLowerCase().replaceAll(' ', '+').replaceAll('\\n', '%0A')}`,
    );

    setLoading(false);
    setCommentList([...nameResults, ...emailResults, ...bodyResults]);
  };

  const fetchComments = async () => {
    const comments = await getComments(postId);
    setCommentList(comments);
    setLoading(false);
  };

  const fetchPost = async () => {
    const post = await getPost(postId);
    setPost(post);
    setLoading(false);
  };

  useEffect(() => {
    fetchComments();
    fetchPost();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Post#${postId}`,
    });
  });

  return (
    <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
      <ScrollView
        contentContainerStyle={CommentsStyle.commentWrapper}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => onRefresh()}
          />
        }>
        <View style={CommentsStyle.postWrapper}>
          <Post data={post || {}} />
        </View>
        <View style={CommentsStyle.wrapper}>
          <Text style={{fontSize: 20, color: 'black', padding: 10}}>
            Comments
          </Text>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              paddingBottom: 40,
              paddingTop: 40,
            }}>
            <TextInput
              placeholder="title name/email/body of text"
              textAlign="center"
              style={{
                borderColor: 'grey',
                borderWidth: 1,
                borderRadius: 5,
                width: 250,
                display: 'flex',
                alignItems: 'center',
              }}
              onChangeText={text => setSearchKeyword(text)}
            />
            <TouchableOpacity
              style={{
                backgroundColor: '#6c6eff',
                marginLeft: 10,
                justifyContent: 'center',
                height: 40,
                width: 50,
                borderRadius: 5,
              }}
              title="Search"
              onPress={() => {
                setLoading(true);
                if (searchKeyword === '') fetchComments();
                else fetchKeywordResults(searchKeyword);
              }}>
              <Text style={{color: 'white', textAlign: 'center'}}>Search</Text>
            </TouchableOpacity>
          </View>
          <View>
            <ActivityIndicator
              size="small"
              animating={loading}
              color="#6c6eff"
            />
          </View>
          {commentList &&
            loading === false &&
            commentList.map((c, index) => (
              <View style={{paddingLeft: 10}}>
                <Comment data={c} />
                {index < commentList.length - 1 && (
                  <View
                    style={{
                      height: 2,
                      flexDirection: 'row',
                    }}>
                    <View style={CommentsStyle.divider} />
                  </View>
                )}
              </View>
            ))}
          {!commentList && (
            <View>
              <Text>No Data Available.</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Comments;
