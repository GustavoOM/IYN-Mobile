import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#f0f0f7"
    },
    projectList:{
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
        width: "48%",
    },
    input:{
        height: "100%",
        borderRadius: 40,
        justifyContent: "center",
        paddingHorizontal: 16, 
        
    },
    submitButton:{
        backgroundColor: "#04d361",
        height: 56,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    submitButtonText:{
        color: "#FFF",
        fontFamily: "Archivo_700Bold",
        fontSize: 16,
        marginLeft: 16,
    },
    pickerContainer:{
        height: 54,
        borderWidth:2,
        borderColor:'#c2c2c1',
        borderRadius:5,
        backgroundColor: "#FFF",
        marginTop: 4,
        marginBottom: 16,
    },
    avatar:{
        alignSelf: "center",
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: "#00A144",
        borderWidth: 2,
    },
    buttonsContainer:{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 16,
    },
    favoriteButton:{
        backgroundColor: "transparent",
        width: 56,
        height: 56,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 8,
    },
    favorited:{
        backgroundColor: "transparent"
    },
    contactWhatsappButton:{
        backgroundColor: "#3F8439",
        flex: 1,
        height: 56,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 8,
        maxWidth: 200,
    },
    contactMailButton:{
        backgroundColor: "#C43828",
        flex: 1,
        height: 56,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 8,
        maxWidth: 200,
    },
    contactButtonText:{
        textAlign: "center",
        color: "#FFF",
        fontFamily: "Archivo_700Bold",
        fontSize: 14
    },
    bioContainer:{
        marginVertical: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    bio:{
        textAlign: "justify",
        width: "100%",
        fontFamily: "Poppins_400Regular",
        fontSize: 16,
        lineHeight: 24,
        color: "#6a6180" 
    },
    projectContainer:{
        backgroundColor: "#575A89",
        marginHorizontal: -16,
        paddingHorizontal: 32,
        alignSelf: "center",
    },
    projectContainerTitle:{
        color: "#E3E2E1",
        textAlign: "center",
        fontFamily: "Archivo_700Bold",
        fontSize: 30,
        marginVertical: 20,
    }
})

export default styles