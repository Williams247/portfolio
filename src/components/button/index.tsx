import { FC } from "react";

interface Props {
  label: string;
  variant: string;
  className?: string;
}

export const Button: FC<Props> = ({ label, variant, className }) => {
  return (
    <>
      {variant === "primary" ? (
        <button
          className={`bg-primary-blue-100 text-white py-4 px-6 text-center active:scale-90 text-sm rounded-lg ${
            className ?? ""
          }`}
        >
          {label}
        </button>
      ) : variant === "outline" ? (
        <button
          className={`bg-transparent text-primary-blue-100 py-4 px-6 text-center border-primary-blue-100 active:scale-90 text-sm rounded-lg ${
            className ?? ""
          }`}
        >
          {label}
        </button>
      ) : variant === "pure" ? (
        <button
          className={`text-white py-4 px-6 text-center active:scale-90 border border-white text-sm rounded-lg ${
            className ?? ""
          }`}
        >
          {label}
        </button>
      ) : null}
    </>
  );
};
