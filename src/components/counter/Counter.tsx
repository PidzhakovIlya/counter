import React, {useState} from 'react';
import styled from "styled-components";
import {Button} from '../button/Button';
import {Display} from '../display/Display';
import {baseTheme} from "../theme";
import {FlexWrapper} from "../FlexWrapper";


type CounterTypeProps = {
    min: number
    max: number
    count: number
    setCount:(value: number)=>void
}


export const Counter:React.FC<CounterTypeProps> = ({min, max, count, setCount}) => {


    const counterHandler = () => {
        setCount(count + 1)
    }
    const resetCounter = () => {
        setCount(min)
    }
    return (
        <CounterBox>
            <Display counter={count} maxCount={max}/>
            <FlexWrapper justify={"space-evenly"}>
                <Button name={"SET"} callBack={counterHandler} disabled={count === max}/>
                <Button name={"RESET"} callBack={resetCounter} disabled={count === min}/>
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