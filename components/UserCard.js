import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import DeleteButton from './DeleteButton'

const UserCard = ({ avatar, firstName, lastName, userName, email, deleteUser }) => {

    return (
        <View style={styles.card}>
            <Image source={{ uri: avatar }} style={styles.image} />
            <Text style={styles.title}>{firstName} {lastName}</Text>
            <Text style={styles.description}>Username: {userName}</Text>
            <Text style={styles.description}>Email: {email}</Text>
            <DeleteButton
                deleteUser={deleteUser}
                username={userName}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        width: '90%',
        alignSelf: 'center',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        color: '#777777',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginBottom: 8,
    }
});

export default UserCard;