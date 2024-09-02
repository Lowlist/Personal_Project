import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate} from 'react-router-dom';
import Header from "./routes/header/Header.js";
import "./App.css";

// 컨트롤 K + S << 키설정

function App() {
    const [hello, setHello] = useState("");
    return (
        <div className="App" style={{ backgroundImage : 'url(img/main_back.svg)',backgroundSize : 'cover' }}>
            <Header/>
        </div>
    );
}

export default App;