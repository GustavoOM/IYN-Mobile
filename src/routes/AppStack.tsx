import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"

import Landing from "../pages/Landing"
import NoDev from "../pages/NoDev"
import ProjectList from "../pages/ProjectList"
import HiredList from "../pages/HiredList"
import ReinforcementList from "../pages/ReinforcementList"
import UserInfo from "../pages/UserInfo"
import Login from "../pages/Login"

const {Navigator,Screen} = createStackNavigator()

function AppStack(){
    return(
        <NavigationContainer>
            <Navigator screenOptions={{headerShown:false}}>
                <Screen name="Login" component={Login} />
                <Screen name="Landing" component={Landing} />
                <Screen name="NoDev" component={NoDev} />
                <Screen name="ReinforcementList" component={ReinforcementList} />
                <Screen name="ProjectList" component={ProjectList} />
                <Screen name="HiredList" component={HiredList} />
                <Screen name="UserInfo" component={UserInfo} />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack