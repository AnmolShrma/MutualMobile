import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import PostList from '../../usecases/PostList';
import PostDetails from '../../usecases/PostDetails';
import UserDetails from '../../usecases/UserDetatils';

const AppStack = createStackNavigator();

export default AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName="PostList">
        <AppStack.Screen
          name="PostList"
          component={PostList}
          options={{headerShown: false}}
        />
        <AppStack.Screen
          name="PostDetails"
          component={PostDetails}
          options={{headerBackTitleVisible: false}}
        />
        <AppStack.Screen
          name="UserDetails"
          component={UserDetails}
          options={{headerBackTitleVisible: false}}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
