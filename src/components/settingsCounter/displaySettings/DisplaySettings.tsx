import React from 'react';
import styled from "styled-components";
import {Input} from "../../input/Input";
import {baseTheme} from "../../theme";
import {SettingsCounterPropsType} from "../SettingsCounter";


// type DisplayPropsType = {
//     min: number
//     max: number
//     setMin: (value:number) => void
//     setMax: (value:number) => void
// }


export const DisplaySettings: React.FC<SettingsCounterPropsType> = ({min, max, setMin, setMax}) => {
    return (
        <DisplayBox>
            <div>min
                <Input title={min} setTitle={setMin} min={min} max={max} />
            </div>
            <div>
                max
                <Input title={max} setTitle={setMax} min={min} max={max} />
            </div>
        </DisplayBox>
    );
};


const DisplayBox = styled.div`
  margin: 10px auto;
  width: 150px;
  height: 75px;
  border: 1px solid ${baseTheme.primary};
  border-radius: 10px;
  color: wheat;
  padding: 10px;
`