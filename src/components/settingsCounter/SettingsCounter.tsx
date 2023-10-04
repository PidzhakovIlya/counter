import React, {useState} from "react";
import styled from "styled-components";
import {Button} from "../button/Button";
import {baseTheme} from "../theme";
import {FlexWrapper} from "../FlexWrapper";
import {DisplaySettings} from "./displaySettings/DisplaySettings";

export type SettingsCounterPropsType = {

    setMin: (value: number) => void
    setMax: (value: number) => void
    min: number
    max: number
}
export type SetCounterPropsType = SettingsCounterPropsType &  {
    setCount: (value: number) => void
}

export const SettingsCounter: React.FC<SetCounterPropsType> = ({setMin, setMax, min, max, setCount}) => {

        const setCountHandler = ()=> {

            setCount(min)
        }
        const restartSettingsHandler = ()=>{
            setMin(0);
            setMax(5)
            setCount(min)
        }
    return (
        <CounterBox>
            <DisplaySettings setMin={setMin} setMax={setMax} min={min} max={max}/>
            <FlexWrapper justify={"space-evenly"}>
                <Button name={"SetStart"} callBack={setCountHandler} disabled={max <= min}/>
                <Button name={"Restart"} callBack={restartSettingsHandler} disabled={false}/>

            </FlexWrapper>
        </CounterBox>
    );
};

const CounterBox = styled.div`
  width: 200px;
  height: 150px;
  border-radius: 10px;
  border: 2px solid ${baseTheme.primary};
  margin-top: 200px;

`
