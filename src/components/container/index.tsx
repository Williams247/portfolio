import { ReactNode, FC } from "react";

interface Props {
  children: ReactNode;
}

export const Container: FC<Props> = ({ children }) => (
  <div className={"px-8 sm:px-8 md:px-10 lg:container xl:container"}>
    {children}
  </div>
);
