import { FC } from "react";
import "./Fallback.scss";

interface IProps {
  error: Error;
}

export const Fallback: FC<IProps> = ({ error }) => {
  return (
    <>
      <div>Something went wrong!!!</div>
      {error.message && <span>Here's the error: {error.message}</span>}
    </>
  );
};
