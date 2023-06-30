import React, { useState } from 'react';
import cls from './ProductPage.module.scss';
import Button from '../../Components/UI/Button/Button';
import imgplaceholder from '../../assets/67526652.jpg';
import cross from '../../assets/cross.svg';
interface ProductPageProps {
    name: string,
    price: number,
    note: string,
    id:number,
    body:string,
    closeWindow?:any
}

const ProductPage: React.FC<ProductPageProps> = ({name,price,note,id,body,closeWindow}) => {
    const [amount, setAmount]=useState(1);
    const raiseAmount = () =>{
        setAmount(amount+1)
    }
    const downgradeAmound = () =>{

        setAmount(amount-1)
        if (amount<=0){
            setAmount(0)
        }
    }
    const closeClick = () =>{
        closeWindow();
        setAmount(0)
    }
    return (
        <div className={cls.ProductPage}>
            <div className={cls.ProductPage_imageContainer}>
                <img className={cls.ProductPage_imageContainer_placeholder} src={imgplaceholder} alt="" />
            </div>
            <div className={cls.ProductPage_info}>
                <h1 className={cls.ProductPage_info_title}>{name}</h1>
                <span className={cls.ProductPage_info_article}>Артикул: {id}</span>
                <span className={cls.ProductPage_info_price}>{price} р</span>
                <div className={cls.ProductPage_info_order}>
                    <div className={cls.ProductPage_info_counter}>
                        <button onClick={raiseAmount} className={cls.ProductPage_info_counter_button_plus}>+</button>
                            <span className={cls.ProductPage_info_counter_amount}>{amount}</span>
                            <button onClick={downgradeAmound} className={cls.ProductPage_info_counter_button_minus}>-</button>
                    </div>
                    <Button category='buy'>Заказать</Button>
                </div>
                <span className={cls.ProductPage_info_note}>{note}</span>
                <p className={cls.ProductPage_info_body}>{body}</p>
            </div>
            <div onClick={closeClick} className={cls.cross}><img src={cross} alt="" /></div>
        </div>
    );
};

export default ProductPage;