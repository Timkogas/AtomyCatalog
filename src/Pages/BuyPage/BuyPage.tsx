import React, { useState, useEffect, useRef } from 'react';
import cls from './BuyPage.module.scss'
import Input from '../../Components/UI/Input/Input';
import { useAppDispatch, useAppSelector } from '../../Redux/Redux-hooks/hooks';
import CartProductContainer from '../../Components/CartProductContainer/CartProductContainer';
import { cartRemove } from '../../Redux/Redux-slices/cartSlice';
import Line from '../../Components/UI/Line/Line';
import Button from '../../Components/UI/Button/Button';
interface BuyPageProps {

}

const BuyPage: React.FC<BuyPageProps> = () => {
    const cart = useAppSelector(state => state.cart.products)
    const dispatch = useAppDispatch();

    const [formData, setFormData] = useState({
        name: '',
        secondName: '',
        phoneNumber: '',
        mail: '',
        bornDate: '',
        town: '',
        index: ''
    })

    const [summary, setSummary] = useState(0);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    
    const phoneMaskOptions = '+{7}(000)000-00-00';
   
    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prevState => { return { ...prevState, [e.target.name]: e.target.value } })
    }
    useEffect(() => {
        const sum = cart.map(el => el.amount * el.price);
        console.log(sum)
        if (sum.length === 0) {
            setSummary(0);
        } else {
            setSummary(sum.reduce((a, b) => a + b))
        }
    }, [cart])

    return (
        <div className={cls.BuyPage}>
            <Line line2={true} />
            <div className={cls.BuyPage_info}>
                <span className={cls.BuyPage_info_title}>Введите данные, чтобы мы могли с вами связаться.</span>
            </div>
            <form className={cls.BuyPage_form} onSubmit={handleSubmit}>
                <Input
                    
                    onChange={inputHandler}
                    required={true}
                    category='form'
                    type='text'
                    placeholder='Имя'
                    name='name'
                    value={formData.name}
                />
                <Input
                    onChange={inputHandler}
                    required={true}
                    category='form'
                    type='text'
                    placeholder='Фамилия'
                    name='secondName'
                    value={formData.secondName}
                />
                <Input
                    mask={phoneMaskOptions}
                    onChange={inputHandler}
                    required={true}
                    category='form'
                    type='text'
                    placeholder='Номер телефона'
                    id='phoneNumber'
                    name='phoneNumber'
                    value={formData.phoneNumber}
                />
                <Input
                    onChange={inputHandler}
                    required={true}
                    category='form'
                    type='email'
                    placeholder='Почта'
                    name='mail'
                    value={formData.mail}
                />
                <Input
                    onChange={inputHandler}
                    required={true}
                    category='form'
                    type='text'
                    placeholder='Дата рождения'
                    name='bornDate'
                    value={formData.bornDate}
                />
                <Input
                    onChange={inputHandler}
                    required={true}
                    category='form'
                    type='text'
                    placeholder='Город проживания'
                    name='town'
                    value={formData.town}
                />
                <Input
                    onChange={inputHandler}
                    required={true}
                    category='form'
                    type='text'
                    placeholder='Индекс'
                    name='index'
                    value={formData.index}
                />
                <Button type='submit' category='buy'>Оформить заказ</Button>
            </form>
            <div className={cls.cart_info}>
                <div className={cls.cart_info_total}>
                    <span className={cls.cart_info_title}>Ваши заказы :</span>
                    <span className={cls.cart_info_title}>{summary}р</span>
                </div>
                {cart.map(el => <CartProductContainer price={el.price} name={el.name} amount={el.amount} id={el.id} remove={() => dispatch(cartRemove(el.id))} />)}
            </div>
            <Line line2={false} />
        </div>
    );
};

export default BuyPage;