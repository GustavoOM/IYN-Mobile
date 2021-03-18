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
    },

    
    profileInfo:{
        alignItems:"baseline",
    },
    
    name: {
        fontFamily:"Poppins_400Regular",
        color: "#00A144",
        fontSize: 22,
        marginTop: 4,
        width: 200,
        
    },
    
    bioContainer:{
        paddingVertical: 10,
        marginHorizontal: 2,
        paddingHorizontal: 2,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    
    avatar:{
        width: 58,
        height: 58,
        borderRadius: 32,
        backgroundColor: "#eee",
        borderColor:"#00A144",
        borderWidth: 1,
        marginLeft: 5,
    },
    bio:{
        textAlign: "justify",
        paddingRight: 75,
        width: "100%",
        marginHorizontal: 10,
        fontFamily: "Poppins_400Regular",
        fontSize: 14,
        lineHeight: 24,
        color: "#6a6180" 
    },
    footer:{
        backgroundColor:"#fafafc",
        padding: 24,
        alignItems: "center",
        marginTop: 24,
    },
    price:{
        fontFamily:"Poppins_400Regular",
        color: "#6a6180",
        fontSize: 18,
    },
    priceValue:{
        fontFamily: "Archivo_700Bold",
        color: "#8257e5",
        fontSize: 20,
    },
    buttonsContainer:{
        flexDirection: "row",
        marginTop: 16,
    },
    favoriteButton:{
        backgroundColor: "#8257e5",
        width: 56,
        height: 56,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 8,
    },
    favorited:{
        backgroundColor: "#e33d3d"
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