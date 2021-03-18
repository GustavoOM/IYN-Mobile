import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        paddingVertical: 40,
        paddingHorizontal: 20,
        backgroundColor: "#575A89",
    },
    topBar:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

    },
    title:{
        textAlign: "center",
        fontFamily: "Archivo_700Bold",
        color: "#FFF",
        fontSize: 28,
        lineHeight: 32,
        marginVertical: 40,
    },
    header:{
        alignItems: "center",
    },
    logo:{
        marginTop: 5,
        height: "100%",
        resizeMode: "contain",
    },
    userButton:{
        flexDirection: "row",
        alignItems: "center"
    },
    userName:{
        marginHorizontal: 10,
        fontFamily: "Archivo_700Bold",
        color: "#FFF",
        fontSize: 18,
        lineHeight: 32,
    },
    avatar:{

    }
})

export default styles