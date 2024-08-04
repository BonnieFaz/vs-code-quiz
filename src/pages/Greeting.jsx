import React from "react";
import { Link } from "react-router-dom";
import { AppButton } from "../components/AppButton";
import { Header } from "../components/Header";

const Greeting = () => {
    return (
        // <div className="container">
        //     <div className="welcome">
        //         <form className="welcome__form">
        //             <Header
        //             headerType = "h1"
        //             headerText = "Добро пожаловать! Пройдите регистрацию что бы продолжить или войдите в аккаунт если он уже существует."
        //             />
        //             <Link to="/Login">
        //                 <AppButton isDisabled={false} buttonText="Войти" />
        //             </Link>
        //             <Link to="/Registration">
        //                 <AppButton isDisabled={false} buttonText="Зарегистрироваться" />
        //             </Link>
        //         </form>
        //     </div>
        // </div>

        
        <div className="container">
            <div className="wrapper">
                <div className="welcome">
                    <form className="welcome__form">
                        <Header
                        headerType = "h1"
                        headerText = "Добро пожаловать! Пройдите регистрацию что бы продолжить или войдите в аккаунт если он уже существует."
                        />
                        <Link to="/Login">
                            <AppButton isDisabled={false} buttonText="Войти" />
                        </Link>
                        <Link to="/Registration">
                            <AppButton isDisabled={false} buttonText="Зарегистрироваться" />
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Greeting;
