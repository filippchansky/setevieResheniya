import { Button, Form, FormProps, Input, notification, Popover } from 'antd';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase/index';

type FieldType = {
  username?: string;
  password?: string;
  confirmPassword?: string;
};

const RegistrationForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPopover, setShowPopover] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const isDisable = confirmPassword !== password || Boolean(!password.length);
  const [form] = Form.useForm();
  const popoverContent =
    confirmPassword !== password ? <p>Пароли не совпадают</p> : <p>Введите пароль</p>;

  const onFinish: FormProps<FieldType>['onFinish'] = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => console.log(res))
      .catch(() => {
        form.resetFields();
        openNotificationWithIcon();
      });
  };

  const openNotificationWithIcon = () => {
    api.error({
      message: 'Ошибка',
      placement: 'top',
      description: 'Email уже используется ',
    });
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  console.log(showPopover);

  return (
    <>
      {contextHolder}
      <Form
      form={form}
        name='basic'
        layout='vertical'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
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

        <Form.Item<FieldType>
          label='Подтвердите пароль'
          name='confirmPassword'
          rules={[{ required: true, message: 'Подтвердите пароль' }]}
        >
          <Input.Password
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Item>

        <Form.Item label={null}>
          <Popover
            placement='right'
            content={popoverContent}
            trigger='hover'
            open={isDisable && showPopover}
          >
            <span
              onMouseEnter={() => setShowPopover(true)}
              onMouseLeave={() => setShowPopover(false)}
            >
              <Button type='primary' htmlType='submit' disabled={isDisable}>
                Регистрация
              </Button>
            </span>
          </Popover>
        </Form.Item>
      </Form>
    </>
  );
};
export default RegistrationForm;
