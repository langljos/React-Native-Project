import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import AddItemModal from './AddItemModal';

const AddNewButton = (props) => {
    const addNewUser = props.addNewUser;
    const [isModalVisible, setModalVisible] = useState(false);

    const showModal = () => {
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={showModal}>
                <Text style={styles.buttonText}>Add User</Text>
            </TouchableOpacity>
            <AddItemModal
                hideModal={hideModal}
                visible={isModalVisible}
                addNewUser={addNewUser}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#007AFF',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 24,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default AddNewButton;