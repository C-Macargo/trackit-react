
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import axios from "axios";
import styled from "styled-components";
import { useContext } from "react";
import { UserDataContext } from "../AppContext/UserDataContext"
import { WheelPercentageContext } from "../AppContext/WheelPercentageContext"
import { useState, useEffect } from "react"
import { AiFillCheckSquare } from "react-icons/ai";


function Today() {

    const { userData } = useContext(UserDataContext)
    const { setPercentage, percentage } = useContext(WheelPercentageContext)
    const [todayHabits, setTodayHabits] = useState([])
    const [refresh, setRefresh] = useState(false);
    const token = userData.token
    const today = dayjs().locale("pt-br").format("dddd, DD/MM");


    useEffect(() => {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"
        const header = { headers: { Authorization: `Bearer ${token}` } };
        const getTodayHabits = axios.get(URL, header)

        getTodayHabits.then(response => {
            setTodayHabits(response.data)
            console.log(todayHabits)
        });
    }, [refresh]);

    //* CODE TO CHECK HABITS *//
    function HandleCheckHabit(id) {
        setRefresh(true)
        console.log(id)
        const CheckURL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`
        const header = { headers: { Authorization: `Bearer ${token}` } };
        const checkHabit = axios.post(CheckURL, {}, header)

        checkHabit.then(response => {
            console.log(response)
            setRefresh(false)
        });
    }

    //* CODE TO UNCHECK HABITS *//
    function HandleUnCheckHabit(id) {
        setRefresh(true)
        const UnCheckURL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`
        const header = { headers: { Authorization: `Bearer ${token}` } };
        const uncheckHabit = axios.post(UnCheckURL, {}, header)

        uncheckHabit.then(response => {
            console.log(response)
            setRefresh(false)
        });
    }

    //* CODE TO CALCULETE PERCENTAGE OF COMPLETED HABITS *//
    const checkedhabits = todayHabits.filter((habit) => habit.done).length;
    const concludedPercentage = (checkedhabits / todayHabits.length) * 100;
    setPercentage(concludedPercentage)

    return (

        <TodayContainer>
            <TodayTitle>
                <h1>{today}</h1>
                {checkedhabits === 0 ?
                    <p>Nenhum hábito concluído ainda</p> :
                    <h2>{percentage.toFixed(0)}% dos hábitos concluídos</h2>
                }
            </TodayTitle>
            {todayHabits.map((habit) =>
                <TodayHabitContainer 
                checked={habit.done ? true : undefined} 
                highsequencecolor = {habit.currentSequence === habit.highestSequence && habit.done ? true : false}
                >
                    <div>
                        <h1>{habit.name}</h1>
                        <p>Sequência atual: <strong>{habit.currentSequence} dias </strong></p>
                        <p>Seu recorde: <strong2>{habit.highestSequence} dias</strong2></p>
                    </div>
                    <CheckIcon
                        checked={habit.done ? true : undefined}
                        onClick={() => habit.done ? HandleUnCheckHabit(habit.id) : HandleCheckHabit(habit.id)} />
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
        font-size: 22.976px;
        line-height: 29px;
    }

    p{
        color: #BABABA;
        font-size: 17.976px;
        line-height: 22px;
    }
    
    h2{
        font-size: 17.976px;
        line-height: 22px;
        color: #8FC549;
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
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        margin-bottom:7px;
    }

    p{
        margin-left:10px;
        font-size: 12.976px;
        line-height: 16px;
        color:#666666;
    }

    strong{
        color:${(props) => (props.checked ? "#8FC549" : "#666666")};
    }
    strong2{
        color:${(props) => (props.highsequencecolor ? "#8FC549" : "#666666")};
    }

`
const CheckIcon = styled(AiFillCheckSquare)`
    position: absolute;
    font-size:70px;
    right:15px;
    top:10px;
    color:${(props) => (props.checked ? "#8FC549" : "#CFCFCF")};

`