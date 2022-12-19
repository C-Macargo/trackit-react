
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import GlobalStyle from "./styles/GlobalStyles";
//pages


import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen"
import HabitScreen from "./pages/HabitScreen";
import HistoryScreen from "./pages/HistoryScreen";
import TodayScreen from "./pages/TodayScreen";
//contexts
import { UserDataContext } from "./AppContext/UserDataContext";



export default function App() {

    const [userData, setUserData] = useState([])


    return (
        
        <UserDataContext.Provider value={{ userData, setUserData }}>
            <BrowserRouter>
            <GlobalStyle/>
                <Routes>
                    <Route path="/" element={<LoginScreen />} />
                    <Route path="/cadastro" element={<RegisterScreen />} />
                    <Route path="/habitos" element={<HabitScreen />} />
                    <Route path="/habitos" element={<HabitScreen />} />
                    <Route path="/historico" element={<HistoryScreen />} />
                    <Route path="/hoje" element={<TodayScreen />} />

                </Routes>
            </BrowserRouter>
        </UserDataContext.Provider>

    )
}