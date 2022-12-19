import Footer from "../components/Footer"
import Header from "../components/Header"
import styled from "styled-components";




function HistoryScreen (){
    


    return(

        <>
        <Header/>
            
        <HistoryContainer>
        <HistoryTitleContainer>
            <h1>Histórico</h1>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </HistoryTitleContainer>
        </HistoryContainer>
        <Footer/>
        </>
    )


}

export default HistoryScreen


const HistoryContainer = styled.div`
    width:310px;
    margin: 0 auto;
    margin-top:90px;
    left: 0;
    right: 0;

`

const HistoryTitleContainer = styled.div`
    margin-bottom:15px;

h1{
        color: #126BA5;
        font-size: 22.976px;
        line-height: 29px;
        margin-bottom:15px;
    }

    p{
        color: #666666;;
        font-size: 17.976px;
        line-height: 22px;
    }
    
    h2{
        font-size: 17.976px;
        line-height: 22px;
        color: #8FC549;
    }
`