const React = require("react-native");
const {Dimensions, Platform} = React;
const commonColor = require("../../theme/variables/commonColor");
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default {
    background: {
        flex: 1,
        width: null,
        height: deviceHeight,
        backgroundColor: "rgba(0,0,0,0.1)"
    },
    container: {
        flex: 1,
        flexDirection: "row",
        alignSelf: "center",
        backgroundColor: '#003973',
        alignItems: 'center'
    },
    logo: {
        flex: 1,
        resizeMode: "contain",
        height: deviceHeight / 3,
        alignSelf: "center",
    },
    form: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20
    },
    formErrorIcon: {
        color: "#fff",
        marginTop: 5,
        right: 10
    },
    formErrorText1: {
        fontSize: Platform.OS === "android" ? 12 : 15,
        color: commonColor.brandDanger,
        textAlign: "right",
        top: -6
    },
    formErrorText2: {
        fontSize: Platform.OS === "android" ? 12 : 15,
        color: "transparent",
        textAlign: "right",
        top: -6
    },
    loginBtn: {
        marginTop: 7,
        height: 50
    },
    otherLinksContainer: {
        paddingTop: deviceHeight < 600 ? 5 : Platform.OS === "android" ? 10 : 15,
        flexDirection: "row",
    },
    helpBtns: {
        opacity: 0.9,
        fontWeight: "bold",
        color: "#fff",
        fontSize: Platform.OS === "android" ? 12 : 12
    },
    inputGrp: {
        flexDirection: "row",
        backgroundColor: "rgba(255,255,255,0.3)",
        marginBottom: 8,
        borderWidth: 0,
        borderColor: "transparent"
    },
    input: {
        paddingLeft: 10,
        color: "#fff",
        fontSize:15,
    },

    dropDownInput: {
        height: 30,
        fontSize: 14,
        borderColor: 'transparent',
    },
    skipBtn: {
        alignSelf: "flex-end",
        marginTop: 10,
        borderWidth: 0.3,
        borderColor: "#FFF",
        position: "absolute",
        bottom: 15,
        right: 0
    },
    profilePic: {
        height: 40,
        width: 40,
        margin: 4,
        borderRadius: Platform.OS === "android" ? 40 : 20
    },
    forgotPasswordHeader: {
        alignSelf: "center",
        fontSize: 22,
        padding: 10,
        fontWeight: "bold",
        color: "#FFF",
        marginTop:
            Platform.OS === "android" ? deviceHeight / 6 : deviceHeight / 6 + 10
    },
    forgotPasswordContainer: {
        paddingLeft: 20,
        paddingRight: 20,
        marginTop:
            deviceWidth < 330
                ? Platform.OS === "android"
                ? deviceHeight / 9 - 20
                : deviceHeight / 8 - 10
                : Platform.OS === "android"
                ? deviceHeight / 7 - 20
                : deviceHeight / 6 - 30
    },
    emailBtn: {
        paddingleft:30,
        height: 50,
        marginTop: 10,
        borderWidth: 1,
        borderColor: "#ddd"
    },
};
