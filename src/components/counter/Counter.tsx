import React, {useState} from "react";
import styled from "styled-components";
import {Button} from "../button/Button";
import {Display} from "../display/Display";
import {baseTheme} from "../theme";
import {FlexWrapper} from "../FlexWrapper";


type CounterTypeProps = {
    min: number
    max: number
    count: number
    setCount: (value: number) => void
}


export const Counter: React.FC<CounterTypeProps> = ({min, max, count, setCount}) => {


    const counterHandler = () => {
        setCount(count + 1)
    }
    const resetCounter = () => {
        setCount(min)
    }
    return (
        <CounterBox>
            {/*{max > min && min >= 0 ?*/}
            {/*    <Display counter={count} maxCount={max}/>*/}
            {/*    : <Display counter={"Incorrect Value"} maxCount={max}/>*/}
            {/*}*/}
            {max <= Number(localStorage.getItem("start")) || max<=0 || min >= Number(localStorage.getItem("end")) || min<0  ?
                <Display counter={"Incorrect Value"} maxCount={max}/>
                : min !== Number(localStorage.getItem("start")) || max !== Number(localStorage.getItem("end")) ?
                    <Display counter={"Pres SetStart"} maxCount={max}/>
                    : <Display counter={count} maxCount={max}/>
            }


            <FlexWrapper justify={"space-evenly"}>
                <Button name={"SET"} callBack={counterHandler} disabled={count >= max || count < min}/>
                <Button name={"RESET"} callBack={resetCounter} disabled={count === min || count < min || count > max}/>
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