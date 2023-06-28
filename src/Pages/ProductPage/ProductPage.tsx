import React from 'react';
import cls from './ProductPage.module.scss'
import Button from '../../Components/UI/Button/Button';

interface ProductPageProps {
    name: string,
    price: number,
    note: string,
    id:number,
    body:string
}

const ProductPage: React.FC<ProductPageProps> = ({name,price,note,id,body}) => {
    return (
        <div className={cls.ProductPage}>
            <div className={cls.ProductPage_imageContainer}>
                <img src="" alt="" />
            </div>
            <div className={cls.ProductPage_info}>
                <h1 className={cls.ProductPage_info_title}>{name}</h1>
                <span className={cls.ProductPage_info_article}>{id}</span>
                <span className={cls.ProductPage_info_price}>{price}</span>
                <div className={cls.ProductPage_info_order}>
                    <div className={cls.ProductPage_info_counter}></div>
                    <Button category='form'>Заказать</Button>
                </div>
                <span className={cls.ProductPage_info_note}>{note}</span>
                <p className={cls.ProductPage_info_body}>{body}</p>
            </div>
        </div>
    );
};

export default ProductPage;