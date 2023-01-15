import { FC } from "react";
import cn from "classnames";
import styles from "./Button.module.scss";

interface IButton {
  text: string | number;
  type: "reset" | "submit";
  color?: "red" | "green" | "black";
}

const Button: FC<IButton> = ({ text, type, color }) => {
  return (
    <>
      <button
        type={type}
        className={cn(styles.element, styles[`hasColor-${color}`])}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
