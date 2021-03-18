import React, { useState, useEffect } from "react"
import { View, ScrollView, ProgressBarAndroid } from "react-native"
import PageHeader from "../../components/PageHeader"
import HiredItem, {User} from "../../components/HiredItem"
import api from "../../services/api"

import styles from "./styles"

function HiredList(){

    const [load, setLoad] = useState(true)

    const [hireds, setHireds] = useState([])

    async function populateLists(){
        console.log("HiredList")
        const {data: hiredList} = await api.get("users")
        setHireds(hiredList)
        setLoad(false)
    }

    
    useEffect(() =>{
        populateLists()
    },[])

    return(
    
        <View style={styles.container}>
            <PageHeader title="Nossos servidores"/>
            {load ? <ProgressBarAndroid color="00A144" style={styles.load}/> : null}
            <ScrollView style={styles.hiredList} contentContainerStyle={styles.content} >
                {hireds.map((hired: User) => {
                    return(
                        <HiredItem
                            key={hired.id}
                            avatar={hired.avatar}
                            bio={hired.bio}
                            created_at={hired.created_at}
                            email={hired.email}
                            id={hired.id}
                            name={hired.name}
                            type={hired.type}
                            updated_at={hired.updated_at}
                            whatsapp={hired.whatsapp}
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default HiredList