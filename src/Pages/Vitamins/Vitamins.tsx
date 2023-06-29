import React, {useState} from 'react';
import cls from './Vitamins.module.scss'
import { useAppSelector } from '../../Redux/Redux-hooks/hooks';
import ProductContainer from '../../Components/ProductContainer/ProductContainer';
import Line from '../../Components/UI/Line/Line';
import ProductPage from '../ProductPage/ProductPage';
import Portal from '../../Components/Portal/Portal';
interface VitaminsProps {
    
}

const Vitamins: React.FC<VitaminsProps> = () => {
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
        <div className={cls.vitamins}>
            <Line line2={true}/>
            <span className={cls.vitamins_title}>Все витамины и БАДы АТОМИ имеют международные сертификаты качества HACCP, GMP</span>
            <Portal className={activeModal}>
                    <ProductPage closeWindow={productClose} name={product.name} note={product.note} id={product.id} price={product.price} body={product.body} />
                </Portal>
            <div className={cls.vitamins_container}>
                {products.filter(el=>el.category==='БАДы и Витамины').map(el=><ProductContainer onClick={()=>productOpen(el.id,el.name,el.note,el.price,el.body)} key={el.id} id={el.id} name={el.name} note={el.note} korean={el.korean} price={el.price} />)}
            </div>
            <Line line2={false}/>
        </div>
    );
};

export default Vitamins;