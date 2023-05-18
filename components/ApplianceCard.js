import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ApplianceCard = ({ brand, equipment }) => {

    return (
        <View style={styles.card}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{brand}</Text>
                <Text style={styles.subtitle}>Brand</Text>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.description}>{equipment}</Text>
                <Text style={styles.subtitle}>Appliance</Text>
            </View>
            
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
      titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
      },
      description: {
        fontSize: 16,
        color: '#333333',
      },
      subtitle: {
        fontSize: 14,
        color: '#777777',
      },
    });

export default ApplianceCard;