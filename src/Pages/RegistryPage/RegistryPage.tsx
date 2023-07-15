import React, {useState} from 'react';
import cls from './RegistryPage.module.scss'
import Input from '../../Components/UI/Input/Input';
import Button from '../../Components/UI/Button/Button';
import Line from '../../Components/UI/Line/Line';
interface RegistryPageProps {
    
}

const RegistryPage: React.FC<RegistryPageProps> = () => {
    const [formData, setFormData] = useState({
        name: '',
        secondName: '',
        phoneNumber: '',
        mail: '',
        bornDate: '',
        town: '',
        index: ''
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    
    const phoneMaskOptions = '+{7}(000)000-00-00';
   
    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prevState => { return { ...prevState, [e.target.name]: e.target.value } })
    }

    return (
        <div className={cls.RegistryPage}>
            <Line line2={true}/>
            <h1 className={cls.RegistryPage_title}>Зарегистрируйтесь в АТОМИ !</h1>
             <form className={cls.RegistryPage_form} onSubmit={handleSubmit}>
                <Input
                    
                    onChange={inputHandler}
                    required={true}
                    category='form'
                    type='text'
                    placeholder='Имя'
                    name='name'
                    value={formData.name}
                />
                <Input
                    onChange={inputHandler}
                    required={true}
                    category='form'
                    type='text'
                    placeholder='Фамилия'
                    name='secondName'
                    value={formData.secondName}
                />
                <Input
                    mask={phoneMaskOptions}
                    onChange={inputHandler}
                    required={true}
                    category='form'
                    type='text'
                    placeholder='Номер телефона'
                    id='phoneNumber'
                    name='phoneNumber'
                    value={formData.phoneNumber}
                />
                <Input
                    onChange={inputHandler}
                    required={true}
                    category='form'
                    type='email'
                    placeholder='Почта'
                    name='mail'
                    value={formData.mail}
                />
                <Input
                    onChange={inputHandler}
                    required={true}
                    category='form'
                    type='text'
                    placeholder='Дата рождения'
                    name='bornDate'
                    value={formData.bornDate}
                />
                <Input
                    onChange={inputHandler}
                    required={true}
                    category='form'
                    type='text'
                    placeholder='Город проживания'
                    name='town'
                    value={formData.town}
                />
                <Input
                    onChange={inputHandler}
                    required={true}
                    category='form'
                    type='text'
                    placeholder='Индекс'
                    name='index'
                    value={formData.index}
                />
                <Button type='submit' category='registry'>Регистрация</Button>
            </form>
            <Line line2={false}/>
        </div>
    );
};

export default RegistryPage;