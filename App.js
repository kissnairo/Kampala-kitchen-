import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';

function QuickDeliveries() {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Quick Deliveries</Text>
    </View>
  );
}

function NextDayDelivery() {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Next Day Delivery</Text>
    </View>
  );
}

function SecludeOrders() {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Seclude Orders</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Quick Deliveries" component={QuickDeliveries} />
        <Tab.Screen name="Next Day Delivery" component={NextDayDelivery} />
        <Tab.Screen name="Seclude Orders" component={SecludeOrders} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}