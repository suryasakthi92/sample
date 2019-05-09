const React = require("react-native");

const {Dimensions, Platform } = React;

const primary = require("../../theme/variables/commonColor").brandPrimary;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  links: {
    paddingTop: Platform.OS === "android" ? 8 : 10,
    paddingBottom: Platform.OS === "android" ? 8 : 10,
    paddingLeft: Platform.OS === "android" ? 0 : 10,
    borderBottomWidth: Platform.OS === "android" ? 0 : 0,
    borderBottomColor: "transparent",
  },
  linkText: {
    paddingLeft: 15,
    fontWeight:"bold"
  },
  profileInfoContainer: {
    backgroundColor: '#f4a4604D',
    paddingTop: 10,
    marginRight:5,
    marginLeft:5,
    borderRadius:5,
  },
  head: { height: 30, backgroundColor: 'transparent'},
  text: { textAlign: 'center',color:'white',fontSize: 10, fontWeight: "400"},
  profileUser: {
    alignSelf: "center",
    fontSize: 22,
    fontWeight: "bold",
    paddingBottom: 5,
    paddingLeft: 10
  },
  profileUserInfo: {
    alignSelf: "center",
    opacity: 0.8,
    fontWeight: "bold",
    color: "#FFF"
  },
  profilePic: {
    width: 420,
    height: 420,
    borderRadius: 210,
  },
  profileInfo: {
    alignSelf: "center",
    paddingTop: 5,
    paddingBottom: 10
  },
  logoutContainer: {
    padding: 30,
    paddingTop: 0
  },
  logoutbtn: {
    paddingTop: 30,
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#fff"
  },
  background: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: primary
  },

  stayElevated: {
    width: 50,
    height: 50,
    backgroundColor: '#6969690D'
  },
  drawerContent: {
    paddingTop: Platform.OS === "android" ? 30 : 30
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 60/2,
    borderWidth: 1,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'transparent'
},
    marginTop5: {
      marginTop:5
    },
    colWidth: {
      width:'33%'
    },
  profilePic: {
    height: 40,
    width: 40,
    borderRadius: Platform.OS === "android" ? 40 : 20
  },
    container: {
        flexDirection: "row",
        alignItems: "center"
    },
    dashboardBorder: {
        borderWidth: 1,
        borderColor: "#FFFFFF"
    },
    cover: {
        flex: 1,
        maxHeight: 170,
        resizeMode: 'cover',
    },
    aggregateView: {
        flexDirection:'row',
        marginLeft:10,
        marginBottom: 20,
        paddingTop:15,
        alignSelf:'center'
    },
    aggregateCard: {
        flexDirection:'column',
        alignItems:'center',
        marginTop:7,
        backgroundColor:"#fff"
    },
    aggregateGrid: {
        marginTop:10,
        flex:1,
        width:"100%",
        paddingLeft:10,
        paddingBottom:10
    },
    aggregateLeftCol: {
      width:"65%"
    },
    aggregateRightCol: {
      width: "35%"
    },
    shadow: {
    backgroundColor:"#fff",
        shadowColor:"#000000",
        shadowRadius: 2,
        shadowOffset: {
            width:1,
            height:3,
        },
        shadowOpacity: 1.0
    },
    cardHeader: {
        marginBottom:10,
        alignSelf:"stretch",
        borderBottomColor:"#000000",
        borderTopColor:"#FFF",
        borderLeftColor:"#FFF",
        borderRightColor:"#fff",
        borderWidth:1,
        paddingBottom:5,
        paddingTop:Platform.OS === 'android' ? 0 : 5
    },
    logo: {
        flex: 1,
        resizeMode: "contain",
        height: deviceHeight / 3,
        alignSelf: "center"
    },
    logos: {
        resizeMode: "stretch",
        height: deviceHeight / 3.5,
        width: deviceWidth,
        alignSelf: "center"
    }
};
