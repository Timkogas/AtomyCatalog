import React from 'react';
import cls from './ProductContainer.module.scss'
import placehold from '../../assets/26266624.png'
interface ProductContainerProps {
    name: string,
    korean: boolean,
    price: number,
    note: string,
    id:number,
    onClick?:()=>void
}

const ProductContainer: React.FC<ProductContainerProps> = ({name,korean,price,note,onClick}) => {
    return (
        <div className={cls.product_container} onClick={onClick}>
            <div className={cls.image}>
                <span className={korean===true? cls.korean_active :cls.korean}>KR</span>
                <img className={cls.rly_image} src={placehold} alt="" />
            </div>
            <div className={cls.info}>
            <span className={cls.price}>{price} р</span>
            <span className={cls.name}>{name}</span>
            <span className={cls.note}>{note}</span>
            </div>
        </div>
    );
};

export default ProductContainer;