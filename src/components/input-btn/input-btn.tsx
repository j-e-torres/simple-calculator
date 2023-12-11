import React from 'react';
import { InputBtnInterface } from "../../App";

interface Props {
  inputBtn: InputBtnInterface;
  onClickFunctionHandler: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export function InputBtn(props: Readonly<Props>) {

  return (
    <div onClick={(ev) => props.onClickFunctionHandler(ev)} className={`inputs__input inputs__input--${props.inputBtn.cssClassModifier}`}>
      {props.inputBtn.inputBtnName}
    </div>
  )
}
