import { StyleSheet } from 'react-native';

export const struct = StyleSheet.create({
    mainContainer: {
        flex: 1,
        height: "100%",
        width: "100%",  
    }, 

    // Main Body Header
    mainHeader: {
        backgroundColor: "#4d148c",
        height: 100,
        width: "100%",
        marginTop: 1,
    },
    mainHeaderContaner:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
 
       marginVertical: 10,
       marginHorizontal: 15,
    },
    mainHeaderLogo: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    mainHeaderLogoText: {
        fontSize: 30,

    },
    mainHeaderSpacer: {
        flex: 1,
    },
    mainHeaderTimeBlock: {},
    mainHeaderTimeText: {
        fontSize: 15,
        color: "#FF6200",
    },

    // Main Body Content
    contentBody: {
        flex: 1,
    },
    // Main Body Footer
    mainFooter: {
        backgroundColor: "#4d148c",
        height: 50,
        width: "100%",

    }
 });