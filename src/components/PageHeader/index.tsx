import React, { ReactNode } from "react"
import { View, Image, Text } from "react-native"

import styles from "./styles"
import { BorderlessButton, RectButton } from "react-native-gesture-handler"
import { useNavigation } from "@react-navigation/native"
import HeaderLogo from "../../assets/images/HeaderLogo.png"
import LeftArrow from "../../assets/images/icons/LeftArrow.png"
import ImagemPerfilExemplo from "../../assets/images/ImagemPerfilExemplo.png"


interface IPageHeaderProps{
    title: string;
    headerRight?: ReactNode
}

const PageHeader: React.FC<IPageHeaderProps> = ({title, headerRight, children}) => {
    const {navigate, goBack} = useNavigation()
    function handleHome(){
        navigate("Landing")
    }

    function handleGoBack(){
        goBack()
    }

    return(
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={LeftArrow} resizeMode="contain"/>
                </BorderlessButton>
                <RectButton onPress={handleHome}>
                    <Image source={HeaderLogo} resizeMode="contain"/>
                </RectButton>
                <BorderlessButton>
                    <Image source={ImagemPerfilExemplo} resizeMode="contain"/>
                </BorderlessButton>
            </View>
            <View style={headerRight ? styles.header : styles.headerCenter}>
                <Text style={headerRight ? styles.title :styles.titleCenter}>{title}</Text>
                {headerRight}
            </View>
            {children}
        </View>
    )
}

export default PageHeader