import React from 'react';
import cls from './Button.module.scss'
interface ButtonProps {
    children:string,
    category:string,
}

const Button: React.FC<ButtonProps> = ({children,category}) => {
    return (
        <button className={category==='buy'?cls.button_buy:category==='registry'?cls.button_registry:category==='form'?cls.button_form:cls.button}>
            {children}
        </button>
    );
};

export default Button;