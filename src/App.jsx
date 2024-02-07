import React from "react"
import { Routes, Route } from 'react-router-dom'
import CourseSingle from "./CourseSingle/CourseSingle"
import Courses from "./CoursesPage/Courses"
import Home from "./Home/Home"
import "./App.css"
import SingIn from "./SignIn/SingIn"
import SignUp from "./SignUp/SignUp"

function App() {
    return (
        <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Courses" element={<Courses />} />
                    <Route path="/Coursesingle" element={<CourseSingle />} />
                    <Route path="/SignIn" element={<SingIn/>}/>
                    <Route path="/SignUp" element={<SignUp/>}/>
                </Routes>
         
        </div>
    )
}

export default App
