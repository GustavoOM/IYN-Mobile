import React from "react"
import { View, ImageBackground, Text, Linking} from "react-native"

import giveClassesBg from "../../assets/images/give-classes-background.png"
import { RectButton } from "react-native-gesture-handler"
import { useNavigation } from "@react-navigation/native"

import styles from "./styles"

function GiveClasses(){

    console.log("NoDev")

    const {goBack} = useNavigation()

    function handleNavigateBack(){
        goBack()
    }

    function handleLinkToWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=5543999606350`)
    }

    return (
        <View style={styles.container}>
                <Text style={styles.title} >Esta parte ainda não foi desenvolvida :(</Text>
                <Text style={styles.description}>Caso queira entrar em contato com o desenvolvedor referente a essa funcionalidade clique no botão abaixo:</Text>
            <RectButton onPress={handleLinkToWhatsapp} style={styles.contactButton}>
                <Text style={styles.contactButtonText}>Entrar em contato</Text>
            </RectButton>
            <RectButton onPress={handleNavigateBack} style={styles.okButton}>
                <Text style={styles.okButtonText}>Voltar</Text>
            </RectButton>
        </View> 
    )
}

export default GiveClasses