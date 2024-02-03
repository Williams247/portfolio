import { ChangeEvent } from "react";
import styles from "./styles.module.scss";

interface TextAreaProps {
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

export const TextArea = ({
  placeHolder,
  inputValue,
  htmlFor,
  errors,
  touched,
  name,
  label,
  isRequired,
  changeEvent,
}: TextAreaProps): JSX.Element => {
  return (
    <div className="w-full">
      <label htmlFor={htmlFor} className={`block`}>
        <span className={`${isRequired && styles.inputLabel}`}>{label}</span>
      </label>
      <textarea
        placeholder={placeHolder}
        value={inputValue}
        onChange={changeEvent}
        name={name}
        className={styles.textArea}
      />
      {htmlFor && (
        <p className="text-sm text-[red] mt-3">
          {errors[htmlFor] && touched[htmlFor] && errors[htmlFor]}
        </p>
      )}
    </div>
  );
};
