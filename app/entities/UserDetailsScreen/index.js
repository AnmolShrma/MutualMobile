import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const UserDetailsScreen = (props) => {
  const {userDetails} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.userDetails}>User name - {userDetails.username}</Text>
      <Text style={styles.userDetails}>Full name - {userDetails.name}</Text>
      <Text style={styles.userDetails}>Email - {userDetails.email}</Text>
      <Text style={styles.userDetails}>Website - {userDetails.website}</Text>
      <Text style={styles.userDetails}>Company details :- </Text>
      <Text style={styles.companyDetails}>{userDetails.company.name}</Text>
      <Text style={styles.companyDetails}>
        {userDetails.company.catchPhrase}
      </Text>
      <Text style={styles.companyDetails}>{userDetails.company.bs}</Text>
    </View>
  );
};

export default UserDetailsScreen;
