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
        alignItems:"center",
    },
    
    subject:{
        fontFamily: "Archivo_700Bold",
        color: "#32264d",
        fontSize: 20,
        textAlign: "center",
    },
    
    bioContainer:{
        marginHorizontal: 10,
        paddingHorizontal: 10,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    
    bio:{
        textAlign: "justify",
        width: "100%",
        marginHorizontal: 10,
        fontFamily: "Poppins_400Regular",
        fontSize: 14,
        lineHeight: 24,
        color: "#6a6180" 
    },
    footer:{
        backgroundColor:"#fafafc",
        padding: 12,
        alignItems: "center",
        marginTop: 18,
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
})

export default styles