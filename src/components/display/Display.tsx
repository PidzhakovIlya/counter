import React from "react";
import styled from "styled-components";
import {baseTheme} from "../theme";


type DisplayPropsType = {
    counter: number | string
    maxCount?: number
}
type StyledDisplayPropsType = {
    counter?: number | string
    maxCount?: number
}

export const Display: React.FC<DisplayPropsType> = ({counter, maxCount}) => {
    return (
        <DisplayBox counter={counter} maxCount={maxCount}>
            <span>{counter}</span>
        </DisplayBox>
    );
};


const DisplayBox = styled.div<StyledDisplayPropsType>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  width: 150px;
  height: 75px;
  border: 1px solid ${baseTheme.primary};
  border-radius: 10px;


  & span {
    font-size: 28px;
    color: ${props => props.counter === props.maxCount
    ||  props.counter === "Incorrect Value" ?
            baseTheme.danger
            : baseTheme.font};
  }

`