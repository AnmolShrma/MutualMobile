import React, {useEffect, useState} from 'react';
import PostDetailsScreen from '../../entities/PostDetailsScreen';
import {readPostComments} from '../../services/postList';

const PostDetails = ({navigation, route}) => {
  const {postDetails, userName} = route.params;
  const [postComments, setPostComments] = useState([]);
  const [loading, setLoader] = useState(false);
  useEffect(() => {
    const getComments = async () => {
      try {
        setLoader(true);
        const response = await readPostComments(postDetails.id);
        setLoader(false);
        setPostComments(response);
      } catch (e) {
        setLoader(false);
        console.log('getComments error log:', e);
      }
    };
    getComments();
  }, []);
  return (
    <PostDetailsScreen
      postTitle={postDetails?.title}
      userName={userName}
      loaderStatus={loading}
      postComments={postComments}
    />
  );
};

export default PostDetails;
