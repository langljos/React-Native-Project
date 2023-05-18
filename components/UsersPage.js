import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import UserCard from './UserCard';
import AddNewButton from './AddNewButton';

const UsersPage = () => {
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
        await fetch('https://random-data-api.com/api/v2/users?size=20&is_xml=true', {
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

  const addNewUser = (newUser) => {
    setItems([newUser, ...items]);
  };

  const deleteUser = (username) => {
    const updatedItems = items.filter((item) => item.username !== username);
    setItems(updatedItems);
  };

  return (
    <View style={styles.container}>
      {getContent()}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          {items.map((item) => (
            <UserCard
              key={item.username}
              firstName={item.first_name}
              lastName={item.last_name}
              userName={item.username}
              email={item.email}
              avatar={item.avatar}
              deleteUser={deleteUser}
            />
          ))}
        </View>
      </ScrollView>
      <View style={styles.addButtonContainer}>
        <AddNewButton addNewUser={addNewUser} />
      </View>
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

export default UsersPage;