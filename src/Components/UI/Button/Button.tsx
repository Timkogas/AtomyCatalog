import React from 'react';
import cls from './Button.module.scss'
import { type ButtonHTMLAttributes} from 'react'
type ButtonProps = {
    children:string,
    category:string
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({children,category, ...otherProps}) => {
    return (
        <button  {...otherProps} className={category==='hemohim'?cls.button_hemohim:category==='registry'?cls.button_registry:category==='form'?cls.button_form:category==='buy'?cls.button_buy:cls.button}>
            {children}
        </button>
    );
};

export default Button;