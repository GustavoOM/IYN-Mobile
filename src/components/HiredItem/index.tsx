import React, { useState } from "react"
import { View, Image, Text, Linking } from "react-native"
import { RectButton } from "react-native-gesture-handler"
import RightArrow from "../../assets/images/icons/RightArrow.png"
import { useNavigation } from "@react-navigation/native"

import styles from "./styles"

export interface User{
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

const HiredItem: React.FC<User> = (user:User) => {
    const {navigate} = useNavigation()
    function handleNavigateToUserInfo(){
        navigate("UserInfo", user)
    }
    return(
        <RectButton onPress={handleNavigateToUserInfo} style={styles.container}>
            <View style={styles.bioContainer}>
                <Image style={styles.avatar} source={{uri: user.avatar}}/>
                <Text style={styles.name}>{user.name}</Text>
                <Image source={RightArrow}/>
            </View>
        </RectButton>
    )
}

export default HiredItem