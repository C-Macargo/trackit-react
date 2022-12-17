import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen"
import RegisterScreen from "./pages/RegisterScreen"
import HabitScreen from "./pages/HabitScreen";

export default function App() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginScreen />} />
                <Route path="/cadastro" element={<RegisterScreen />} />
                <Route path="/habitos" element={<HabitScreen />} />
            </Routes>
        </BrowserRouter>
    )
}