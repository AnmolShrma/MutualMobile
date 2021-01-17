import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

const PostListScreen = (props) => {
  const {
    listData,
    userData,
    loaderStatus,
    handleViewPost,
    handleUserCheckout,
  } = props;
  const renderPost = ({item}) => {
    const userObject = userData.filter((user) => user.id === item.userId);
    return (
      <TouchableOpacity
        onPress={() => handleViewPost(item, userObject[0]?.name)}
        style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.titleContainer}
          onPress={() => handleUserCheckout(userObject[0])}>
          <Text style={styles.textStyle}>Title - {item?.title}</Text>
        </TouchableOpacity>
        <Text style={styles.textStyle}>
          Post creator - {userObject[0]?.name}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {loaderStatus ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={listData}
          extraData={listData}
          renderItem={renderPost}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </SafeAreaView>
  );
};

export default PostListScreen;
