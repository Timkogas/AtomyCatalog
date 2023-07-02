import React from 'react';
import cls from './CartProductContainer.module.scss'
import placeholder from '../../assets/88814092.jpg'
import Button from '../UI/Button/Button';
interface CartProductContainerProps {
    name:string,
    id:number,
    price:number,
    amount:number,
    remove:()=>void
}

const CartProductContainer: React.FC<CartProductContainerProps> = ({name,id,price,amount,remove}) => {
    return (
        <div className={cls.CartProductContainer}>
            <div className={cls.CartProductContainer_imgContainer}>
                <img src={placeholder} alt={name} />
            </div>
            <div className={cls.CartProductContainer_info}>
            <span className={cls.CartProductContainer_info_title}>{name}</span>
            <span className={cls.CartProductContainer_info_article}>Артикул: {id}</span>
            <span className={cls.CartProductContainer_info_sumprice}>Цена: {price*amount} р {`(${price}р x ${amount}шт)`}</span>
            </div>
            <Button onClick={remove} category='buy'>Удалить</Button>
        </div>
    );
};

export default CartProductContainer;