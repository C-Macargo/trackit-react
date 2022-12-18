import Header from "../components/Header"
import Footer from "../components/Footer"
import Habits from "../components/Habits"
import styled from "styled-components";



function HabitScreen() {



    return (
        <HabitScreenContainer>
            <Header />
            <Habits/>
            <Footer />
        </HabitScreenContainer>

    )


}


export default HabitScreen


const HabitScreenContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
margin:auto;
`

