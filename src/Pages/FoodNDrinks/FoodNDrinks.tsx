import React from 'react';
import cls from './FoodNDrinks.module.scss'
import { useAppSelector } from '../../Redux/Redux-hooks/hooks';
import ProductContainer from '../../Components/ProductContainer/ProductContainer';
import Line from '../../Components/UI/Line/Line';
interface FoodNDrinks {
    
}

const FoodNDrinks: React.FC<FoodNDrinks> = () => {
    const products = useAppSelector(state => state.products.products)
    return (
        <div className={cls.foodndrinks}>
            <Line line2={true}/>
            <span className={cls.foodndrinks_title}>Кофе, корейская лапша Рамен и другая еда и напитки с международным сертификатом HACCP</span>
            <div className={cls.foodndrinks_container}>
                {products.filter(el=>el.category==='Еда и напитки').map(el=><ProductContainer id={el.id} name={el.name} note={el.note} korean={el.korean} price={el.price}/>)}
            </div>
            <Line line2={false}/>
        </div>
    );
};

export default FoodNDrinks;