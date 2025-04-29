import { db } from '@/firebase';
import { Button, Form, FormProps, Input, notification } from 'antd';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react';

type FieldType = {
  username?: string;
  password?: string;
};

interface IProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthForm: React.FC<IProps> = ({ setOpenModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [api, contextHolder] = notification.useNotification();
  const [form] = Form.useForm();
  const auth = getAuth()
  const isDisable = Boolean(email.length && password.length);

  const onFinish: FormProps<FieldType>['onFinish'] = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async () => {
        const user = auth.currentUser;
        if (user) {
          await setDoc(doc(db, 'users', user.uid), {
            email: user.email,
          });
          console.log(123);
          setOpenModal(false)
        }
      })
      .catch(() => {
        form.resetFields(['password']);
        openNotificationWithIcon();
      });
  };

  const openNotificationWithIcon = () => {
    api.error({
      message: 'Ошибка',
      placement: 'top',
      description: 'Неверный логин или пароль',
    });
  };

  return (
    <>
      {contextHolder}
      <Form form={form} name='basic' layout='vertical' onFinish={onFinish} autoComplete='off'>
        <Form.Item<FieldType>
          label='Введите Email'
          name='username'
          rules={[{ required: true, message: 'Введите email' }]}
        >
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>

        <Form.Item<FieldType>
          label='Пароль'
          name='password'
          rules={[{ required: true, message: 'Введите пароль' }]}
        >
          <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Item>

        <Form.Item label={null}>
          <Button type='primary' htmlType='submit' disabled={!isDisable}>
            Вход
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default AuthForm;
