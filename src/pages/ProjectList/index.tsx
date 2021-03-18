import React, { useState, useEffect } from "react"
import { View, ScrollView, ProgressBarAndroid } from "react-native"
import PageHeader from "../../components/PageHeader"
import ProjectItem, {Project} from "../../components/ProjectItem"
import api from "../../services/api"
import AsyncStorage from "@react-native-community/async-storage"

import styles from "./styles"


function ProjectList(){
    const [load, setLoad] = useState(true)

    const [projects, setProjects] = useState([])
    const [favorites,setFavorites] = useState<string[]>([])

    async function populateLists(){
        console.log("ProjectList")
        
        loadFavorites()
        const {data: projectList} = await api.get("projects")

        setProjects(projectList)
        setLoad(false)
    }

    function loadFavorites(){
        AsyncStorage.getItem("FavoritedProjects").then(response => {
            if(response){
                const favoritedProjects = JSON.parse(response)
                const favoritedProjectsIds = favoritedProjects.map((project: Project) => {
                    return project.id_project
                })
                setFavorites(favoritedProjectsIds)
            }
        })
    }
    
    useEffect(() =>{
        populateLists()
    },[])


    return(
    
        <View style={styles.container}>
            <PageHeader title="Projetos disponíveis"/>
            {load ? <ProgressBarAndroid color="00A144" style={styles.load}/> : null}
            <ScrollView style={styles.projectList} contentContainerStyle={styles.content} >
                {projects.map((project: Project) => {
                    return(
                        <ProjectItem
                            key={project.id_project}
                            project={project}
                            favorited={favorites.includes(project.id_project)}
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default ProjectList