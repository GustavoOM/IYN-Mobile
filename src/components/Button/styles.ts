import styled from "styled-components/native"
import {RectButton} from "react-native-gesture-handler"

export const Container = styled(RectButton)`
    width: 100%;
    height: 60px;
    background: #00A144;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin-top: 8px;
`

export const ButtomText = styled.Text`
    font-family: "Archivo_700Bold";
    color: #E3E2E1;
    font-size: 18px;
`