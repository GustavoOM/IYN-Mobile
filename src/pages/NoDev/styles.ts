import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#575A89",
        justifyContent: "center",
        padding: 40,
    },
    content:{
        flex: 1,
        justifyContent: "center",
    },
    title:{
        fontFamily: "Archivo_700Bold",
        color: "#E3E2E1",
        fontSize: 32,
        lineHeight: 37,
        maxWidth: 300,
    },
    description:{
        marginVertical: 24,
        color: "#D4C2FF",
        fontSize: 16,
        lineHeight: 26,
        fontFamily: "Poppins_400Regular",
        maxWidth: 300,
    },
    okButton:{
        marginVertical: 40,
        backgroundColor:"#3F3D56",
        height: 58,
        alignItems:"center",
        justifyContent: "center",
        borderRadius: 8,
    },
    okButtonText:{
        color: "#E3E2E1",
        fontSize: 16,
        fontFamily: "Archivo_700Bold"
    },
    contactButton:{
        backgroundColor:"#00A144",
        height: 58,
        alignItems:"center",
        justifyContent: "center",
        borderRadius: 8,
    },
    contactButtonText:{
        color: "#E3E2E1",
        fontSize: 16,
        fontFamily: "Archivo_700Bold"
    },

})

export default styles