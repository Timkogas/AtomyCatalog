import React from 'react';
import cls from './Hemohim.module.scss'
import Line from '../../Components/UI/Line/Line';
import hemohim from '../../assets/hemohim_sertificate.jpg'
import Button from '../../Components/UI/Button/Button';
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
                <div className={cls.hemohim_info_body}>
                    <span className={cls.hemohim_info_text_selection}>
                        АТОМИ ХемоХим - препарат, не имеющий аналогов в мире, для восстановления иммунитета, защиты от онкозаболеваний и оздоровления всего организма человека.
                    </span>
                    <p className={cls.hemohim_info_text}>
                        ХемоХим разработан в 1997 году учёными KAERI - НИИ Атомной энергетики Южной Кореи по заказу правительства в рамках национального проекта по укреплению здоровья населения страны.
                    </p>
                    <p className={cls.hemohim_info_text}>
                        ХемоХим зарегистрирован Корейским управлением по контролю качества продуктов и лекарств (MFDS) как лучший индивидуально одобренный функциональный комплекс.
                    </p>
                    <p className={cls.hemohim_info_text}>
                        Имеет сертификаты качества GMP и Минздрава Южной Кореи.
                        Запатентован в 7-ми странах мира
                    </p>
                    <p className={cls.hemohim_info_text}>
                        Внесен в российские справочники лекарственных средств для медицинских специалистов ГОЭТАР и MEDUM
                    </p>
                    <Button category='hemohim'>ЗАКАЗАТЬ ХЕМОХИМ</Button>
                </div>
                <div className={cls.hemohim_info_sertificate}>
                    <img src={hemohim} alt="" className={cls.hemohim_info_img} />
                    <span className={cls.hemohim_info_subtitle}>В мае 2020 года ХемоХим получил наивысший сертификат экологичности состава.</span>
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
            <Line line2={false} />
        </div>
    );
};

export default Hemohim;