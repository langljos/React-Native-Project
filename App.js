console.disableYellowBox = true;
import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import UsersPage from './components/UsersPage';
import AppliancesPage from './components/AppliancesPage';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen
          name="Users"
          component={UsersPage}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="users" color={color} size={size} />
            ),
          }}
        >

        </Tab.Screen>
        <Tab.Screen name="Appliances"
          component={AppliancesPage}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="package" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
