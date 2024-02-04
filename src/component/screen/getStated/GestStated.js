import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import CustomTextInput from "../../common/CustomTextInput";
import DropDownPicker from "react-native-dropdown-picker";
import Colors from "../../../constants/Colors";
import { requestGetTimeZone, reqeustSetUserData } from "../../../redux/actions/actionCreators/commonActionCreators";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const GetStatedScreen = (props) => {
    const [isDropOpen, setDropOpen] = useState(false);
    const [timeZoneList, setTimeZoneList] = useState([]);
    const [userName, setUserName] = useState(null)
    const [value, setValue] = useState(null);

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
                        props.reqeustSetUserData({ userName: userName, timeZone: value })
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
    requestGetTimeZone, reqeustSetUserData
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GetStatedScreen);


const styles = StyleSheet.create({
    continer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.BLACK_44
    },
    logoContiner: {
        flex: 1,
        alignItems: 'center'
    },
    logo: {
        height: 200,
        width: 200,
        marginTop: 100
    },
    logoText: {
        fontSize: 25,
        color: Colors.WHITE
    },
    inputFieldForm: {
        flex: 1,
        alignItems: 'center',
        width: "100%"
    },
    textInputDdecoration: {
        borderWidth: 1,
        borderColor: Colors.PRIMARY_BLUE,
        width: "90%",
        borderRadius: 10,
        fontSize: 16,
        paddingLeft: 10,
        marginTop: 50,
        marginBottom: 10,
        backgroundColor: Colors.BLACK_30,
        height: 50
    },
    dropDownParentContiner: {
        width: "90%",
        marginBottom: 50
    },
    dropDownContainerStyle: {
        borderColor: Colors.PRIMARY_YELLOW,
        borderWidth: 1,
        backgroundColor: Colors.BLACK_30,
    },
    dropDownTextStyle: {
        color: Colors.WHITE,
        fontSize: 16
    },
    dropDownplaceHolderStyle: {
        color: Colors.GRAY_186,
        fontSize: 16
    },
    getStartContiner: {
        height: 51,
        width: 200,
        borderRadius: 20,
        backgroundColor: Colors.PRIMARY_BLUE,
        overflow: "hidden",
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center"
    },
    startButtonText: {
        fontSize: 20,
        color: Colors.WHITE
    },
    dropDownContainderStlye: {
        backgroundColor: Colors.BLACK_20,
        borderWidth: 1,
        borderColor: Colors.PRIMARY_BLUE,
    },
    dropDownStyle: {
        backgroundColor: Colors.BLACK_20,
        borderWidth: 1,
        borderColor: Colors.PRIMARY_BLUE
    }

});
