import React, { useState, useEffect, useRef } from "react"
import { View, ScrollView, Text, Picker, ProgressBarAndroid, Platform } from "react-native"
import PageHeader from "../../components/PageHeader"
import TeacherItem, {Reinforcement} from "../../components/TeacherItem"
import { BorderlessButton } from "react-native-gesture-handler"
import {Feather} from "@expo/vector-icons"
import api from "../../services/api"
import AsyncStorage from "@react-native-community/async-storage"

import styles from "./styles"

function ReinforcementList(){
    

    const [load, setLoad] = useState(true)

    const [reinforcements, setReinforcements] = useState([])
    const [filteredReinforcements, setFilteredReinforcements] = useState([])

    const [favorites,setFavorites] = useState<string[]>([])

    const [isFiltersVisible, setIsFiltersVisible] = useState(false)

    const [course, setCourse] = useState("")
    let varCourse = course
    const [year, setYear] = useState("")
    let varYear = year
    const [week_day, setWeekDay] = useState("")
    let varWeekDay = week_day

    async function populateLists(){
        console.log("ReinforcementList")
        loadFavorites()
        const {data: reinforcementsList} = await api.get("reinforcements")
        setReinforcements(reinforcementsList)
        setFilteredReinforcements(reinforcementsList)
        setLoad(false)
    }

    function loadFavorites(){
        AsyncStorage.getItem("FavoritedReinforcements").then(response => {
            if(response){
                const favoritedReinforcements = JSON.parse(response)
                const favoritedReinforcementsIds = favoritedReinforcements.map((reinforcement: Reinforcement) => {
                    return reinforcement.id_reinforcement
                })
                setFavorites(favoritedReinforcementsIds)
            }
        })
    }
    
    useEffect(() =>{
        populateLists()
    },[])

    
    function handleToggleFiltersVisible(){
        setIsFiltersVisible(!isFiltersVisible)
    }

    async function handleFilterSubmit(){
        setIsFiltersVisible(false)
        setFilteredReinforcements(reinforcements.filter((filteredReinforcement:Reinforcement)=>{ return (filteredReinforcement.course == varCourse || varCourse == "") && (filteredReinforcement.principal_year == varYear || varYear == "") && (String(filteredReinforcement.week_day) == varWeekDay || varWeekDay == "")}))
    }

    return(
    
        <View style={styles.container}>
            {true ? (
            <PageHeader title="Contraturnos disponíveis" headerRight={(
                <BorderlessButton style={{alignItems:"center", flexDirection:"row"}} onPress={handleToggleFiltersVisible}>
                    <Text style={{
                        marginRight: 5,
                        color: "#E3E2E1",
                    }}>Filtrar
                    </Text>
                    <Feather name="filter" size={20} color={"#E3E2E1"} />
                </BorderlessButton>

            )}>
            
                {isFiltersVisible && (
                    <View style={styles.searchForm}>

                        <View style={styles.inputGroup}>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Curso</Text>
                                <View style={styles.pickerContainer}>
                                    <Picker

                                        style={styles.input} 
                                        selectedValue={String(varCourse)}
                                        onValueChange={text=> {setCourse(text); varCourse=text ; handleFilterSubmit()}}
                                    >
                                        <Picker.Item value={""} label={"Todos"}/>
                                        <Picker.Item value={"BIOTEC"} label={"BIOTEC"}/>
                                        <Picker.Item value={"TINFEM"} label={"TINFEM"}/>
                                    </Picker>
                                </View>
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Ano</Text>
                                <View style={styles.pickerContainer}>
                                    <Picker
                                        style={styles.input}
                                        
                                        selectedValue={String(varYear)}
                                        
                                        onValueChange={text=> {setYear(text); varYear=text ; handleFilterSubmit()}}
                                    >
                                        <Picker.Item value={""} label={"Todos"}/>
                                        <Picker.Item value={"1"} label={"1º"}/>
                                        <Picker.Item value={"2"} label={"2º"}/>
                                        <Picker.Item value={"3"} label={"3º"}/>
                                        <Picker.Item value={"4"} label={"4º"}/>
                                    </Picker>
                                </View>
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <View style={styles.pickerContainer}>
                                    <Picker
                                        style={styles.input}
                                        selectedValue={String(varWeekDay)}
                                        onValueChange={text=> {setWeekDay(text); varWeekDay=text ; handleFilterSubmit()}}
                                    >
                                        <Picker.Item value={""} label={"Todos"}/>
                                        <Picker.Item value={"1"} label={"Segunda"}/>
                                        <Picker.Item value={"2"} label={"Terça"}/>
                                        <Picker.Item value={"3"} label={"Quarta"}/>
                                        <Picker.Item value={"4"} label={"Quinta"}/>
                                        <Picker.Item value={"5"} label={"Sexta"}/>
                                    </Picker>
                                </View>
                            </View>
                        </View>
                    </View>
                )}
            </PageHeader>
            ): <PageHeader title={"Contraturnos disponíveis"}/>}

            {load ? <ProgressBarAndroid color="00A144" style={styles.load}/> : null}
            <ScrollView style={styles.reinforcementList} contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16,
            }} >
                {
                    filteredReinforcements.map((reinforcement: Reinforcement) => {
                        return(
                            <TeacherItem
                                key={reinforcement.id_reinforcement}
                                reinforcement={reinforcement}
                                favorited={favorites.includes(reinforcement.id_reinforcement)}
                            />
                        )
                    })
                }

                {filteredReinforcements.length == 0 && !load? (
                    <Text style={styles.notFound}>Não há resultados para essa busca.</Text>
                ): null}
                
                

            </ScrollView>
        </View>
    )
}

export default ReinforcementList

