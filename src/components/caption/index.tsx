import { FC } from "react";

interface Props {
  label: string;
}

export const Caption: FC<Props> = ({ label }) => (
  <div className="relative">
    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight font-gotham-rounded-bold">
      {label}
    </h2>
    <div
      className="mt-4 h-1 w-20 max-w-full rounded-full bg-gradient-to-r from-primary-blue-100 via-sky-400 to-primary-blue-200/80"
      aria-hidden
    />
  </div>
);
