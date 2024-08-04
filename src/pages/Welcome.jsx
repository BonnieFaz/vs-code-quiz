import React from "react";
import { Header } from "../components/Header";
import { AppInput } from "../components/AppInput";
import { AppButton } from "../components/AppButton";
import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header
            headerType = "h1"
            headerText = "Добро пожаловать в квиз от лучшего учебного центра"
           />
          <Header
            headerType = "h1"
            headerText = "Нажмите на кнопку что бы продолжить"
           />
          <form className="welcome__form">
            {/* <AppInput
              inputText="Ваше имя"
              errorText="Введите имя в правильном формате"
              inputPlaceholder="Введите ваше имя"
              inputType="text"
            />
            <AppInput
              inputText="Ваш номер"
              errorText="Введите номер в правильном формате"
              inputPlaceholder="Введите ваш номер"
              inputType="tel"
            /> */}
            <Link to="/step-one" ><AppButton isDisabled={false} /></Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
