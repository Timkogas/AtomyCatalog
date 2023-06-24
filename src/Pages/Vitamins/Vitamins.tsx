import React from 'react';
import cls from './Vitamins.module.scss'
import { useAppSelector } from '../../Redux/Redux-hooks/hooks';
import ProductContainer from '../../Components/ProductContainer/ProductContainer';
import Line from '../../Components/UI/Line/Line';
interface VitaminsProps {
    
}

const Vitamins: React.FC<VitaminsProps> = () => {
    const products = useAppSelector(state => state.products.products)
    return (
        <div className={cls.vitamins}>
            <Line line2={true}/>
            <span className={cls.vitamins_title}>Все витамины и БАДы АТОМИ имеют международные сертификаты качества HACCP, GMP</span>
            
            <div className={cls.vitamins_container}>
                {products.filter(el=>el.category==='БАДы и Витамины').map(el=><ProductContainer name={el.name} note={el.note} korean={el.korean} price={el.price}/>)}
            </div>
            <Line line2={false}/>
        </div>
    );
};

export default Vitamins;