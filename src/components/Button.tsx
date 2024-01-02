import { ReactNode } from "react";

// interface ButtonProps {
//     children: ReactNode;
//     color?: 'primary' | 'secondary' | 'success';
//     onClick: () => void;
// }

interface ButtonProps {
    children: ReactNode;
    color?: 'primary' | 'secondary' | 'success';
    onClick: () => void;
}

const Button = ({children, onClick, color = "primary"}: ButtonProps) => {
  return (
    // <div>{children}</div>
    // solution below
    <button className={"btn btn-" + color} onClick={onClick}>{children}</button>
  )
}

export default Button