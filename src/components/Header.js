import styled from "styled-components";
import { useContext } from "react";
import {UserDataContext} from "../AppContext/UserDataContext"
import { Link } from "react-router-dom";

function Header(){

    const { userData } = useContext(UserDataContext)

    return (

        <HeaderContainer>
            <Link to="/">
            <p>Trackit</p>
            </Link>
            <img src ={userData.image}></img>
        </HeaderContainer>
        
    )
}

export default Header

const HeaderContainer = styled.header `
    position:fixed;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;    
    flex-direction:row;
    align-items:center;
    background-color:#126BA5;
    width: 375px;
    height: 70px;
    justify-content:space-between;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    p{
        font-family: 'Playball';
        font-size: 38.982px;
        line-height: 49px;
        margin-left:18px;
        color:white;
    }
    img{
    width: 51px;
    height: 51px;
    margin-right:18px;
    border-radius: 98.5px;
    }
`