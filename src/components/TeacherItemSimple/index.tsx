import React from "react"
import { View, Image, Text, Linking } from "react-native"

import convertMinutesToHour from "../../utils/convertMinutesToHour"

import styles from "./styles"

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

const TeacherItemSimple: React.FC<Reinforcement> = (reinforcement) => {

    const week_dayConversor = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sabado"]

    return(
        <View style={styles.container}>
            <View style={styles.profile}>
                <View style={styles.profileInfo}>
                    <Text style={styles.subject}>{`${reinforcement.subject} - ${reinforcement.principal_year}º ano ${reinforcement.course}`}</Text>
                </View>
            </View>
            <View style={styles.bioContainer}>
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
            </View>
        </View>
    )
}

export default TeacherItemSimple