import React from 'react';
import cls from './Cosmetics.module.scss'
import { useAppSelector } from '../../Redux/Redux-hooks/hooks';
import ProductContainer from '../../Components/ProductContainer/ProductContainer';
import Line from '../../Components/UI/Line/Line';
interface CosmeticsProps {
    
}

const Cosmetics: React.FC<CosmeticsProps> = () => {
    const products = useAppSelector(state => state.products.products)
    return (
        <div className={cls.cosmetics}>
            <Line line2={true}/>
            <span className={cls.cosmetics_title}>Декоративная и уходовая корейская косметика. Глубокое увлажнение, питание, омоложение.Уход за чувствительной кожей и лечение акне.</span>
            <div className={cls.cosmetics_container}>
                {products.filter(el=>el.category==='Косметика').map(el=><ProductContainer id={el.id} name={el.name} note={el.note} korean={el.korean} price={el.price}/>)}
            </div>
            <Line line2={false}/>
        </div>
    );
};

export default Cosmetics;