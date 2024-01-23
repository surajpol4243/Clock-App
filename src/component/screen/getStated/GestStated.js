import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";
import CustomTextInput from "../../common/CustomTextInput";
import DropDownPicker from "react-native-dropdown-picker";
import Colors from "../../../constants/Colors";
import { requestGetTimeZone } from "../../../redux/actions/actionCreators/commonActionCreators";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const GetStatedScreen = (props) => {
    const [isDropOpen, setDropOpen] = useState(false);
    const [timeZoneList, setTimeZoneList] = useState([]);
    const [zoneList, setZoneList] = useState([])
    const [isOpen, setOpen] = useState(false)
    const [userName, setUserName] = useState(null)
    const [value, setValue] = useState(null);
    const navigation = useNavigation();

    useEffect(() => {
        props.requestGetTimeZone();
    }, [])

    useEffect(() => {
        const timeZoneData = props.data.timeZoneListData;

        try {
            if (timeZoneData != undefined && timeZoneData?.length != 0) {
                var i = 0;
                var tempZoneArray = [];
                for (i; i < timeZoneData?.length; i++) {
                    tempZoneArray[i] = { label: timeZoneData[i], value: timeZoneData[i], key: i }
                };
                setTimeout(() => {
                    setTimeZoneList(tempZoneArray)
                }, Platform.OS == "android" ? 0 : 200);
            }
        } catch (error) {
            console.log("Error At:GetStated Screen timeZoneListData: ", error);
        }
    }, [props.data.timeZoneListData])

    return (
        <View style={styles.continer}>
            <View style={styles.logoContiner}>
                <Image source={{ uri: 'clock_app_logo' }} style={styles.logo} />
                <Text style={styles.logoText}>Alerm App</Text>
            </View>
            <View style={styles.inputFieldForm}>
                <CustomTextInput continerStyle={styles.textInputDdecoration} placeholder="Enter your name" onTextChange={setUserName} />
                <View style={styles.dropDownParentContiner}>
                    <DropDownPicker
                        itemKey="key"
                        value={value}
                        setValue={setValue}
                        style={styles.dropDownStyle}
                        items={timeZoneList}
                        open={isDropOpen}
                        setOpen={setDropOpen}
                        containerStyle={{}}
                        dropDownContainerStyle={styles.dropDownContainderStlye}
                        theme="DARK"
                        arrowIconStyle={{ tintColor: Colors.WHITE }}
                        searchContainerStyle={{ borderWidth: 0 }}
                        searchTextInputStyle={{ borderColor: Colors.GRAY_TRANSPARENT }}
                        searchable={true}
                        searchPlaceholder="Search your time-zone"
                    />
                </View>
            </View>
            <View style={{ flex: 0.25 }}>
                <TouchableOpacity
                    style={[styles.getStartContiner, { opacity: (userName == null || value == null) ? 0.5 : 1 }]}
                    disabled={userName == null || value == null}
                    onPress={() => { 

                        props.navigation.navigate("HomeScreen")
                         }} >
                    <Text style={styles.startButtonText}>Get Stated {">"}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const mapStateToProps = (state) => {
    return {
        data: state.dataReducer
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    requestGetTimeZone
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GetStatedScreen);
