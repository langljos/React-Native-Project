import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const DeleteButton = (props) => {
    const deleteUser = props.deleteUser;
    const username = props.username;


    const deleteItem = () => {
        deleteUser(username);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={deleteItem}>
                <Text style={styles.buttonText}>DELETE</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'red',
        borderRadius: 8,
        paddingVertical: 6,
        paddingHorizontal: 12,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default DeleteButton;