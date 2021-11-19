import Login from "./Login";
import SignUp from "./SignUp";
import {useState} from "react";
import "../assets/Form.css";
const Form = () => {
    const [activeTab, setActiveTab] = useState("login");

    const toggleTab = (e) => {
        const currentTab = e.target.dataset.tab;
        setActiveTab(currentTab);
    }
    return (
        <div className = "form">
            <div className = "form__content">
                <div className = "tabs">
                    <button 
                    onClick = {toggleTab} 
                    data-tab = "login" 
                    className = {`form__button ${activeTab === "login" ? "active" : "" }`}>
                        Login
                    </button>
                    <button 
                    onClick = {toggleTab} 
                    data-tab = "signup" 
                    className = {`form__button ${activeTab === "signup" ? "active" : ""}`}>
                        Sign Up
                    </button>
                </div>
                <div className = "form__details">
                    {
                        activeTab === "login" ? <Login /> : <SignUp />
                    }
                </div>
            </div>
        </div>
    );
}

export default Form;