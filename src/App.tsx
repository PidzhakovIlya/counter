import React, {useState} from 'react';
import './App.css';
import { Counter } from './components/counter/Counter';
import {SettingsCounter} from "./components/settingsCounter/SettingsCounter";
import {FlexWrapper} from "./components/FlexWrapper";


export let minCount = 0;
export let maxCount = 5;
function App() {
    const [ min, setMin] = useState(minCount);
    const [ max, setMax] = useState(maxCount);
    const [count, setCount] = useState(minCount)

  return (
    <FlexWrapper direction={"row"} justify={"center"} align={"center"} gap={"20px"}>
        <Counter min={min} max={max} count={count} setCount={setCount}/>
        <SettingsCounter setMin={setMin} setMax={setMax} min={min} max={max} setCount={setCount} />
    </FlexWrapper>
  );
}

export default App;
