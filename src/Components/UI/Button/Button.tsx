import React from 'react';
import cls from './Button.module.scss'
interface ButtonProps {
    children:string,
    category:string,
    onClick?:()=>void,
    disabled?:boolean
}

const Button: React.FC<ButtonProps> = ({children,category,onClick,disabled}) => {
    return (
        <button disabled={disabled} onClick={onClick} className={category==='hemohim'?cls.button_hemohim:category==='registry'?cls.button_registry:category==='form'?cls.button_form:category==='buy'?cls.button_buy:cls.button}>
            {children}
        </button>
    );
};

export default Button;