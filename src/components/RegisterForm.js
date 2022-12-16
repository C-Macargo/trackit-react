import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function RegisterForm(){
    const [email, setemail] = useState("")
    const [name, setName] = useState("")
    const [picture, setPicture] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    

    function RegisterUser(s){
        
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
        const data = {
                email: email,
                name: name,
                image: picture,
                password: password
            };

            const postPrommise = axios.post(URL, data);

            postPrommise.then(response => {
                navigate("/")
                console.log(response)
            });



        s.preventDefault()
        console.log(data)    

    }



    return (
        <Form >
            <Label htmlFor="email">
                <Input
                    placeholder="email"
                    id="email"
                    type="email"
                    value={email}
                    onChange={s => setemail(s.target.value)}
                    required
                >
                </Input>
            </Label>
            <Label htmlFor="password">
                <Input
                    placeholder="senha"
                    id="password"
                    type="text"
                    value={password}
                    onChange={s => setPassword(s.target.value)}
                    required
                >
                </Input>
            </Label>
            <Label htmlFor="name">
                <Input
                    placeholder="nome"
                    id="name"
                    type="text"
                    value={name}
                    onChange={s => setName(s.target.value)}
                    required
                >
                </Input>
            </Label>
            <Label htmlFor="url">
                <Input
                    placeholder="foto"
                    id="picture"
                    type="text"
                    value={picture}
                    onChange={s => setPicture(s.target.value)}
                    required
                >
                </Input>
            </Label>
                <SubmitButton
                    type="submit"
                    id="submitbutton"
                    onClick={RegisterUser}
                    >
                        Entrar
                </SubmitButton>
        </Form>
    )
}



export default RegisterForm


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
`