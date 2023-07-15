import React, { useState } from 'react';
import cls from './MainPage.module.scss'
import { useAppSelector } from '../../Redux/Redux-hooks/hooks';
import ProductContainer from '../../Components/ProductContainer/ProductContainer';
import Button from '../../Components/UI/Button/Button';
import koreanImg from '../../assets/korean_symbol.png'
import Line from '../../Components/UI/Line/Line';
import Portal from '../../Components/Portal/Portal';
import ProductPage from '../ProductPage/ProductPage';
import { useNavigate } from 'react-router';
interface MainPageProps {

}

const MainPage: React.FC<MainPageProps> = () => {
    const products = useAppSelector(state => state.products.products);
    const [activeModal, setActiveModal]=useState('inactive')
    const [product, setProduct] = useState({
        name:'',
        note:'',
        price:0,
        id:0,
        body:''
    })
    const navigate = useNavigate();
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
        <div className={cls.main_page}>
            <Line line2={true} />
            <div className={cls.catalog_new}>
                <Portal className={activeModal}>
                    <ProductPage closeWindow={productClose} name={product.name} note={product.note} id={product.id} price={product.price} body={product.body} />
                </Portal>
                {products.filter(el => el.new === true).map(el => <ProductContainer onClick={()=>productOpen(el.id,el.name,el.note,el.price,el.body)} key={el.id} id={el.id} name={el.name} note={el.note} korean={el.korean} price={el.price} />)}
            </div>
            <Line line2={false} />
            <div className={cls.registry}>
                <h1 className={cls.title}>АТОМИ КОРЕЯ</h1>
                <span className={cls.subtitle}>Премиальное качество, доступное каждому!</span>
                <p className={cls.text_info}>Зарегистрируйся в интернет-магазине АТОМИ, чтобы приобретать продукцию
                    по минимальной цене, пользоваться бесплатной доставкой и принимать участие
                    в мероприятиях и акциях от компании!</p>
                <Button onClick={()=>navigate('/registry')} category='registry'>Регистрация в атоми</Button>
            </div>
            <Line line2={true} />
            <div className={cls.info}>
                <div className={cls.how_to_order}>
                    <span className={cls.info_title}>Как заказать товар</span>
                    <p className={cls.info_body}>
                        Добавьте все, что Вас заинтересовало в "Избранное" и нажмите "Хочу заказать".
                        Мы свяжемся с Вами и расскажем, как получить продукцию.
                    </p>
                    <img src={koreanImg} className={cls.korean_img} alt="" />
                </div>
                <div className={cls.delivery_from_korea}>
                    <span className={cls.info_title}>Доставка из южной кореи</span>
                    <p className={cls.info_body}>
                        Продукция со значком "KR" доставляется напрямую из Южной Кореи, примерный срок доставки - 3 недели.
                    </p>
                    <img src={koreanImg} className={cls.korean_img} alt="" />
                </div>
                <div className={cls.delivery_in_russia}>
                    <span className={cls.info_title}>Доставка по россии</span>
                    <p className={cls.info_body}>
                        Остальная продукция доставляется с российского склада АТОМИ примерно за 5 рабочих дней.
                    </p>
                    <img src={koreanImg} className={cls.korean_img} alt="" />
                </div>
            </div>
            <Line line2={false} />
        </div>
    );
};

export default MainPage;