import React, {useState} from 'react';
import styled from "styled-components";
import {Button} from '../button/Button';
import {baseTheme} from "../theme";
import {FlexWrapper} from "../FlexWrapper";
import { DisplaySettings } from './displaySettings/DisplaySettings';

type SettingsCounterPropsType = {

    setMin: (value:number)=>void
    setMax: (value:number)=>void
    min:number
    max:number
}

export const SettingsCounter:React.FC<SettingsCounterPropsType> = ({setMin, setMax, min, max}) => {
    const setMinHandler = ()=>{
        setMin(min)
    }
    const setMaxHandler = ()=>{
        setMax(max)
    }
    return (
        <CounterBox>
            <DisplaySettings setMin={setMin} setMax={setMax} />
            <FlexWrapper justify={"space-evenly"} >
                <Button name={"SetStart"} callBack={setMinHandler} disabled={false}/>
                <Button name={"SetEnd"} callBack={setMaxHandler} disabled={false}/>
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
