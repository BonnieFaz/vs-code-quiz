import React from "react";

import { Header } from "../components/Header";
import { AppInput } from "../components/AppInput";
import { AppButton } from "../components/AppButton";
import { Link } from "react-router-dom";

const Registration = () => {
    return (
      <div className="container">
        <div className="wrapper">
          <div className="welcome">
            <Header />
            <form className="welcome__form">
              <AppInput
                inputText="Ваше имя"
                errorText="Введите имя в правильном формате"
                inputPlaceholder="Введите ваше имя"
                inputType="text"
              />
              <AppInput
                inputText="Ваше имя пользователя"
                errorText="Введите имя пользователя в правильном формате"
                inputPlaceholder="Введите ваше имя пользователя"
                inputType="text"
              />
              <AppInput
                inputText="Ваш номер"
                errorText="Введите номер в правильном формате"
                inputPlaceholder="Введите ваш номер"
                inputType="tel"
              />
              <AppInput
                inputText="Ваша электронная почта"
                errorText="Введите существующую эл. почту"
                inputPlaceholder="Введите вашу почту"
                inputType="text"
              />
              <Link to="/Welcome">
              <AppButton 
                isDisabled={false} 
                buttonText="Зарегистрироваться" 
              />
              </Link> 
            </form>
          </div>
        </div>
      </div>
    );
  };

  export default Registration;