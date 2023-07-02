import React, { useEffect, useState } from 'react';
import cls from './Navbar.module.scss'
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import Atomy from '../../assets/atomy.png'
import { NavLink, useNavigate } from 'react-router-dom';
import Portal from '../Portal/Portal';
import CartWindow from '../../Pages/CartWindow/CartWindow';
interface NavbarProps {

}

const Navbar: React.FC<NavbarProps> = () => {

  const [activeModal, setActiveModal]=useState('inactive')
  const cartOpen = () => {
    setActiveModal('active_cart')
}
const cartClose = () =>{
    setActiveModal('inactive')
}
    const [windowHW, setWindowHW] = useState({
        windowH:window.innerHeight,
        windowW:window.innerWidth
    })
    const navigate = useNavigate();

    const detectSize = () => {
        setWindowHW({
          windowW: window.innerWidth,
          windowH: window.innerHeight,
        })
      }
        useEffect(() => {
        window.addEventListener('resize', detectSize)
        return () => {
          window.removeEventListener('resize', detectSize)
        }
      }, [windowHW])
    return (
        <>
            <nav className={cls.navbar}>
               <div className={cls.logo_dropdown}>
               <img src={Atomy} alt="" />
                {windowHW.windowW > 883 ? 
                <ul>
                <NavLink className={cls.NavLink} to='/'><li>Главная </li></NavLink>
                <NavLink className={cls.NavLink} to='/hemohim'><li>ХемоХим</li></NavLink>
                <NavLink className={cls.NavLink} to='/vitamins'><li>БАДы и Витамины</li></NavLink>
                <NavLink className={cls.NavLink} to='/cosmetics'><li>Косметика</li></NavLink>
                <NavLink className={cls.NavLink} to='/hygiene'> <li>Личная Гигиена</li></NavLink>
                <NavLink className={cls.NavLink} to='/housing'><li>Товары для дома</li></NavLink>
                <NavLink className={cls.NavLink} to='/foodndrinks'><li>Еда и напитки</li></NavLink>
                <NavLink className={cls.NavLink} to='/clothes'><li>Одежда и другое</li></NavLink>
                <NavLink className={cls.NavLink} to='/contacts'><li>Контакты</li></NavLink>
                <li onClick={cartOpen}>Корзина</li>
            </ul>:
                 <select className={cls.dropdown} name="dropdown" id="dropdown">
                    <option value="" onClick={()=>navigate('/')}>Главная</option>
                    <option value="" onClick={()=>navigate('/hemohim')}>ХемоХим</option>
                    <option value="" onClick={()=>navigate('/vitamins')}>БАДы и Витамины</option>
                    <option value="" onClick={()=>navigate('/cosmetics')}>Косметика</option>
                    <option value="" onClick={()=>navigate('/hygiene')}>Личная Гигиена</option>
                    <option value="" onClick={()=>navigate('/housing')}>Товары для дома</option>
                    <option value="" onClick={()=>navigate('/foodndrinks')}>Еда и Напитки</option>
                    <option value="" onClick={()=>navigate('/clothes')}>Одежда и другое</option>
                    <option value="" onClick={()=>navigate('/contacts')}>Контакты</option>
                    <option value="">Корзина</option>
                 </select>
            }
               </div>
                <div className={cls.search}>
                    <Input type='text' placeholder='Поиск по сайту' name='search' />
                    <Button category='form'>Поиск</Button>
                </div>
                <Portal className={activeModal}>
                  <CartWindow onClick={cartClose} />
                </Portal>
            </nav>
        </>
    );
};

export default Navbar;