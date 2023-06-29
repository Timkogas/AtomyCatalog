import React from "react";
import ReactDOM from 'react-dom'
import cls from './Portal.module.scss'

const root = document.getElementById('modal-root')

interface PortalProps{
    className?:string,
    children?: any,
    
}


const Portal: React.FC<PortalProps> = ({className,children}) => {
    
    return root ? ReactDOM.createPortal(
        <div className={className==='active_product'?cls.active_product:className==='active_cart'?cls.active_cart:cls.inactive}>
            {children}
            
        </div>,
        root
    ) : null;
};

export default Portal;