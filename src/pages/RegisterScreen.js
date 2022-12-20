import RegisterForm from "../components/RegisterForm"
import styled from "styled-components";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";

function RegisterScreen(){

    return (
        <StyledContainer>
        <Logo src={logo}></Logo>
        <RegisterForm>
        </RegisterForm>
        <StyledLink>
            <Link data-test="login-link" to="/">
                Já tem uma conta? Faça login!
            </Link> 
        </StyledLink>
        </StyledContainer>
    )


}




export default RegisterScreen


const Logo = styled.img`
width: 180px;
height: 178.38px;
display:flex;
margin:auto;
align-items:center;
margin-top:68px;
margin-bottom:32px;

`

const StyledLink = styled.p`
margin:auto;
margin-top:25px;
align-items:center;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 13.976px;
line-height: 17px;
text-align: center;
text-decoration-line: underline;
color: #52B6FF;

`
const StyledContainer = styled.div`
    width:313px;
    display:flex;
    flex-wrap:wrap;
    margin:auto;
`
