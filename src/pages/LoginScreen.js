import LoginForm from "../components/LoginForm"
import logo from "../assets/logo.png"
import styled from "styled-components";
import { Link } from "react-router-dom";

function LoginScreen(){



    return(
    <StyledContainer>
    <Logo src={logo}></Logo>
    <LoginForm>
    </LoginForm>
    <StyledLink>
        <Link to="/cadastro">
            Não tem uma conta? Cadastre-se!
        </Link> 
    </StyledLink>
    </StyledContainer>
    )
}

export default LoginScreen

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
