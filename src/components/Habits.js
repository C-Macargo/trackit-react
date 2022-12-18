import WeekDays from "../components/WeekDays"
import styled from "styled-components";
import { useState } from "react"
import { ThreeDots } from 'react-loader-spinner'
import { useContext } from "react";
import {UserDataContext} from "../AppContext/UserDataContext"
import axios from "axios";


function Habits() {

    const { userData } = useContext(UserDataContext)

    const [habitNumber, setHabitNumber] = useState(0)
    const [plusCLicked, setPluClicked] = useState(false)
    const [disabledstate, setDisabledState] = useState("")
    const [createNewHabit, setCreateNewHabit] = useState({ days: [], name: "" });

    const PostURL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
    const token = userData.token

/* CODE OPEN AND CLOSE NEW HABIT WINDOW */
    function HandleClickPlus() {
        setPluClicked(!plusCLicked)
    }

/* CODE TO MARK AND UNMARK DAYS ON NEW HABITS WINDOW */
    function HandleNewHabbitEvent(day) {
        if (createNewHabit.days.includes(day)) {
            setCreateNewHabit({ ...createNewHabit, days: createNewHabit.days.filter((d) => d !== day), });
        } else {
            const finalDays = [...createNewHabit.days, day].sort();
            setCreateNewHabit({ ...createNewHabit, days: finalDays });
        }
    };

/* CODE TO CREATE NEW HABIT ON API */
    function CreateNewHabit(e) {
        const header = { header: { Authorization: `Bearer ${token}` } };
        const postPrommise = axios.post(PostURL, createNewHabit, header );

        postPrommise.then(success => {
            console.log(success)
            setCreateNewHabit({ days: [], name: "" })
        });

        postPrommise.catch(error => {
            alert(error)
            console.log(error)
            setDisabledState("")
        });

        e.preventDefault()
    }


    return (
        <HabitContainer>

            <NewHabitContainer>
                <p>Meus hábitos</p>
                <PlustButton onClick={HandleClickPlus}>
                    <p>+</p>
                </PlustButton>
            </NewHabitContainer>

            {plusCLicked ?
                (
                    <Form onSubmit={CreateNewHabit}>
                        <AddHabitContainer>
                            <Input
                                placeholder="nome do hábito"
                                required
                                onChange={(s) => setCreateNewHabit({ ...createNewHabit, name: s.target.value })}
                                value={createNewHabit.name}
                            >
                            </Input>
                            <div >
                                {WeekDays.map((d) => (
                                    <NewHabitDayButton
                                        clicked={createNewHabit.days.includes(d.id)}
                                        type="button"
                                        key={d.id}
                                        onClick={() => HandleNewHabbitEvent(d.id)}
                                    >
                                        {d.name}
                                    </NewHabitDayButton>
                                ))}
                            </div>
                            <AddHabitBottomButtonContainer>

                                <p onClick={HandleClickPlus}>Cancelar</p>

                                <SaveButton
                                    display={(disabledstate === "") ? true : false}
                                    type="submit"
                                    id="submitbutton"
                                >
                                    <p>Cadastrar</p>
                                    <ThreeDots visible={disabledstate} color={"#FFFFFF"} ></ThreeDots>
                                </SaveButton>
                            </AddHabitBottomButtonContainer>
                        </AddHabitContainer>
                    </Form>)
                : (<div></div>)}



            <NohabitContainer display={!habitNumber == 0 ? habitNumber : undefined}>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </NohabitContainer>
        </HabitContainer>
    )


}


export default Habits


const Form = styled.form`
`
const NewHabitDayButton = styled.button`

    width: 30px;
    height: 30px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    background-color: ${(props) => (props.clicked ? "#CFCFCF" : "#fff")};
    margin-left:5px;
    color: ${(props) => (props.clicked ? "#fff" : "#CFCFCF")};
    

`


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
    position:relative;

`

const Input = styled.input`
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

const AddHabitBottomButtonContainer = styled.div`
    width:200px;
    display:flex;
    position:absolute;
    bottom:30px;
    right:0;
    justify-content:space-around;
    align-items:center;

    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        color: #52B6FF;
    }
`

const SaveButton = styled.button`
    position:relative;
    margin:auto;
    font-family:inherit;
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 26px;
    color: #FFFFFF;
    border: none;
    background: #52B6FF;
    border-radius: 4.63636px;
    width: 84px;
    height: 35px;

    div{
    display:flex;
    position:absolute;
    width:100%;
    height:0%;
    margin:auto;
    display:flex;
    justify-content:center;
    align-items:center;
    }

    p{
        display: ${props => props.display ? 'flex' : 'none'};
        color:white;
    }

`