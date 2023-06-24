import React from 'react';
import cls from './Clothes.module.scss'
import { useAppSelector } from '../../Redux/Redux-hooks/hooks';
import ProductContainer from '../../Components/ProductContainer/ProductContainer';
import Line from '../../Components/UI/Line/Line';
interface ClothesProps {
    
}

const Clothes: React.FC<ClothesProps> = () => {
    const products = useAppSelector(state => state.products.products)
    return (
        <div className={cls.clothes}>
            <Line line2={true}/>
            <span className={cls.clothes_title}>Одежда, белье и аксессуары из Южной Кореи</span>
            <div className={cls.clothes_container}>
                {products.filter(el=>el.category==='Одежда и другое').map(el=><ProductContainer name={el.name} note={el.note} korean={el.korean} price={el.price}/>)}
            </div>
            <Line line2={false}/>
        </div>
    );
};

export default Clothes;