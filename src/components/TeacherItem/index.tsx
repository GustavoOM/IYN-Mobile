import React, { useState } from "react"
import { View, Image, Text, Linking } from "react-native"
import { RectButton } from "react-native-gesture-handler"
import AsyncStorage from "@react-native-community/async-storage"

import convertMinutesToHour from "../../utils/convertMinutesToHour"
import heartOutlineIcon from "../../assets/images/icons/heart-outline.png"
import unfavouriteIcon from "../../assets/images/icons/unfavorite.png"
import whatsappIcon from "../../assets/images/icons/whatsapp.png"
import gmail from "../../assets/images/icons/gmail.png"

import styles from "./styles"
import { useNavigation } from "@react-navigation/native"

import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

interface User{
    id: string
    type: number
    bio: string
    name: string
    avatar: string
    whatsapp: string
    email: string
    created_at: string
    updated_at: string
}
export interface Reinforcement{
    id_reinforcement: string
    subject: string
    principal_year: string
    course: string
    week_day: number
    from:string
    to:string
    place:string
    reinforcement_bio: string
    created_at:string
    updated_at:string
    user_:User
}
interface CardItemProps{
    reinforcement: Reinforcement
    favorited: boolean
}

const TeacherItem: React.FC<CardItemProps> = ({ reinforcement, favorited}) => {
    const {navigate} = useNavigation()
    function handleNavigateToUserInfo(){
        navigate("UserInfo", reinforcement.user_)
    }


    const week_dayConversor = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sabado"]

    const [isFavorited, setIsfavorited] = useState(favorited)

    function handleLinkToWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${reinforcement.user_.whatsapp }`)
    }

    function handleLinkToMail(){
        Linking.openURL(`mailto:${reinforcement.user_.email }`)
    }

    async function handleToggleFavorite(){
        const favorites = await AsyncStorage.getItem('FavoritedReinforcements')

        let favoritesArray = []

        if(favorites){
            favoritesArray = JSON.parse(favorites)
        }
        
        if(isFavorited){
            const favoriteIndex = favoritesArray.findIndex((reinforcementItem: Reinforcement) => {
                return reinforcementItem.id_reinforcement === reinforcement.id_reinforcement
            })
            favoritesArray.splice(favoriteIndex,1)
            setIsfavorited(false)

        }else{
            favoritesArray.push(reinforcement)
            setIsfavorited(true)
            sendPushNotification(`${reinforcement.subject} - ${reinforcement.principal_year}º ano ${reinforcement.course}`, "Você será notificado 15 minutos antes de começar.")
        }
        await AsyncStorage.setItem("FavoritedReinforcements", JSON.stringify(favoritesArray))
    }
    return(
        <View style={styles.container}>
            <View style={styles.profile}>
                <View style={styles.profileInfo}>
                    <Text style={styles.subject}>{`${reinforcement.subject} - ${reinforcement.principal_year}º ano ${reinforcement.course}`}</Text>
                    <Text style={styles.name} onPress={handleNavigateToUserInfo}>{reinforcement.user_.name}</Text>
                </View>
            </View>
            <View style={styles.bioContainer}>
                <RectButton rippleColor="transparent" onPress={handleNavigateToUserInfo}>
                    <Image style={styles.avatar} source={{uri: reinforcement.user_.avatar}} />
                </RectButton>
                <Text style={styles.bio} >{reinforcement.reinforcement_bio}</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.priceValue}>
                    {`${week_dayConversor[reinforcement.week_day]}-feira / `}
                    <Text  style={styles.priceValue} >
                        {convertMinutesToHour(Number(reinforcement.from))} - {convertMinutesToHour(Number(reinforcement.to))}
                    </Text>
                </Text>
                <Text style={styles.price}>
                    <Text  style={styles.price} >
                        {reinforcement.place}
                    </Text>
                </Text>
                <View style={styles.buttonsContainer} >
                    <RectButton rippleColor="transparent" onPress={handleToggleFavorite} style={[styles.favoriteButton, isFavorited ? styles.favorited : {}]}>
                        {isFavorited ? <Image source={unfavouriteIcon}/> : <Image source={heartOutlineIcon}/>}
                    </RectButton>
                    <RectButton style={styles.contactMailButton} onPress={handleLinkToMail}>
                        <Image source={gmail}/>
                        <Text style={styles.contactButtonText}>E-mail</Text>
                    </RectButton>
                    {reinforcement.user_.whatsapp ? <RectButton style={styles.contactWhatsappButton} onPress={handleLinkToWhatsapp}>
                        <Image source={whatsappIcon}/>
                        <Text style={styles.contactButtonText}>Whatsapp</Text>
                    </RectButton> : <></>}
                    
                </View>
            </View>
        </View>
    )
}

export default TeacherItem


async function sendPushNotification(title:string, body:string) {
    await Notifications.scheduleNotificationAsync({
        content: {
        title,
        body,
        color: "#00A144",
        },
        trigger: { seconds: 1 },
    });
}
  