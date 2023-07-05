import React from 'react';
import cls from './Input.module.scss'
import { type InputHTMLAttributes} from 'react';
import { IMaskInput , IMaskMixin} from 'react-imask';

type InputProps = {
    category?:string,
    mask?:string
}& InputHTMLAttributes<HTMLInputElement>



const Input: React.FC<InputProps> = ({category,mask, ...otherProps}) => {
    return (
        <IMaskInput mask={mask} {...otherProps} className={category==='form'?cls.Input_form:cls.Input}  />
    );
};

export default Input;