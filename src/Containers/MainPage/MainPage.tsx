import React from 'react';
import cls from './MainPage.module.scss'
interface MainPageProps {

}

const MainPage: React.FC<MainPageProps> = () => {

    return (
        <div className={cls.main_page}>
            <div className={cls.catalog_new}>

            </div>
            <div className={cls.registry}>

            </div>
            <div className={cls.info}>

            </div>
        </div>
    );
};

export default MainPage;