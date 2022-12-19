
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import axios from "axios";
import styled from "styled-components";
import { useContext } from "react";
import { UserDataContext } from "../AppContext/UserDataContext"
import { useState, useEffect } from "react"
import { AiFillCheckSquare } from "react-icons/ai";


function Today(){

    const { userData } = useContext(UserDataContext)
    
    const [todayHabits, setTodayHabits] = useState([])

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"
    const token = userData.token


    const today = dayjs().locale("pt-br").format("dddd, DD/MM");
    console.log(today)

    useEffect(() => {
        const header = { headers: { Authorization: `Bearer ${token}` } };
        const getTodayHabits = axios.get(URL, header)

        getTodayHabits.then(response => {
            setTodayHabits(response.data)
            console.log(todayHabits)
                
        });
    }, []);

function CheckHabit (id){
    

    

}


    return (

        <TodayContainer>
            <TodayTitle>
                <h1>{today}</h1>
                <p>Nenhum hábito concluído ainda</p>
            </TodayTitle>

                {todayHabits.map((habit)=>  
                <TodayHabitContainer>
                    <div>
                        <h1>{habit.name}</h1>
                        <p>Sequência atual: {habit.currentSequence} dias</p>
                        <p>Seu recorde: {habit.highestSequence} dias</p>
                    </div>
                    <CheckIcon color={"test"} onClick={() => CheckHabit(habit.id)} />
                </TodayHabitContainer >)}

            

        </TodayContainer>




    )

}


export default Today


const TodayContainer = styled.div`
    width:310px;
    margin: 0 auto;
    margin-top:90px;
    left: 0;
    right: 0;


`

const TodayTitle = styled.div`
    margin-bottom:15px;

h1{
        color: #126BA5;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
    }

    p{
        color: #BABABA;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
    }
    
`

const TodayHabitContainer = styled.div`
    display:flex;
    position:relative;
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    align-items:center;
    margin-bottom:15px;

    h1{
        margin-left:10px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        margin-bottom:7px;
    }

    p{
        margin-left:10px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: #666666;

    }

`
const CheckIcon = styled(AiFillCheckSquare)`
    position: absolute;
    font-size:70px;
    right:15px;
    top:10px;
    color:#EBEBEB;;
`