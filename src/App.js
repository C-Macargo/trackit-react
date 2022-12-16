import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen"
import RegisterScreen from "./pages/RegisterScreen"


export default function App() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginScreen />} />
                <Route path="/cadastro" element={<RegisterScreen />} />
            </Routes>
        </BrowserRouter>
    )
}