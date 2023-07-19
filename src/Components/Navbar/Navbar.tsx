import React, { useEffect, useState } from 'react';
import cls from './Navbar.module.scss'
import Input from '../UI/Input/Input';
import Atomy from '../../assets/atomy.png'
import { NavLink, useNavigate } from 'react-router-dom';
import Portal from '../Portal/Portal';
import CartWindow from '../../Pages/CartWindow/CartWindow';
import { useAppSelector } from '../../Redux/Redux-hooks/hooks';
import CartProductContainer from '../CartProductContainer/CartProductContainer';
import ProductPage from '../../Pages/ProductPage/ProductPage';
interface NavbarProps {

}

const Navbar: React.FC<NavbarProps> = () => {
  const products = useAppSelector(state => state.products.products);
  const [searched, setSearched] = useState<Array<any>>([]);
  const [searchInput, setSearchInput] = useState('');
  const [activeModal, setActiveModal] = useState('inactive')
  const [activeSearch, setActiveSearch] = useState('inactive')
  const [activeProduct, setActiveProduct] = useState('inactive')
  const [product, setProduct] = useState({
    name: '',
    note: '',
    price: 0,
    id: 0,
    body: ''
  })
  const productOpen = (id: number, name: string, note: string, price: number, body: string) => {
    setProduct({ name: name, note: note, price: price, body: body, id: id })
    setActiveProduct('active_product')
    document.body.style.overflowY = 'hidden';
    setActiveSearch('inactive')
  }
  const productClose = () => {
    setActiveProduct('inactive')
    document.body.style.overflowY = 'scroll';
  }
  const cartOpen = () => {
    setActiveModal('active_cart')
  }
  const cartClose = () => {
    setActiveModal('inactive')
  }
  const searchOpen = () => {
    setActiveSearch('active_search');
  }
  const searchClose = () => {
    setTimeout(() => {
      setActiveSearch('inactive')
    }, 130);
  }
  const [windowHW, setWindowHW] = useState({
    windowH: window.innerHeight,
    windowW: window.innerWidth
  })
  const navigate = useNavigate();
  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
    setSearched(products.filter(el => el.name.toLowerCase().includes(searchInput.toLowerCase())));

  }
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
  console.log(searchInput)
  return (
    <>
      <nav className={cls.navbar}>
        <div className={cls.logo_dropdown}>
          <img onClick={() => navigate('/')} src={Atomy} alt="" />
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
              <li className={cls.cart} onClick={cartOpen}>Корзина</li>
            </ul> :
            <select className={cls.dropdown} name="dropdown" id="dropdown">
              <option value="" onClick={() => navigate('/')}>Главная</option>
              <option value="" onClick={() => navigate('/hemohim')}>ХемоХим</option>
              <option value="" onClick={() => navigate('/vitamins')}>БАДы и Витамины</option>
              <option value="" onClick={() => navigate('/cosmetics')}>Косметика</option>
              <option value="" onClick={() => navigate('/hygiene')}>Личная Гигиена</option>
              <option value="" onClick={() => navigate('/housing')}>Товары для дома</option>
              <option value="" onClick={() => navigate('/foodndrinks')}>Еда и Напитки</option>
              <option value="" onClick={() => navigate('/clothes')}>Одежда и другое</option>
              <option value="" onClick={() => navigate('/contacts')}>Контакты</option>
              <option className={cls.cart} onClick={cartOpen} value="">Корзина</option>
            </select>
          }
        </div>
        <div className={cls.search}>
          <Input onBlur={searchClose}  onFocus={searchOpen} onChange={search} type='text' name='searchInput' value={searchInput} placeholder='Поиск по сайту' />
          <Portal className={activeSearch}>
            {searched.length === 0 ? <span className={cls.pop}>Ничего не найдено</span> : searched.map(el => <CartProductContainer onClick={() => productOpen(el.id, el.name, el.note, el.price, el.body)} name={el.name} price={el.price} id={el.id} amount={el.amount} />)}
          </Portal>
        </div>
        <Portal className={activeModal}>
          <CartWindow onClick={cartClose} />
        </Portal>
        <Portal className={activeProduct}>
                <ProductPage closeWindow={productClose} name={product.name} note={product.note} id={product.id} price={product.price} body={product.body} />
            </Portal>
      </nav>
    </>
  );
};

export default Navbar;