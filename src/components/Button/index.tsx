import React from "react"
import { RectButtonProperties } from "react-native-gesture-handler"
import { Container, ButtomText } from "./styles"

interface ButtonProps extends RectButtonProperties {
    children: string;
}

const Button: React.FC<ButtonProps> = ({children, ...rest}) => (
    <Container {...rest} >
        <ButtomText>
            {children}
        </ButtomText>
    </Container>
)

export default Button;