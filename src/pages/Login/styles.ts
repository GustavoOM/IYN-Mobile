import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#575A89",
        paddingBottom: 0,
    },
    header:{
        height: "33%",
        backgroundColor: "#342C2C",
        justifyContent: "center",
    },
    logo:{
        resizeMode: "contain",
        marginTop: 10,
        alignSelf: "center",
    },
    enterView:{
        width: "100%",
        height: "70%",
        justifyContent: "center",
    },
    enterViewCard:{
        width: "100%",
        resizeMode: "contain",
        alignSelf: "center",
        marginVertical: 10,
    },
    title:{
        fontFamily: "Poppins_400Regular",
        color: "#FFF",
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80,
    },
    cardList:{
        marginTop: -40,
    },
    icon:{
        width: 15,
        marginHorizontal: 10,
    },
    body:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    forgotPassword:{
        color: "#E3E2E1",
        marginTop: 20,
        marginBottom: 30,
        fontFamily: "Poppins_400Regular",
        fontSize: 16,
    },
    acessSolicitation:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        bottom: 0,
        borderColor: "#342C2C",
        borderWidth: 4,
        backgroundColor: "transparent",
        width: "100%",
        height: 50,
    },
    acessSolicitationText:{
        marginLeft: 10,
        color: "#342C2C",
        marginVertical: 20,
        fontFamily: "Poppins_400Regular",
        fontSize: 16,
    },
    goBack:{
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-start",
        marginLeft: 10,
        marginBottom: 20,
    },
    goBackText:{
        color: "#00A144",
        fontFamily: "Poppins_400Regular",
        fontSize: 16,
    },
    forgotPasswordForm:{
        marginBottom: 100,
    },
    forgotPasswordImage:{
        marginBottom: 20,
    }
})

export default styles