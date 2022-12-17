import styled from "styled-components";

function Header(){

    return (

        <HeaderContainer>
            <p>Trackit</p>
            <img src ={""}></img>
        </HeaderContainer>
        
    )


}


export default Header

const HeaderContainer = styled.header `
    
    position:fixed;
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
    p{
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        margin-left:18px
    }
    img{
    width: 51px;
    height: 51px;
    margin-right:18px;
    }
`