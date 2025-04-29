import React from 'react';
import style from './style.module.css';
import SignIn from '../SignIn/SignIn';
import { auth } from '@/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Popover, Spin } from 'antd';
import { signOut } from 'firebase/auth';

const Header: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user, loading, error);

  const logOut = async () => {
    await signOut(auth);
  };
  return (
    <header className={style.header}>
      <div className={style.container}>
        <button className={style.logo}>
          <p className={style.logoText}>Лого</p>
        </button>

        {user && (
          <div className={style.basketSection}>
            <div className={style.emailSection}>
              <Popover
                placement='bottom'
                title={user.email}
                content={
                  <>
                    <Button color='danger' variant='outlined' onClick={logOut}>
                      Выйти
                    </Button>
                  </>
                }
              >
                <Avatar size={50} icon={<UserOutlined />} style={{ backgroundColor: '#ea5f0a' }} />
              </Popover>
            </div>
            <button className={style.basket}>
              <img src='icons/basket.svg' width={34} height={34} alt='корзина' />
            </button>
          </div>
        )}
        {loading && (
          <div className={style.emailSection}>
            <Spin />
          </div>
        )}
        {!user && !loading && (
          <div className={style.signInSection}>
            <SignIn />
          </div>
        )}
        {/* {user ? (
          
        ) : (
          
        )} */}
      </div>
    </header>
  );
};
export default Header;
