import React from 'react';
import cls from './Footer.module.scss'
interface FooterProps {
    
}

const Footer: React.FC<FooterProps> = () => {
    return (
        <div className={cls.footer}>
            <span className={cls.questions}>По любым вопросам вы можете связаться с нами:</span>
            <div className={cls.connect}><span className={cls.wattsapp}>WattsApp </span>  <span className={cls.telegram}>Telegram</span></div>
            <span className={cls.questions}>88005553535</span>
        </div>
    );
};

export default Footer;