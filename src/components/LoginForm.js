import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { ThreeDots } from  'react-loader-spinner'



function LoginForm(){
const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
const [disabledstate, setDisabledState] = useState("")
const [email, setemail] = useState("")
const [password, setPassword] = useState("")

    function loginUser(e){
        setDisabledState("disabled")
        const data = {
            email: email,
            password: password
        }
        const loginPrommise = axios.post(URL, data);

        loginPrommise.then(success => {
                console.log(success)
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
                    type="submit"
                    id="submitbutton"
                    display={(disabledstate === "") ? true : false}
                    >  
                        <div>
                        <p>Cadastrar</p>
                        <ThreeDots visible={disabledstate} color={"#FFFFFF"} ></ThreeDots>
                        </div>
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
    position:relative;
`


const Label = styled.label`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    width: 303px;
    height: 45px;
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
    position:relative;
    margin:auto;
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