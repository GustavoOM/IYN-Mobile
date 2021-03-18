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
export interface Project{
    id_project: string
    name_project: string
    week_day: number
    from:string
    to:string
    place:string
    project_bio: string
    created_at:string
    updated_at:string
    user_:User
}
interface CardItemProps{
    project: Project
    favorited: boolean
}

const ProjectItem: React.FC<CardItemProps> = ({ project, favorited}) => {
    const {navigate} = useNavigation()
    function handleNavigateToUserInfo(){
        navigate("UserInfo", project.user_)
    }

    const [isFavorited, setIsfavorited] = useState(favorited)

    const week_dayConversor = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sabado"]

    function handleLinkToWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${project.user_.whatsapp }`)
    }

    function handleLinkToMail(){
        Linking.openURL(`mailto:${project.user_.email }`)
    }



    async function handleToggleFavorite(){
        const favorites = await AsyncStorage.getItem('FavoritedProjects')

        let favoritesArray = []

        if(favorites){
            favoritesArray = JSON.parse(favorites)
        }
        
        if(isFavorited){
            const favoriteIndex = favoritesArray.findIndex((projectItem: Project) => {
                return projectItem.id_project === project.id_project
            })
            favoritesArray.splice(favoriteIndex,1)
            setIsfavorited(false)

        }else{
            favoritesArray.push(project)

            setIsfavorited(true)
            sendPushNotification(project.name_project, "Você será notificado 15 minutos antes de começar.")

        }
        await AsyncStorage.setItem("FavoritedProjects", JSON.stringify(favoritesArray))
    }
    return(
        <View style={styles.container}>
            <View style={styles.profile}>
                <RectButton rippleColor="transparent" onPress={handleNavigateToUserInfo}>
                    <Image style={styles.avatar} source={{uri: project.user_.avatar}} />
                </RectButton>
                <View style={styles.profileInfo}>
                    <Text style={styles.projectName}>{`${project.name_project}`}</Text>
                    <Text style={styles.name} onPress={handleNavigateToUserInfo}>{project.user_.name}</Text>
                </View>
            </View>
            <View style={styles.bioContainer}>
                <Text style={styles.bio} >{project.project_bio}</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.priceValue}>
                    {`${week_dayConversor[project.week_day]}-feira / `}
                    <Text  style={styles.priceValue} >
                        {convertMinutesToHour(Number(project.from))} - {convertMinutesToHour(Number(project.to))}
                    </Text>
                </Text>
                <Text style={styles.price}>
                    <Text  style={styles.price} >
                        {project.place}
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
                    {project.user_.whatsapp ? <RectButton style={styles.contactWhatsappButton} onPress={handleLinkToWhatsapp}>
                        <Image source={whatsappIcon}/>
                        <Text style={styles.contactButtonText}>Whatsapp</Text>
                    </RectButton> : <></>}
                    
                </View>
            </View>
        </View>
    )
}

export default ProjectItem

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
  