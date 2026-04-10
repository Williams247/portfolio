import { ReactNode, FC } from "react";

interface Props {
  children: ReactNode;
}

export const Container: FC<Props> = ({ children }) => (
  <div className="px-6 sm:px-8 md:px-10 max-w-7xl mx-auto w-full lg:px-12">
    {children}
  </div>
);
