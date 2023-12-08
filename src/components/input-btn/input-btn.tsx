import { InputBtnInterface } from "../../App";

export function InputBtn(props: Readonly<InputBtnInterface>) {
  return (
    <div className={`inputs__input inputs__input--${props.cssClassModifier}`}>
      {props.inputBtnName}
    </div>
  )
}
