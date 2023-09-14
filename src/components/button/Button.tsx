import React from 'react';
import styled from "styled-components";
import {baseTheme} from "../theme";

type ButtonPropsType = {
    name: string
    callBack: () => void
    disabled: boolean
}
type StyledButtonProps = {
    width?: string
    height?: string
    color?: string
    disabled?: boolean
}

export const Button: React.FC<ButtonPropsType> = ({name, callBack, disabled}) => {
    const callBackHandler = () => {
        callBack()
    }
    return (
        <ButtonStyled disabled={disabled} onClick={callBackHandler}>{name}</ButtonStyled>
    );
};



const ButtonStyled = styled.button<StyledButtonProps>`
  width: 70px;
  height: 30px;
  border: 1px solid ${baseTheme.primary};
  border-radius: 10px;
  background-color: transparent;
  color: ${props=>!props.disabled? baseTheme.font : baseTheme.danger};
`
