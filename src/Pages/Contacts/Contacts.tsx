import React from 'react';
import cls from './Contacts.module.scss'
import Line from '../../Components/UI/Line/Line';
import rey from '../../assets/rey.webp'
interface ContactsProps {
    
}

const Contacts: React.FC<ContactsProps> = () => {
    return (
        <div className={cls.contacts}>
            <Line line2={true}/>
            <div className={cls.contacts_image}>
                <img className={cls.contacts_rlyimage} src={rey} alt="" />
            </div>
            <span className={cls.contacts_title}>Добро пожаловать в мир AТОМИ !</span>
            <div className={cls.underline}></div>
            <div className={cls.contacts_info}>
            <span className={cls.contacts_whoami}>Меня зовут Аянами Рей - я официальный партнер Южно-Корейской компании АТОМИ.</span>
            <span className={cls.contacts_callme}>Обращайся ко мне по любым вопросам приобретения продукции АТОМИ из Южной Кореи и России!</span>
            </div>
            <div className={cls.contacts_links}>
                <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' className={cls.telegram}>Telegram</a>
                <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' className={cls.wattsapp}>WattsApp</a>
                <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' className={cls.vk}>Вконтакте</a>
            </div>
            <Line line2={false}/>
        </div>
    );
};

export default Contacts;