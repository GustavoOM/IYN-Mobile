import styled, {css} from "styled-components/native"
import FeatherIcon from "react-native-vector-icons/Feather"

interface ContainerProps {
    isFocused: boolean
    isErrored: boolean
}

export const Container = styled.View<ContainerProps>`
    width: 90%;
    align-self: center;
    height: 60px;
    padding: 0 16px;
    background: #BEBDBC;
    border-radius: 10px;
    margin-bottom: 8px;
    flex-direction: row;
    align-items: center;
    border-width: 2px;
    border-color: #888;

    ${(props) => props.isErrored && css`
        border-color: #C53030;
    `}

    ${(props) => props.isFocused && css`
        border-color: #00A144;
    `}
`
export const TextInput = styled.TextInput`
    flex: 1;
    color: #342C2C;
    font-size: 16px;
    font-family: "Archivo_700Bold";
`

export const Icon = styled(FeatherIcon)`
    margin-right: 16px;
`