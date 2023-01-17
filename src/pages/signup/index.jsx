import React from 'react'
import { Header } from '../../components/Header';

import {TextContainer, FormContainer, FormInput, ButtonContainer, FormButton, DivForm, DivSpan} from './styles'

const SignUp = () => {
  return (<>
    <Header />
    <TextContainer>
        <h2>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</h2>
    </TextContainer>
    <FormContainer>
        <h2>Comece agora grátis.</h2> <br />
        <p>Crie sua conta e make the change._</p> <br />
        <FormInput placeholder='Nome completo' />
        <hr /> <br />
        <FormInput placeholder='E-mail' /> <br />
        <hr /> <br />
        <FormInput placeholder='Password' /> <br />
        <hr /> <br />
        <ButtonContainer>
            <FormButton>Criar minha conta</FormButton>
        </ButtonContainer> <br />
        <DivForm>
            <p>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</p>
        </DivForm>
        <DivSpan>
        <span>Já tenho conta. <a href='/login'>Fazer login</a></span>
        </DivSpan> 
        

        

    </FormContainer>
    </>)
}

export {SignUp}
