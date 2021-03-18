import React, { ReactNode } from "react"
import { View, Image, Text } from "react-native"

import styles from "./styles"
import { useNavigation } from "@react-navigation/native"

import HeaderLogo from "../../assets/images/HeaderLogo.png"
import ImagemPerfilExemplo from "../../assets/images/ImagemPerfilExemplo.png"
import { RectButton } from "react-native-gesture-handler"

interface IPageHeaderPrincipalProps{
    title: string;
    headerRight?: ReactNode
}

const PageHeaderPrincipal: React.FC<IPageHeaderPrincipalProps> = ({title, headerRight, children}) => {
    const {goBack} = useNavigation()
    function handleGoBack(){
        goBack()
    }

    return(
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Image source={HeaderLogo} style={styles.logo}/>
                <RectButton onPress={handleGoBack} rippleColor="transparent" style={styles.userButton}>
                    <Text style={styles.userName}>Convidado</Text>
                    <Image source={ImagemPerfilExemplo} style={styles.avatar} />
                </RectButton>
            </View>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
            </View>
            {children}
        </View>
    )
}

export default PageHeaderPrincipal