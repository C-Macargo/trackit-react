import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import  {WheelPercentageContext} from "../AppContext/WheelPercentageContext"

function Footer() {

    const { percentage } = useContext(WheelPercentageContext)


    return (

        <>
            <FooterContainer>
                <div>
                    <Link to="/habitos">
                    <p>Hábitos</p>
                    </Link>
                </div>

                
                <ProgressBarContainer> {/* div to encopass circular progress bar*/} 
                <Link to="/hoje">
                    <ProgressBar
                        value={percentage}
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
                    </Link>

                </ProgressBarContainer>

                <div>
                    <Link to="/historico">
                    <p>Histórico</p>
                    </Link>
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