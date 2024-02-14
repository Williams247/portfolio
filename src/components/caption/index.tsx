import { FC } from "react";

interface Props {
  label: string;
}

export const Caption: FC<Props> = ({ label }) => (
  <>
    <p className={'text-[30px] text-primary-blue-100 font-bold'}>{label}</p>
    <div className={'h-[8px] w-[50px] bg-primary-blue-100'}></div>
  </>
);
