import React from 'react';
import cls from './Line.module.scss'
interface LineProps {
    line2:boolean
}

const Line: React.FC<LineProps> = ({line2}) => {
    return (
        <div className={line2===true?cls.line2:cls.line}>
            
        </div>
    );
};

export default Line;