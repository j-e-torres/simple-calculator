import { useState } from 'react';
import { evaluate } from 'mathjs';
import './App.scss'
import { InputBtn } from './components/input-btn/input-btn';

export interface InputBtnInterface {
  inputBtnName: string;
  cssClassModifier: string;
}

const calculatorInputRows: InputBtnInterface[][] = [
  [
    { inputBtnName: 'AC', cssClassModifier: 'ac' },
    { inputBtnName: '(', cssClassModifier: 'non-number' },
    { inputBtnName: ')', cssClassModifier: 'non-number' },
    { inputBtnName: '/', cssClassModifier: 'operator' }
  ],
  [
    { inputBtnName: '7', cssClassModifier: 'number' },
    { inputBtnName: '8', cssClassModifier: 'number' },
    { inputBtnName: '9', cssClassModifier: 'number' },
    { inputBtnName: '*', cssClassModifier: 'operator' }
  ],
  [
    { inputBtnName: '4', cssClassModifier: 'number' },
    { inputBtnName: '5', cssClassModifier: 'number' },
    { inputBtnName: '6', cssClassModifier: 'number' },
    { inputBtnName: '-', cssClassModifier: 'operator' }
  ],
  [
    { inputBtnName: '1', cssClassModifier: 'number' },
    { inputBtnName: '2', cssClassModifier: 'number' },
    { inputBtnName: '3', cssClassModifier: 'number' },
    { inputBtnName: '+', cssClassModifier: 'operator' }
  ],
  [
    { inputBtnName: '0', cssClassModifier: 'number' },
    { inputBtnName: '=', cssClassModifier: 'operator' }
  ]
];

function App() {
  const [input, setInput] = useState('');


  const onClickFunctionHandler = (ev: React.MouseEvent<HTMLDivElement>) => {

    // NOTE: these divs will always have textContent
    const inputBtnVal = ev.currentTarget.textContent as string;
    switch (inputBtnVal) {
      case 'AC':
        setInput('');
        break;

      case '=':
        setInput(evaluate(input));
        break;

      default:
        handleInputChange(inputBtnVal);
        break;
    }
  }

  const handleInputChange = (value: string) => {
    setInput((prevInput) => prevInput + value);
    console.log(input);
  };

  return (
    <main>
      <div className='output'>
        {input}
      </div>

      <section className='inputs'>
        {calculatorInputRows.map((inputRow, idx) => {
          return (
            <div key={idx} className="inputs__row">
              {inputRow.map((input) => {
                return (
                  <InputBtn key={input.inputBtnName} onClickFunctionHandler={onClickFunctionHandler} inputBtn={input} />
                )
              })}
            </div>
          )
        })}
      </section>
    </main>
  )
}

export default App
