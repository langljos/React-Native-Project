import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, TextInput, } from 'react-native';

function user(firstName, lastName, userName, email, avatarUrl) {
  return {
    first_name: firstName,
    last_name: lastName,
    username: userName,
    email: email,
    avatar: avatarUrl
  }

}

const AddItemModal = ({ visible, hideModal, addNewUser }) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFirstNameChange = (text) => {
    setFirstName(text);
  };
  const handleLastNameChange = (text) => {
    setLastName(text);
  };



  const handleSubmit = () => {
    let lowerFirstName = firstName.toLowerCase();
    let lowerLastName = lastName.toLowerCase();
    let userName = lowerFirstName + '.' + lowerLastName;
    let email = `${userName}@email.com`;
    let avatarUrl = `https://robohash.org/${lowerFirstName}-${lowerLastName}.png`;

    console.log('Username:', userName);
    console.log('Email:', email);




    const newUser = user(firstName, lastName, userName, email, avatarUrl)

    addNewUser(newUser);
    handleClose();
  };

  handleClose = () => {
    setFirstName('');
    setLastName('');
    hideModal();

  };



  return (

    <Modal visible={visible} animationType="fade" transparent={true} onRequestClose={hideModal}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={firstName}
            onChangeText={handleFirstNameChange}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={lastName}
            onChangeText={handleLastNameChange}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.addButton} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Add User</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={hideModal}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    width: '80%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  message: {
    fontSize: 16,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  addButton: {
    backgroundColor: 'green',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  closeButton: {
    backgroundColor: 'red',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },

});

export default AddItemModal;