import styled from "styled-components";
import { useState } from "react"
import WeekDays from "../components/WeekDays"
import DayButton from "../components/DayButton"

function Habits (){

    const [habitNumber, setHabitNumber] = useState(0)
    const [plusCLicked, setPluClicked] = useState(false)

    
    function HandleClickPlus() {
        setPluClicked(!plusCLicked)
    }

    return(
        <HabitContainer>
            <NewHabitContainer>
                <p>Meus hábitos</p>
                <PlustButton onClick={HandleClickPlus}>
                    <p>+</p>
                </PlustButton>                    
            </NewHabitContainer>

            {plusCLicked? 
            
            
            (<AddHabitContainer> 

                <AddHabitInput
                    placeholder="nome do hábito"
                    >
                </AddHabitInput>
                <div>
                {WeekDays.map((day, index) => <DayButton key ={index}>{day}</DayButton>)}
                </div>

                <div>

                    <p onClick={HandleClickPlus}>Cancelar</p>
                    
                    <button>Salvar</button>
                </div>
            </AddHabitContainer>) 

            : (<></>)}


        
        <NohabitContainer display={!habitNumber == 0 ? habitNumber : undefined}>
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        </NohabitContainer>
        </HabitContainer>
    )


}


export default Habits





const HabitContainer = styled.div`
    margin-top:80px;
    width: 375px;
    display:flex;
    flex-direction:column;
`
const NewHabitContainer = styled.div`
    width: inherit;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:20px;
    p{
        margin-left:17px;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
`
const PlustButton = styled.button`
    display: flex;
    text-align: center;
    align-items: center;
    margin-right:17px;
    width: 40px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    border: none;
    font-family: 'Lexend Deca';
    color:white;
    font-size: 26px;
    p{
        margin:auto;
        color:white;
    }
`


const NohabitContainer = styled.div`
    margin:auto;
    width:335px;
    display:${props => props.display ? 'none' : 'flex'};   
    justify-content:center;
    

    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }
`

const AddHabitContainer = styled.div`
    display:flex;
    flex-direction:column;
    width: 340px;
    height: 180px;
    border-radius: 5px;
    margin:auto;
    align-items:center;

`

const AddHabitInput = styled.input`
        margin-top:15px;
        margin-bottom:5px;
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 25px;
`