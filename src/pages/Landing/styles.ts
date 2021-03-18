import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#342C2C",
        justifyContent: "center",
        padding: 10,
        paddingBottom: 0,
    },
    title:{
        fontFamily: "Poppins_400Regular",
        color: "#FFF",
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80,
    },
    card:{
        resizeMode: "contain",
        marginBottom: 10,
        alignSelf: "center",
    },
    cardList:{
        marginTop: -40,
    }
})

export default styles