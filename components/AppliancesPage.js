import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import ApplianceCard from './ApplianceCard';

const AppliancesPage = (props) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const getContent = () => {
    if (isLoading) {
      return <ActivityIndicator size="large" />;
    }
  };

  useEffect(() => {
    async function fetchUsers() {
      try {
        await fetch('https://random-data-api.com/api/v2/appliances?size=20&is_xml=true', {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        })
          .then((res) => res.json())
          .then(
            (result) => {
              setIsLoading(false);
              setItems(result);
            },
            (error) => {
              setIsLoading(false);
              setError(error);
            }
          );
      } catch (error) {
        console.log('An error occurred while fetching data:', error);
      }
    }
    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      {getContent()}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          {items.map((item) => (
            <ApplianceCard
              key={item.uid}
              brand={item.brand}
              equipment={item.equipment}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 20,
    marginTop: 20
  },
  content: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
});

export default AppliancesPage;