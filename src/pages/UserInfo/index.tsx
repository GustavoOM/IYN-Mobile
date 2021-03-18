import React, { useState, useEffect } from "react"
import { View, ScrollView, Text, Picker, Image, Linking, ProgressBarAndroid } from "react-native"
import PageHeader from "../../components/PageHeader"
import ProjectItemSimple, {Project} from "../../components/ProjectItemSimple"
import api from "../../services/api"
import { useRoute, RouteProp } from "@react-navigation/native"


import styles from "./styles"
import whatsappIcon from "../../assets/images/icons/whatsapp.png"
import gmail from "../../assets/images/icons/gmail.png"
import { RectButton } from "react-native-gesture-handler"
import TeacherItemSimple, { Reinforcement } from "../../components/TeacherItemSimple"

type ParamList = {
    UserInfo: {
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
}

function UserInfo(){
    
    console.log("UserInfo")
      
    const route = useRoute<RouteProp<ParamList, 'UserInfo'>>();
    
    const {params} = route
    
    const [load, setLoad] = useState(true)

    const [projects, setProjects] = useState([])
    const [reinforcements, setReinforcements] = useState([])

    async function populateLists(){
        const {data: projectList} = await api.get(`projectsuser/${params.id}`)
        const {data: reinforcementList} = await api.get(`reinforcementsuser/${params.id}`)
        setProjects(projectList)
        setReinforcements(reinforcementList)
        setLoad(false)
    }
    
    useEffect(() =>{
        populateLists()
    },[])

    function handleLinkToWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${params.whatsapp}`)
    }

    function handleLinkToMail(){
        Linking.openURL(`mailto:${params.email}`)
    }
    return(
        <View style={styles.container}>
            <PageHeader title={params.name}/>
                    
            <ScrollView style={styles.projectList} contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16,
            }} >
                <Image source={{uri: params.avatar}} style={styles.avatar}></Image>
                <View style={styles.buttonsContainer} >
                    <RectButton style={styles.contactMailButton} onPress={handleLinkToMail}>
                        <Image source={gmail}/>
                        <Text style={styles.contactButtonText}>E-mail</Text>
                    </RectButton>
                    {params.whatsapp ? <RectButton style={styles.contactWhatsappButton} onPress={handleLinkToWhatsapp}>
                        <Image source={whatsappIcon}/>
                        <Text style={styles.contactButtonText}>Whatsapp</Text>
                    </RectButton> : <></>}
                </View>
                <View style={styles.bioContainer}>
                    <Text style={styles.bio} >{params.bio}</Text>
                </View>

                {load ? <ProgressBarAndroid color="00A144"/> : null}

                {projects.length != 0 && !load ? 
                    (
                        <View style={styles.projectContainer}>
                            <Text style={styles.projectContainerTitle}>Projetos</Text>
                            {projects.map((project: Project) => {
                                return(
                                    <ProjectItemSimple
                                        key={project.id_project}
                                        created_at={project.created_at}
                                        from={project.from}
                                        id_project={project.id_project}
                                        name_project={project.name_project}
                                        place={project.place}
                                        project_bio={project.project_bio}
                                        to={project.to}
                                        updated_at={project.updated_at}
                                        user_={project.user_}
                                        week_day={project.week_day}
                                    />
                                )
                            })}
                        </View>
                    )
                : null}

                {reinforcements.length != 0 && !load ? 
                    (
                        <View style={styles.projectContainer}>
                            <Text style={styles.projectContainerTitle}>Contraturnos</Text>
                            {reinforcements.map((reinforcement: Reinforcement) => {
                                return(
                                    <TeacherItemSimple
                                        key={reinforcement.id_reinforcement}
                                        created_at={reinforcement.created_at}
                                        from={reinforcement.from}
                                        id_reinforcement={reinforcement.id_reinforcement}
                                        place={reinforcement.place}
                                        reinforcement_bio={reinforcement.reinforcement_bio}
                                        to={reinforcement.to}
                                        updated_at={reinforcement.updated_at}
                                        user_={reinforcement.user_}
                                        week_day={reinforcement.week_day}
                                        course={reinforcement.course}
                                        principal_year={reinforcement.principal_year}
                                        subject={reinforcement.subject}
                                    />
                                )
                            })}
                        </View>
                    )
                : null}
                    
                    

            </ScrollView>
        </View>
    )
}

export default UserInfo