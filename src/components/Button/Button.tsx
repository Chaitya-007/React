import { ReactNode } from "react";
import styles from "./Button.module.css";

// interface ButtonProps {
//     children: ReactNode;
//     color?: 'primary' | 'secondary' | 'success';
//     onClick: () => void;
// }

interface ButtonProps {
    children: ReactNode;
    color?: 'primary' | 'secondary' | 'success' | 'danger';
    onClick: () => void;
}

const Button = ({children, onClick, color = "primary"}: ButtonProps) => {
  return (
    // <div>{children}</div>
    // solution below
    // <button className={"btn btn-" + color} onClick={onClick}>{children}</button>
    <button className={[styles.btn, styles['btn-' + color]].join(' ')} onClick={onClick}>{children}</button>
  )
}

export default Button