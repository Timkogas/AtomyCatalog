import React from 'react';
import cls from './Housing.module.scss'
import { useAppSelector } from '../../Redux/Redux-hooks/hooks';
import ProductContainer from '../../Components/ProductContainer/ProductContainer';
import Line from '../../Components/UI/Line/Line';
interface HousingProps {
    
}

const Housing: React.FC<HousingProps> = () => {
    const products = useAppSelector(state => state.products.products)
    return (
        <div className={cls.housing}>
            <Line line2={true}/>
            <span className={cls.housing_title}>Экологичные и абсолютно безопасные товары для дома из Южной Кореи.</span>
            <div className={cls.housing_container}>
                {products.filter(el=>el.category==='Товары для дома').map(el=><ProductContainer name={el.name} note={el.note} korean={el.korean} price={el.price}/>)}
            </div>
            <Line line2={false}/>
        </div>
    );
};

export default Housing;