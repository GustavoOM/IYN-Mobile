import React from "react"
import {View, Image, ScrollView} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { RectButton } from "react-native-gesture-handler"


import CardAchadosPerdidos from "../../assets/images/CardAchadosPerdidos.png" 
import CardCaronaColetiva from "../../assets/images/CardCaronaColetiva.png"
import CardContraturno from "../../assets/images/CardContraturno.png" 
import CardDescubraProjetos from "../../assets/images/CardDescubraProjetos.png" 
import CardHorárioDeAulas from "../../assets/images/CardHorárioDeAulas.png" 
import CardServidoresDoIFPR from "../../assets/images/CardServidoresDoIFPR.png"

import styles from "./styles"
import PageHeaderPrincipal from "../../components/PageHeaderPrincipal"
function Landing(){
    const {navigate} = useNavigation()
    
    function handleNavigateToNoDevPage(){
        navigate("NoDev")
    }

    function handleNavigateToReinforcementList(){
        navigate("ReinforcementList")
    }

    function handleNavigateToProjectListPage(){
        navigate("ProjectList")
    }

    function handleNavigateToHiredListPage(){
        navigate("HiredList")
    }

    return (
        <>
            <PageHeaderPrincipal title={"O que você precisa?"}/>
            <View style={styles.container}>
                <ScrollView style={styles.cardList}>
                    <RectButton onPress={handleNavigateToReinforcementList}>
                        <Image style={styles.card} source={CardContraturno}/>
                    </RectButton>
                    <RectButton onPress={handleNavigateToProjectListPage}>
                        <Image style={styles.card} source={CardDescubraProjetos}/>
                    </RectButton>
                    <RectButton onPress={handleNavigateToHiredListPage}>
                        <Image style={styles.card} source={CardServidoresDoIFPR}/>
                    </RectButton>
                    <RectButton onPress={handleNavigateToNoDevPage}>
                        <Image style={styles.card} source={CardHorárioDeAulas}/>
                    </RectButton>
                    <RectButton onPress={handleNavigateToNoDevPage}>
                        <Image style={styles.card} source={CardAchadosPerdidos}/>
                    </RectButton>
                    <RectButton onPress={handleNavigateToNoDevPage}>
                        <Image style={styles.card} source={CardCaronaColetiva}/>
                    </RectButton>
                </ScrollView>
            </View>
        </>
    )
}

export default Landing