// Hygiene Экологичные, абсолютно безопасные моющие и ухаживающие средства для всей семьи!

import React from 'react';
import cls from './Hygiene.module.scss'
import { useAppSelector } from '../../Redux/Redux-hooks/hooks';
import ProductContainer from '../../Components/ProductContainer/ProductContainer';
import Line from '../../Components/UI/Line/Line';
interface HygieneProps {
    
}

const Hygiene: React.FC<HygieneProps> = () => {
    const products = useAppSelector(state => state.products.products)
    return (
        <div className={cls.hygiene}>
            <Line line2={true}/>
            <span className={cls.hygiene_title}>Экологичные, абсолютно безопасные моющие и ухаживающие средства для всей семьи!</span>
            <div className={cls.hygiene_container}>
                {products.filter(el=>el.category==='Личная гигиена').map(el=><ProductContainer name={el.name} note={el.note} korean={el.korean} price={el.price}/>)}
            </div>
            <Line line2={false}/>
        </div>
    );
};

export default Hygiene;