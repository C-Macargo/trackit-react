import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

function Footer() {
    return (

        <>
            <FooterContainer>
                <div>
                    <p>Hábitos</p>
                </div>

                
                <ProgressBarContainer> {/* div to encopass circular progress bar*/} 
                    <ProgressBar
                        value={33}
                        background
                        text={"Hoje"}
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#52B6FF",
                            pathColor:"#FFFFFF",
                            textColor: "#FFFFFF",
                            trailColor: "transparent",
                        })}
                    >   
                    </ProgressBar>
                </ProgressBarContainer>

                <div>
                    <p>Histórico</p>
                </div>
            </FooterContainer>
        </>
    )


}


export default Footer


const FooterContainer = styled.footer`
    position:fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;    
    flex-direction:row;
    align-items:center;
    background-color:#FFFFFF;
    width: 375px;
    height: 70px;
    justify-content:space-around;


    p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;
}
`
const ProgressBarContainer = styled.div`
    height:90px;
    width:90px;
    margin-bottom:30px;

`
const ProgressBar = styled(CircularProgressbar)`

`