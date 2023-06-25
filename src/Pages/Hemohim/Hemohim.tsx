import React from 'react';
import cls from './Hemohim.module.scss'
import Line from '../../Components/UI/Line/Line';
interface HemohimProps {
    
}

const Hemohim: React.FC<HemohimProps> = () => {
    return (
        <div className={cls.hemohim}>
            <div className={cls.hemohim_banner}>
                <h1 className={cls.banner_title}>ХЕМОХИМ</h1>
                <span className={cls.banner_subtitle}>РАЗБУДИ ИМУННЫЕ КЛЕТКИ СВОЕГО ОРГАНИЗМА</span>
            </div>
            <div className={cls.hemohim_info}>

                <div className={cls.info_textNSertificate}>
                    <p className={cls.info_text}>

                    </p>
                    <div className={cls.info_sertificate}>
                        <img src="#" alt=""  className={cls.info_img}/>
                        <span className={cls.info_subtitle}>В мае 2020 года ХемоХим получил наивысший сертификат экологичности состава.</span>
                    </div>
                </div>

            </div>
            <div className={cls.hemohim_atomyhemohim}>

            </div>
            <div className={cls.hemohim_howitworks}>

            </div>
            <div className={cls.hemohim_goods}>

            </div>
            <div className={cls.hemohim_compound}>

            </div>
            <div className={cls.hemohim_patents}>

            </div>
            <div className={cls.hemohim_howtouse}>

            </div>
            <div className={cls.hemohim_contraindications}>

            </div>
            <div className={cls.hemohim_history}>

            </div>
            <Line line2={false}/>
        </div>
    );
};

export default Hemohim;