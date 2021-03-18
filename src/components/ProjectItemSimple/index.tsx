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

const ProjectItemSimple: React.FC<Project> = (project:Project) => {


    const week_dayConversor = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sabado"]

    return(
        <View style={styles.container}>
            <View style={styles.profile}>
                <View style={styles.profileInfo}>
                    <Text style={styles.projectName}>{`${project.name_project}`}</Text>
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
                <Text  style={styles.price} >
                    {project.place}
                </Text>
            </View>
        </View>
    )
}

export default ProjectItemSimple