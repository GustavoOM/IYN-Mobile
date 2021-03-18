import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#f0f0f7"
    },
    reinforcementList:{
        marginTop: -35,
    },
    searchForm:{
        marginBottom: 24,
    },
    label:{
        color: "#d4c2ff",
        fontFamily: "Poppins_400Regular"
    },
    inputGroup: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    inputBlock:{
        width: "30%",
    },
    input:{
        height: "100%",
        borderRadius: 40,
        justifyContent: "center", 
        color: "#322749",
        backgroundColor: 'transparent'
    },
    pickerContainer:{
        height: 54,
        borderWidth:1,
        borderColor:'#c2c2c1',
        borderRadius:5,
        backgroundColor: "#FFF",
        marginTop: 4,
        marginBottom: 16,
    },
    load:{
        marginTop: "50%"
    },
    notFound:{
        marginTop: "50%",
        alignSelf: "center",
        fontFamily: "Archivo_700Bold",
        color: "#32264d",
        fontSize: 22,
    }

})

export default styles