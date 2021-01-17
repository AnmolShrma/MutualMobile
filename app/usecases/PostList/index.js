import React, {useEffect, useState} from 'react';
import PostListScreen from '../../entities/PostListScreen';
import {readAllPosts} from '../../services/postList';
import {readUsers} from '../../services/user';

const PostList = ({navigation}) => {
  const [postData, setPostData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [loading, setLoader] = useState(false);
  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoader(true);
        const postResponse = await readAllPosts();
        const userResponse = await readUsers();
        setLoader(false);
        setPostData(postResponse);
        setUserData(userResponse);
      } catch (e) {
        setLoader(false);
        console.log('getPosts error log:', e);
      }
    };
    getPosts();
  }, []);

  const handleViewPost = (postDetails, userName) => {
    navigation.navigate('PostDetails', {postDetails, userName});
  };
  const handleUserCheckout = (userDetails) => {
    navigation.navigate('UserDetails', {userDetails});
  };
  return (
    <PostListScreen
      userData={userData}
      listData={postData}
      loaderStatus={loading}
      handleViewPost={handleViewPost}
      handleUserCheckout={handleUserCheckout}
    />
  );
};

export default PostList;
