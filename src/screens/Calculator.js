import '../App.css';
import { useEffect, useState } from 'react';
import './styles.css';

export default function Calculator() {

    const [inputValue, setInputValue] = useState("");
    const [result, setResult] = useState();

    function handleOnClick(e) {
        console.log("button Click", e.target.value);
        setInputValue(inputValue + e.target.value)
    }

    function handleResult() {
        let result = evil(inputValue)
        setResult(result)
        setInputValue("")
    }

    function evil(fn) {
        return new Function('return ' + fn)();
    }

    return (
        <div className='calculatorCont'>
            <h1>Máy tính fake</h1>
            <div>
                <input value={inputValue} onChange={() => { }} />
                <button onClick={() => {
                    setInputValue(inputValue.slice(0, inputValue.length - 1))
                }}>
                    delete
                </button>
                <h3>{result}</h3>
            </div>
            <div>
                <button value={"+"} onClick={(e) => handleOnClick(e)}>
                    +
                </button>
                <button value={"-"} onClick={(e) => handleOnClick(e)}>
                    -
                </button>
                <button value={"*"} onClick={(e) => handleOnClick(e)}>
                    *
                </button>
                <button value={"/"} onClick={(e) => handleOnClick(e)}>
                    /
                </button>
                <button onClick={() => handleResult()}>
                    =
                </button>
                <button onClick={() => setInputValue("")}>
                    AC
                </button>
            </div>
            <div>
                <button value={1} onClick={(e) => handleOnClick(e)}>
                    1
                </button>
                <button value={2} onClick={(e) => handleOnClick(e)}>
                    2
                </button>
                <button value={3} onClick={(e) => handleOnClick(e)}>
                    3
                </button>
            </div>
            <div>
                <button value={4} onClick={(e) => handleOnClick(e)}>
                    4
                </button>
                <button value={5} onClick={(e) => handleOnClick(e)}>
                    5
                </button>
                <button value={6} onClick={(e) => handleOnClick(e)}>
                    6
                </button>
            </div>
            <div>
                <button value={7} onClick={(e) => handleOnClick(e)}>
                    7
                </button>
                <button value={8} onClick={(e) => handleOnClick(e)}>
                    8
                </button>
                <button value={9} onClick={(e) => handleOnClick(e)}>
                    9
                </button>
            </div>
        </div>
    );
}