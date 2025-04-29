import { Modal, Tabs } from 'antd';
import React from 'react'
import AuthForm from '../AuthForm/AuthForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';

interface IProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const AuthModal:React.FC<IProps> = ({open, setOpen}) => {

  const tabs = [
    {
      label: `Авторизация`,
      key: '0',
      children: <AuthForm setOpenModal={setOpen} />,
    },
    {
      label: `Регистрация`,
      key: '1',
      children: <RegistrationForm />,
    },
  ];
  
  return (
    <Modal
        title='Войти'
        open={open}
        footer={null}
        onCancel={() => setOpen(false)}
      >
        <Tabs defaultActiveKey='0' type='card' centered style={{ marginBottom: 32 }} items={tabs} />
      </Modal>
  )
}
export default AuthModal;