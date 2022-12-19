import styled from "styled-components";
import axios from "axios";
import { ThreeDots } from  'react-loader-spinner'
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"

import {UserDataContext} from "../AppContext/UserDataContext"



function LoginForm(){

const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
const [disabledstate, setDisabledState] = useState("")
const [email, setemail] = useState("")
const [password, setPassword] = useState("")
const { setUserData } = useContext(UserDataContext)


        const navigate = useNavigate()

    function loginUser(e){
        setDisabledState("disabled")
        const data = {
            email: email,
            password: password
        }
        const loginPrommise = axios.post(URL, data);

        loginPrommise.then(success => {
                setUserData(success.data)
                console.log(success)
                setDisabledState("")
                navigate("/hoje")
            });

            loginPrommise.catch(error => {
                alert(error)
                console.log(error)
                setDisabledState("")
            });


        e.preventDefault()
    }


    return (
        <Form onSubmit={loginUser}>
            <Label htmlFor="email">
                <Input
                    disabled = {disabledstate}
                    placeholder="email"
                    id="email"
                    type="text"
                    value={email}
                    onChange={s => setemail(s.target.value)}
                    required
                >
                </Input>
            </Label>
            <Label htmlFor="password">
                <Input
                    disabled = {disabledstate}
                    placeholder="senha"
                    id="password"
                    type="text"
                    value={password}
                    onChange={s => setPassword(s.target.value)}
                    required
                >
                </Input>
            </Label>
            <SubmitButton
                    disabled = {disabledstate}
                    type="submit"
                    id="submitbutton"
                    display={(disabledstate === "") ? true : false}
                    >  
                        <div>
                        <p>Entrar</p>
                        <ThreeDots visible={disabledstate} color={"#FFFFFF"} ></ThreeDots>
                        </div>
                </SubmitButton>
        </Form>
    )
}



export default LoginForm

const Form = styled.form`
    display:flex;
    flex-direction:column;
    width: 303px;
    margin:auto;
    position:relative;
`


const Label = styled.label`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    width: 303px;
    height: 45px;
    font-size: 19.976px;
    line-height: 25px;
    margin-bottom:6px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

`
const SubmitButton = styled.button `
    position:relative;
    margin:auto;
    font-size: 20.976px;
    line-height: 26px;
    color: #FFFFFF;
    border: none;
    background: #52B6FF;
    border-radius: 4.63636px;
    width: 309px;
    height: 45px;

    div{
    display:flex;
    position:absolute;
    width:100%;
    height:0%;
    margin:auto;
    display:flex;
    justify-content:center;
    align-items:center;
    }

    p{
        display: ${props => props.display ? 'flex' : 'none'};
    }

`