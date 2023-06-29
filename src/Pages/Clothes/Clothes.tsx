import React, {useState} from 'react';
import cls from './Clothes.module.scss'
import { useAppSelector } from '../../Redux/Redux-hooks/hooks';
import ProductContainer from '../../Components/ProductContainer/ProductContainer';
import Line from '../../Components/UI/Line/Line';
import Portal from '../../Components/Portal/Portal';
import ProductPage from '../ProductPage/ProductPage';
interface ClothesProps {
    
}

const Clothes: React.FC<ClothesProps> = () => {
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
    const products = useAppSelector(state => state.products.products)
    return (
        <div className={cls.clothes}>
            <Line line2={true}/>
            <Portal className={activeModal}>
                    <ProductPage closeWindow={productClose} name={product.name} note={product.note} id={product.id} price={product.price} body={product.body} />
                </Portal>
            <span className={cls.clothes_title}>Одежда, белье и аксессуары из Южной Кореи</span>
            <div className={cls.clothes_container}>
                {products.filter(el=>el.category==='Одежда и другое').map(el=><ProductContainer onClick={()=>productOpen(el.id,el.name,el.note,el.price,el.body)} id={el.id} name={el.name} note={el.note} korean={el.korean} price={el.price}/>)}
            </div>
            <Line line2={false}/>
        </div>
    );
};

export default Clothes;