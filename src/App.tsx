// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.scss'
import { InputBtn } from './components/input-btn/input-btn';


// const calculatorInputRows = [
//   ['AC', '(', '(', '/'],
//   ['7', '8', '9', 'x'],
//   ['4', '5', '6', '-'],
//   ['1', '2', '3', '+'],
//   ['0', '='],
// ];

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
    { inputBtnName: 'x', cssClassModifier: 'operator' }
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
  return (
    <main>
      <header className='output'></header>

      <section className='inputs'>
        {calculatorInputRows.map((inputRow, idx) => {
          return (
            <div key={idx} className="inputs__row">
              {inputRow.map((input) => {
                return (
                  <InputBtn key={input.inputBtnName} inputBtnName={input.inputBtnName} cssClassModifier={input.cssClassModifier} />
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
