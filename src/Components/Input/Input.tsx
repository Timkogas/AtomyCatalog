import React from 'react';
import cls from './Input.module.scss'
interface InputProps {
    type:string,
    placeholder:string,
    name:string,
}

const Input: React.FC<InputProps> = ({type,placeholder,name}) => {
    return (
        <input className={cls.Input} type={type} placeholder={placeholder} name={name} />
    );
};

export default Input;