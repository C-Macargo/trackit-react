import WeekDays from "../components/WeekDays"
import styled from "styled-components";
import { useState, useEffect } from "react"
import { ThreeDots } from 'react-loader-spinner'
import { useContext } from "react";
import { UserDataContext } from "../AppContext/UserDataContext"
import axios from "axios";
import { IoTrashOutline } from "react-icons/io5";
import { confirmAlert } from 'react-confirm-alert'; 
import "react-confirm-alert/src/react-confirm-alert.css";


function Habits() {

    const { userData } = useContext(UserDataContext)
    const [habitNumber, setHabitNumber] = useState(0)
    const [plusCLicked, setPluClicked] = useState(false)
    const [disabledstate, setDisabledState] = useState("")
    const [createNewHabit, setCreateNewHabit] = useState({ days: [], name: "" });
    const [allHabits, SetAllHabits] = useState([])
    const [refresh, setRefresh] = useState(false);
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
    const token = userData.token

    useEffect(() => {
        const header = { headers: { Authorization: `Bearer ${token}` } };
        const getHabits = axios.get(URL, header)

        getHabits.then(response => {
            SetAllHabits(response.data)
            setHabitNumber(response.data.length)
                ;
        });
    }, [refresh]);

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
        setDisabledState("disabled")
        setRefresh(true)
        const header = { headers: { Authorization: `Bearer ${token}` } };
        const postPrommise = axios.post(URL, createNewHabit, header);

        postPrommise.then(success => {
            setRefresh(false)
            setPluClicked(!plusCLicked)
            setDisabledState("")
            console.log(success)
            setCreateNewHabit({ days: [], name: "" })
        });

        postPrommise.catch(error => {
            setRefresh(false)
            alert(error)
            console.log(error)
            setDisabledState("")
        });
        e.preventDefault()
    }

    /* CODE TO DELETE HABIT ON API */


    function DeleteHabit(id) {

        setRefresh(true)

        confirmAlert({
            title: 'Tem certeza que deseja deletar esse hábito?',
            buttons: [
                {
                    label: 'Sim',
                    onClick: () =>{   
                    const header = { headers: { Authorization: `Bearer ${token}` } };
                    const DeletePromisse = axios.delete(`${URL}/${id}`, header);
                    DeletePromisse.then((success) => {
                        console.log(success.data)
                        setRefresh(false)
                            ;
                    });
                    DeletePromisse.catch((error) => {
                        alert(error.response.data.message);
                    });
                }},
                {
                    label: 'Não',
                }
            ]
        });
    }

    return (
        <HabitContainer>
            <NewHabitContainer>
                <p>Meus hábitos</p>
                <PlustButton data-test="habit-create-btn" onClick={HandleClickPlus}>
                    <p>+</p>
                </PlustButton>
            </NewHabitContainer>

            {plusCLicked ?
                (
                    <Form onSubmit={CreateNewHabit}>
                        <AddHabitContainer data-test="habit-create-container">
                            <Input
                                data-test="habit-name-input"
                                placeholder="nome do hábito"
                                onChange={(s) => setCreateNewHabit({ ...createNewHabit, name: s.target.value })}
                                value={createNewHabit.name}
                            >
                            </Input>
                            <div >
                                {WeekDays.map((day) => (
                                    <NewHabitDayButton
                                        data-test="habit-day"
                                        clicked={createNewHabit.days.includes(day.id)}
                                        type="button"
                                        key={day.id}
                                        onClick={() => HandleNewHabbitEvent(day.id)}
                                    >
                                        {day.name}
                                    </NewHabitDayButton>
                                ))}
                            </div>
                            <AddHabitBottomButtonContainer>
                                <p data-test="habit-create-cancel-btn" onClick={HandleClickPlus}>Cancelar</p>
                                <SaveButton
                                    data-test="habit-create-save-btn"
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

            {habitNumber === 0 ?
                <NohabitContainer display={!habitNumber === 0 ? habitNumber : undefined}>
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </NohabitContainer> :
                <HabitList>
                    {allHabits.map((habit,) =>
                        <HabitListBox data-test="habit-container" id={habit.id}>
                            <p data-test="habit-name" >{habit.name}</p>
                            <div>
                                {WeekDays.map((d) => (
                                    <NewHabitDayButton  data-test="habit-day" clicked={habit.days.includes(d.id)}>
                                        {d.name}
                                    </NewHabitDayButton>
                                ))}
                            </div>
                            <TrashIcon data-test="habit-delete-btn" onClick={() => DeleteHabit(habit.id)} />
                        </HabitListBox>
                    )}
                </HabitList>
            }
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
    font-size: 19.976px;
    line-height: 25px;
    background-color: ${(props) => (props.clicked ? "#cfcfcf" : "#ffffff")};
    margin-left:5px;
    color: ${(props) => (props.clicked ? "#ffffff" : "#dbdbdb")};
`
const HabitContainer = styled.div`
    margin-top:70px;
    width: 375px;
    display:flex;
    flex-direction:column;
`
const NewHabitContainer = styled.div`
    margin-top:10px;
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
    background-color:white;
    margin-bottom:20px;
`
const Input = styled.input`
        margin-top:15px;
        margin-bottom:5px;
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
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
const HabitList = styled.div`
    display:flex;
    flex-direction:column;
`
const HabitListBox = styled.div`
    border-radius: 5px;
    position:relative;
    margin:auto;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    width: 340px;
    height: 91px;
    margin-bottom:10px;
    background-color:white;
    p{
        margin-left:15px;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
    }
`
const TrashIcon = styled(IoTrashOutline)`
    font-size:20px;
    position:absolute;
    right:15px;
    top:10px;
`