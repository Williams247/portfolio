import { ChangeEvent, FC } from "react";
import styles from "./styles.module.scss";

interface Props {
  inputType: string;
  placeHolder: string;
  inputValue: string;
  htmlFor: string;
  isRequired: boolean;
  errors: any;
  touched: any;
  name: string;
  label: string;
  changeEvent: (e: string | ChangeEvent<any>) => void;
}

export const TextInput: FC<Props> = ({
  inputType,
  placeHolder,
  inputValue,
  htmlFor,
  errors,
  touched,
  name,
  label,
  isRequired,
  changeEvent,
}) => (
  <div className="w-full">
    <label htmlFor={htmlFor} className={`block`}>
      <span className={`${isRequired && styles.inputLabel}`}>{label}</span>
    </label>
    <input
      type={inputType}
      placeholder={placeHolder}
      value={inputValue}
      onChange={changeEvent}
      name={name}
      className={styles.textInput}
    />
    {htmlFor && (
      <p className="text-sm text-[red] mt-3">
        {errors[htmlFor] && touched[htmlFor] && errors[htmlFor]}
      </p>
    )}
  </div>
);
