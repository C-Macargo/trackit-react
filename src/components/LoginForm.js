import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



function LoginForm(){

    return (
        <Form>
            <Label htmlFor="email">
                <Input
                    placeholder="email"
                >
                </Input>
            </Label>
            <Label htmlFor="password">
                <Input
                    placeholder="senha"
                >
                </Input>
            </Label>
            <SubmitButton>
                Entrar
            </SubmitButton>
        </Form>
    )
}



export default LoginForm


const Form = styled.form`
    font-family: 'Lexend Deca';
    display:flex;
    flex-direction:column;
    width: 303px;
    margin:auto;
`


const Label = styled.label`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    width: 303px;
    height: 45px;
    color: #DBDBDB;
    font-family:inherit;
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    margin-bottom:6px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

`
const SubmitButton = styled.button `
    font-family:inherit;
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    color: #FFFFFF;

    border: none;
    background: #52B6FF;
    border-radius: 4.63636px;
    width: 309px;
    height: 45px;
`