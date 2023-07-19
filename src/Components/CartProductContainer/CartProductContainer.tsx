import React from 'react';
import cls from './CartProductContainer.module.scss'
import placeholder from '../../assets/88814092.jpg'
import Button from '../UI/Button/Button';
interface CartProductContainerProps {
    name:string,
    id:number,
    price:number,
    amount:number,
    remove?:()=>void,
    inCart?:boolean,
    onClick?:()=>void
}

const CartProductContainer: React.FC<CartProductContainerProps> = ({name,id,price,amount,remove, inCart, onClick}) => {
    return (
        <div onClick={onClick} className={inCart===true?cls.CartProductContainer:cls.CartProductContainer_search}>
            <div className={cls.CartProductContainer_imgContainer}>
                <img src={placeholder} alt={name} />
            </div>
            <div className={cls.CartProductContainer_info}>
            <span className={inCart === true ? cls.CartProductContainer_info_title : cls.CartProductContainer_info_title_search}>{name}</span>
            <span className={cls.CartProductContainer_info_article}>Артикул: {id}</span>
            <span className={cls.CartProductContainer_info_sumprice}>{inCart === true? `Цена: ${price*amount} р ${`(${price}р x ${amount}шт)`}`: `Цена: ${price}`}</span>
            </div>
            {inCart === true? <Button onClick={remove} category='buy'>Удалить</Button>:null}
        </div>
    );
};

export default CartProductContainer;