import React, { useState, useRef } from "react"
import {View, Image, TextInput, Text, Keyboard, KeyboardAvoidingView} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { RectButton } from "react-native-gesture-handler"

import LeftArrow from "../../assets/images/icons/LeftArrow.png" 
import LoginIcon from "../../assets/images/icons/LoginIcon.png" 
import Logo from "../../assets/images/Logo.png" 
import ForgotPassword from "../../assets/images/ForgotPassword.png" 
import Login from "../../assets/images/Login.png"
import NoLogin from "../../assets/images/NoLogin.png" 
import CardDescubraProjetos from "../../assets/images/CardDescubraProjetos.png" 
import CardHorárioDeAulas from "../../assets/images/CardHorárioDeAulas.png" 
import CardServidoresDoIFPR from "../../assets/images/CardServidoresDoIFPR.png"

import Input from "../../components/Input"
import Button from "../../components/Button"
import AwesomeAlert from 'react-native-awesome-alerts';
import { FormHandles } from "@unform/core"
import { Form } from "@unform/mobile"


import styles from "./styles"




function Landing(){
    const {navigate} = useNavigation()

    const [content, setContent] = useState("EnterView")

    const [forgotPasswordAlertShow, setForgotPasswordAlertShow] = useState(false)
    const [loginAlertShow, setLoginAlertShow] = useState(false)

    const formRef = useRef<FormHandles>(null)
    const passwordInputRef = useRef<TextInput>(null)
    
    function handleChangeContentToLogin(){
        setContent("Login")
        setForgotPasswordAlertShow(false)
    }

    function handleChangeContentToEnterView(){
        setContent("EnterView")
    }

    function handleChangeContentToForgotPassword(){
        setContent("ForgotPassword")
    }
    
    function handleNavigateToNoDevPage(){
        navigate("NoDev")
    }

    function handleNavigateToLanding(){
        navigate("Landing")
    }

    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    Keyboard.addListener('keyboardDidShow', () => {
        setKeyboardVisible(true);
    });

    Keyboard.addListener('keyboardDidHide', () => {
        setKeyboardVisible(false);
    });

    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    { !isKeyboardVisible ? <Image source={Logo} style={styles.logo}/> : null }
                </View>
                <View style={styles.body}>
                    {content == "EnterView" ? (
                        <View style={styles.enterView}>
                            <RectButton onPress={handleChangeContentToLogin}>
                                <Image source={Login} style={styles.enterViewCard}/>
                            </RectButton>
                            <RectButton onPress={handleNavigateToLanding}>
                                <Image source={NoLogin} style={styles.enterViewCard}/>
                            </RectButton>
                        </View>
                    ):content == "Login" ? (
                        <>
                            <RectButton rippleColor="transparent" onPress={handleChangeContentToEnterView} style={styles.goBack}>
                                <Image source={LeftArrow} />
                                <Text style={styles.goBackText}>Voltar</Text>
                            </RectButton>
                            <Form ref={formRef} onSubmit={() => {}}>
                                <Input 
                                    autoCorrect={false} 
                                    autoCapitalize="none" 
                                    keyboardType="email-address" 
                                    name="email" 
                                    icon="mail" 
                                    placeholder="E-mail (Ex: exemplos@exe.com)" 
                                    returnKeyType="next"
                                    onSubmitEditing={() => { 
                                        passwordInputRef.current?.focus() 
                                    }} 
                                />
                                <Input 
                                    ref={passwordInputRef} 
                                    name="password" 
                                    icon="lock" 
                                    placeholder="Senha (No mínimo 6 caracteres)" 
                                    secureTextEntry 
                                    returnKeyType="send" 
                                    onSubmitEditing={() => { 
                                        formRef.current?.submitForm() 
                                    }} 
                                />
                                <View>
                                    <Button onPress={() => {setLoginAlertShow(true)}}>Entrar</Button>
                                    <AwesomeAlert
                                        show={loginAlertShow}
                                        showProgress={false}
                                        title="Usuário ou senha inválido!"
                                        message="Por favor verifique se digitou corretamente suas credenciais. Caso não possua acesso ainda a nossa plataforma, cadastre-se agora!"
                                        closeOnTouchOutside={true}
                                        closeOnHardwareBackPress={true}
                                        showCancelButton={false}
                                        showConfirmButton={true}
                                        cancelText="No, cancel"
                                        confirmText="OK"
                                        confirmButtonColor="#00A144"
                                        onCancelPressed={() => {
                                            setLoginAlertShow(false)
                                        }}
                                        onConfirmPressed={() => {
                                            setLoginAlertShow(false)
                                        }}
                                    />
                                </View>
                            </Form>
                            <Text onPress={handleChangeContentToForgotPassword} style={styles.forgotPassword}>Esqueci minha senha</Text>
                            <RectButton onPress={handleNavigateToNoDevPage} style={styles.acessSolicitation}>
                                <Image source={LoginIcon}/>
                                <Text style={styles.acessSolicitationText}>Solicite agora seu acesso</Text>
                            </RectButton>
                        </>
                    ): content == "ForgotPassword" ? (
                        <>
                            <RectButton rippleColor="transparent" onPress={handleChangeContentToLogin} style={styles.goBack}>
                                    <Image source={LeftArrow}/>
                                    <Text style={styles.goBackText}>Voltar</Text>
                            </RectButton>
                            <Image style={styles.forgotPasswordImage} source={ForgotPassword}/>
                            <Form style={styles.forgotPasswordForm} ref={formRef} onSubmit={() => {}}>
                                <Input 
                                    autoCorrect={false} 
                                    autoCapitalize="none" 
                                    keyboardType="email-address" 
                                    name="email" 
                                    icon="mail" 
                                    placeholder="E-mail de recuperação" 
                                    returnKeyType="send"
                                />
                                <View>
                                    <Button onPress={() => {setForgotPasswordAlertShow(true)}}>Envie minha senha no e-mail</Button>
                                    <AwesomeAlert
                                        show={forgotPasswordAlertShow}
                                        showProgress={false}
                                        title="Usuário não encontrado!"
                                        message="Esse e-mail não pertence a nenhum usuário de nossa plataforma, favor insira um e-mail válido ou cadastre-se para obter seu acesso 😁."
                                        closeOnTouchOutside={true}
                                        closeOnHardwareBackPress={true}
                                        showCancelButton={false}
                                        showConfirmButton={true}
                                        cancelText="No, cancel"
                                        confirmText="OK"
                                        confirmButtonColor="#00A144"
                                        onCancelPressed={() => {
                                            setForgotPasswordAlertShow(false)
                                        }}
                                        onConfirmPressed={() => {
                                            setForgotPasswordAlertShow(false)
                                        }}
                                    />
                                </View>
                            </Form>
                            </>
                    ) : null}
                </View>
            </View>
        </>
    )
}

export default Landing