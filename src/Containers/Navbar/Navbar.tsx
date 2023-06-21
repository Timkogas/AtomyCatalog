import React from 'react';
import cls from './Navbar.module.scss'
import Input from '../../Components/Input/Input';
import Button from '../../Components/UI/Button/Button';
import Atomy from '../../assets/atomy.png'
interface NavbarProps {
    
}

const Navbar: React.FC<NavbarProps> = () => {
    return (
        <>
        
        <nav className={cls.navbar}>
            <img src={Atomy} alt="" />
            <ul>
                <li>Главная </li>
                <li>ХемоХим</li>
                <li>БАДы и Витамины</li>
                <li>Косметика</li>
                <li>Личная Гигиена</li>
                <li>Товары для дома</li>
                <li>Еда и напитки</li>
                <li>Одежда и другое</li>
                <li>Контакты</li>
                <li>Корзина</li>
            </ul>
            <div className={cls.search}>
            <Input type='text' placeholder='Поиск по сайту' name='search'/>
            <Button category='form'>Поиск</Button>
            </div>
        </nav>
        </>
    );
};

export default Navbar;