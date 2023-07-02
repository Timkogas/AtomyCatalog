import React, {useState, useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '../../Redux/Redux-hooks/hooks';
import cls from './CartWindow.module.scss'
import CartProductContainer from '../../Components/CartProductContainer/CartProductContainer';
import { cartRemove } from '../../Redux/Redux-slices/cartSlice';
interface CartWindowProps {
    onClick?:()=>void
}

const CartWindow: React.FC<CartWindowProps> = ({onClick}) => {
    const cart = useAppSelector(state=>state.cart.products)
    const dispatch = useAppDispatch();
    
    const [summary, setSummary] = useState(0);
    useEffect(()=>{
        const sum =cart.map(el=>el.amount*el.price);
        console.log(sum)
        if (sum.length===0){
            setSummary(0);
        } else{
            setSummary(sum.reduce((a,b)=>a+b))
        }
    },[cart])
    return (
        <>
        <div className={cls.cart}>
        <div onClick={onClick} className={cls.Close}>Закрыть</div>
        <div className={cls.sum}>Сумма заказа: {summary}</div>
        <div className={cls.cart_title}>Ваша корзина</div>
        </div>
        <div className={cls.CartWindow}>
            <div className={cls.CartWindow_orders}>
                {cart.length === 0 ? <span className={cls.empty}>Ваша корзина пуста.</span>: cart.map(el=>  <CartProductContainer remove={()=>dispatch(cartRemove(el.id))} name={el.name} price={el.price} amount={el.amount} id={el.id}/> ) }
            </div>
        </div>
        </>
    );
};

export default CartWindow;