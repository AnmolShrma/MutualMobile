import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import styles from './styles';

const PostDetailsScreen = (props) => {
  const {postComments, loaderStatus, postTitle, userName} = props;
  const renderComments = ({item}) => {
    return (
      <View style={styles.commentContainer}>
        <Text style={styles.textStyle}>Subject - {item.name}</Text>
        <Text style={styles.textStyle}>Comment body - {item.body}</Text>
        <Text style={styles.textStyle}>Email - {item.email}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {loaderStatus ? (
        <ActivityIndicator size="large" />
      ) : (
        <View style={styles.mainContainer}>
          <View style={styles.postDetailsContainer}>
            <Text style={styles.textStyle}>Title - {postTitle}</Text>
            <Text style={styles.textStyle}>Post creator - {userName}</Text>
          </View>
          <View style={styles.commentListContainer}>
            <FlatList
              data={postComments}
              extraData={postComments}
              renderItem={renderComments}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default PostDetailsScreen;
