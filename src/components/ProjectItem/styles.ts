import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#e6e6f0",
        borderRadius: 8,
        marginBottom: 16,
        overflow: "hidden"
    },

    profile:{
        alignItems: "center",
        padding: 24,
        flexDirection: "row",
        width: "95%"
    },

    
    profileInfo:{
        width: "100%",
        paddingHorizontal: 10,
        paddingRight: 30,
    },
    
    name: {
        fontFamily:"Poppins_400Regular",
        color: "#6a6180",
        fontSize: 16,
        marginTop: 4,
    },
    projectName:{
        fontFamily: "Archivo_700Bold",
        color: "#32264d",
        fontSize: 20,
    },
    
    bioContainer:{
        marginHorizontal: 10,
        paddingHorizontal: 10,
        alignItems: "center",
        flexDirection: "row",
    },
    
    avatar:{
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: "#eee",
        borderColor:"#00A144",
        borderWidth: 1,
    },
    bio:{
        textAlign: "justify",
        width: "100%",
        fontFamily: "Poppins_400Regular",
        fontSize: 14,
        lineHeight: 24,
        color: "#6a6180" 
    },
    footer:{
        backgroundColor:"#fafafc",
        padding: 12,
        alignItems: "center",
        marginTop: 12,
        paddingBottom: 22,
    },
    price:{
        fontFamily:"Poppins_400Regular",
        color: "#00A144",
        fontSize: 18,
    },
    priceValue:{
        fontFamily: "Archivo_700Bold",
        color: "#00A144",
        fontSize: 20,
    },
    buttonsContainer:{
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
    },
    contactMailButton:{
        backgroundColor: "#C43828",
        flex: 1,
        height: 56,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 8,
    },
    contactButtonText:{
        textAlign: "center",
        color: "#FFF",
        fontFamily: "Archivo_700Bold",
        fontSize: 14
    }

})

export default styles