import { Button } from 'antd';
import React, { useState } from 'react';
import AuthModal from '../AuthModal/AuthModal';

const SignIn: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} type='primary'>
        Войти
      </Button>
      <AuthModal open={open} setOpen={setOpen}/>
    </>
  );
};
export default SignIn;
