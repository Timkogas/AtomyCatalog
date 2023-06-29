// Hygiene Экологичные, абсолютно безопасные моющие и ухаживающие средства для всей семьи!

import React, {useState} from 'react';
import cls from './Hygiene.module.scss'
import { useAppSelector } from '../../Redux/Redux-hooks/hooks';
import ProductContainer from '../../Components/ProductContainer/ProductContainer';
import Line from '../../Components/UI/Line/Line';
import ProductPage from '../ProductPage/ProductPage';
import Portal from '../../Components/Portal/Portal';
interface HygieneProps {
    
}

const Hygiene: React.FC<HygieneProps> = () => {
    const products = useAppSelector(state => state.products.products)
    const [activeModal, setActiveModal]=useState('inactive')
    const [product, setProduct] = useState({
        name:'',
        note:'',
        price:0,
        id:0,
        body:''
    })
    const productOpen = (id:number,name:string,note:string,price:number,body:string) => {
        setProduct({name:name, note:note,price:price, body:body,id:id})
        setActiveModal('active_product')
        document.body.style.overflowY ='hidden';
    }
    const productClose = () =>{
        setActiveModal('inactive')
        document.body.style.overflowY ='scroll';
    }
    return (
        <div className={cls.hygiene}>
            <Line line2={true}/>
            <Portal className={activeModal}>
                    <ProductPage closeWindow={productClose} name={product.name} note={product.note} id={product.id} price={product.price} body={product.body} />
                </Portal>
            <span className={cls.hygiene_title}>Экологичные, абсолютно безопасные моющие и ухаживающие средства для всей семьи!</span>
            <div className={cls.hygiene_container}>
                {products.filter(el=>el.category==='Личная гигиена').map(el=><ProductContainer onClick={()=>productOpen(el.id,el.name,el.note,el.price,el.body)} id={el.id} name={el.name} note={el.note} korean={el.korean} price={el.price}/>)}
            </div>
            <Line line2={false}/>
        </div>
    );
};

export default Hygiene;