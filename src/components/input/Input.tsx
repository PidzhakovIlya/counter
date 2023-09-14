import React, {ChangeEvent} from 'react';
import styled from "styled-components";

type InputType = {
    setTitle:(value:number)=>void
    title: number
}
export const Input:React.FC<InputType> = ({setTitle, title}) => {

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
        setTitle(e.currentTarget.valueAsNumber)
    }

    return (
        <InputStyled type="number" value={title} onChange={onChangeHandler}/>
    );
};

const InputStyled= styled.input`
width: 50px
`
