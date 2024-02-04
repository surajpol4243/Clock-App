import React, { useDebugValue, useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Colors from "../../../constants/Colors";

const HomeScreen = (props) => {
    const [userData, setUserData] = useState()

    useEffect(() => {
        const userData = props.data.userInfo;
        console.log(userData);
        try {
            if (userData) {
                setUserData(userData);
            }
        } catch (error) {
            console.error("Error at Home screen setUser: ", error)
        }
    }, [])
    const Header = () => {
        return (
            <View style={{padding : 10 }}>
                <Text style ={{fontSize: 20}} >Welcome, <Text style={{color:Colors.PRIMARY_BLUE}}>{userData?.userName}</Text></Text>
            </View>
        )
    }
    return (
        <View style={styles.continer}>
            {Header()}
            <View style={styles.headerContiner}>
                <Text style={styles.headerText}>Alerm App</Text>
            </View>
        </View>
    );
};

const mapStateToProps = (state) => {
    return {
        data: state.dataReducer
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
    continer: {
        flex: 1,
        backgroundColor: "rgb(40,40,40)"
    },
    headerContiner: {
        flex: 1,
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
        backgroundColor: "#FFBF00"
    },
    getStatedBtnText: {
        fontSize: 20,
        color: "rgb(40,40,40)",
        fontWeight: "bold"
    }
})