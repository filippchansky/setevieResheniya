import React from 'react';
import style from './style.module.css';

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <button className={style.logo}>
          <p className={style.logoText}>Лого</p>
        </button>
        <div className={style.basketSection}>
          <div className={style.numberSection}>
            <p className={style.number}>
              +7 (812) <span>944-44909</span>
            </p>
          </div>
          <div className={style.basket}>
            <img src='icons/basket.svg' width={34} height={34} alt='корзина' />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
