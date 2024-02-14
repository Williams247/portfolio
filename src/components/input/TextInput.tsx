import { ChangeEvent, FC } from "react";

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
      <span className={`${isRequired && "after:content-['*'] after:ml-0.5 block text-sm font-[500] leading-8 text-primary-blue-100"}`}>{label}</span>
    </label>
    <input
      type={inputType}
      placeholder={placeHolder}
      value={inputValue}
      onChange={changeEvent}
      name={name}
      className={"border-primary-blue-100 w-full ring-1 border block outline-none px-3 py-3 rounded-lg"}
    />
    {htmlFor && (
      <p className="text-sm text-[red] mt-3">
        {errors[htmlFor] && touched[htmlFor] && errors[htmlFor]}
      </p>
    )}
  </div>
);
