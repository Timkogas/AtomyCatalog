import React from 'react';
import cls from './MainPage.module.scss'
import { useAppSelector } from '../../Redux/Redux-hooks/hooks';
import ProductContainer from '../../Containers/ProductContainer/ProductContainer';
interface MainPageProps {

}

const MainPage: React.FC<MainPageProps> = () => {
    const products = useAppSelector(state=>state.products.products)
    return (
        <div className={cls.main_page}>
            <div className={cls.catalog_new}>
                {products.filter(el=>el.new===true).map(el=><ProductContainer name={el.name} note={el.note} korean={el.korean} price={el.price}/>)}
            </div>
            <div className={cls.registry}>

            </div>
            <div className={cls.info}>

            </div>
        </div>
    );
};

export default MainPage;