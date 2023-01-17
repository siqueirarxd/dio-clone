import styled from 'styled-components'

export const TextContainer = styled.div `
    display: flex;
    font-family: 'Open Sans';
    max-width: 356px;
    height: 308px;
    margin: 88px 65px;

    h2 {
        color: #FFFFFF;
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 43.58px;
    }
`

export const FormContainer = styled.div `
    position: absolute;
    font-family: 'Open Sans';
    width: 374px;
    height: 450px;
    margin-inline: 60%;
    top: 153px;
    padding: 0 10px;

   
    

    h2 {
        font-style: normal;
        color: #FFFFFF;
        font-size: 32px;
        font-weight: 700;
        line-height: 44px;
    }

    hr {
        border: 1px solid #3B3450;
        width: 275px

    }


`

export const FormInput = styled.input `
    
    background-color: transparent;
    width: 275px;
    height: 30px;
    flex:1;
    border: 0;
    

    
`
export const ButtonContainer = styled.div `
    box-sizing: border-box;

    width: fit-content;
    padding: 2px 2px;
    margin: 10px 50px;

    border: 1px solid #E4105D;
    border-radius: 27px;
`

export const FormButton = styled.button `
    background-color: #E4105D;
    color: #FFFFFF;
    border-radius: 27px;
    height: 30px;
    width: 200px;
`
export const DivForm = styled.div `
    width: 90%;
    height: 75px;

`

export const DivSpan = styled.div `

    margin: 1px 0;

    span {
        font-size: 14px;
        font-weight: 700;
    }

    a {
        color: #23DD7A;
        text-decoration: none;
    }
`