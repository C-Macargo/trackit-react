import { useState } from "react"
import styled from "styled-components"
import React from "react";


function DayButton({ children }) {

    const [clickedButton, SetClickedButton] = useState(false)

    function HandleClicked() {
        SetClickedButton(!clickedButton)
    }



    return (
        <StyledDayButton
            clickedButton={clickedButton}
            onClick={HandleClicked}
        >
            {children}

        </StyledDayButton>
    )

}


export default DayButton

const StyledDayButton = styled.button`
    width: 30px;
    height: 30px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    background: ${props => props.clickedButton ? "#CFCFCF" : "#FFFFFF"};
    margin-left:5px;
    
`