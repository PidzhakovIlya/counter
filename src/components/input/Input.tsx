import React, {ChangeEvent} from 'react';
import styled from "styled-components";

type InputType = {
    setTitle:(value:number)=>void
    title: number
    max:number
    min:number

}
type InputStyledPropsType = {
    max?:number
    min?:number
}

export const Input:React.FC<InputType> = ({setTitle, title, min, max}) => {

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
        setTitle(e.currentTarget.valueAsNumber)
    }

    return (
        <>
            <InputStyled type="number" value={title} onChange={onChangeHandler}/>
            {/*{min >= max? "Incorrect Value": "" }*/}
        </>


    );
};

const InputStyled= styled.input<InputStyledPropsType>`
  width: 50px;
  margin-left: 5px;
  background-color: ${props=> props.min  ? "#333":  "#fff"}
  
`
