import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
    return (
        <View style={styles.continer}>
            <View style={styles.headerContiner}>
                <Text style={styles.headerText}>Alerm App</Text>
            </View>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    continer: {
        flex: 1,
        backgroundColor: "rgb(40,40,40)"
    },
    headerContiner: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'red',
        paddingTop: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerLogo: {
        height: 200,
        width: 200
    },
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 15
    },
    bottomContienr: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    getStatedButton: {
        height: 51,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: 'center',
        width: "70%",
        backgroundColor:"#FFBF00"
    },
    getStatedBtnText:{
        fontSize: 20,
        color:"rgb(40,40,40)",
        fontWeight:"bold"
    }
})