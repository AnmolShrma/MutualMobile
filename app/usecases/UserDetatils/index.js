import React from 'react';
import UserDetailsScreen from '../../entities/UserDetailsScreen';

const UserDetails = ({route}) => {
  const {userDetails} = route.params;
  return <UserDetailsScreen userDetails={userDetails} />;
};

export default UserDetails;
