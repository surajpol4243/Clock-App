import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';


const CustomTextInput = ({ style, onTextChange, inputContinerStyle = {}, placeholder = "Enter", continerStyle = {} }) => {
    return (
        <View style={[styles.continer, continerStyle]}>
            <TextInput
                placeholder={placeholder}
                style={[styles.inputContiner, inputContinerStyle]}
                onChangeText={onTextChange}
            />
        </View>
    )
};
export default CustomTextInput;
const styles = StyleSheet.create({
    continer: {
        borderWidth: 1,
        borderColor: Colors.PRIMARY_BLUE,
        borderRadius: 10,
        width: "90%",
        alignSelf: "center",
        paddingLeft: 10,
        backgroundColor: Colors.BLACK_20
    },
    inputContiner: {
        color: Colors.WHITE
    }
})