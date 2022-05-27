import React, {FC, ReactNode} from "react";
import cn from "classnames";
import "./index.css"
export interface ButtonProps {
    label: string | ReactNode,
    variant: 'primary' | 'secondary'
}

const Button: FC<ButtonProps> = ({label = "Button", variant = 'primary'}) => {
    return (
        <button className={cn([
            'btn',
            variant
        ])}>
            {label}
        </button>
    )
}

export default Button
