import React from 'react';
import styled from "styled-components";
import {baseTheme} from "../theme";


type DisplayPropsType = {
    counter?: number
    maxCount?: number
}
type StyledDisplayPropsType = {
    counter?: number
    maxCount?: number
}

export const Display:React.FC<DisplayPropsType> = ({counter, maxCount}) => {
    return (
        <DisplayBox counter={counter} maxCount={maxCount}>
            <span>{counter}</span>
        </DisplayBox>
    );
};


const DisplayBox = styled.div<StyledDisplayPropsType>`
  margin: 10px auto;
  width: 150px;
  height: 75px;
  border: 1px solid ${baseTheme.primary};
  border-radius: 10px;


  & span {
    display: inline-block;
    text-align: center;
    font-size: 30px;
    color: ${props => props.counter === props.maxCount ? baseTheme.danger : baseTheme.font};
 
  }

`