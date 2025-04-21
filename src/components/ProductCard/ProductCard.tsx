import React from 'react';
import { IProduct } from '../../models';
import style from './style.module.css';

interface IProps {
  data: IProduct;
}

const ProductCard: React.FC<IProps> = ({ data }) => {
  return (
    <div className={style.card}>
      <div className={style.logoSection}>
        <img className={style.logo} src={data.icon} width={305} height={205} alt='Иконка товара' />
        {data.vegan && (
            <img className={style.veganIcon} src="icons/vegan.svg" alt="Без глютена" />
        )}
      </div>
      <div className={style.textSection}>
        <h2 className={style.title}>{data.title}</h2>
        <p className={style.description}>{data.description}</p>
      </div>
      <div className={style.type}>
        <button
          className={
            data.size === 'standart' ? [style.typeBtn, style.active].join(' ') : style.typeBtn
          }
        >
          Стандарт
        </button>
        <button
          className={
            data.size === 'double' ? [style.typeBtn, style.active].join(' ') : style.typeBtn
          }
        >
          Двойной
        </button>
      </div>
      <div className={style.orderSection}>
        <p className={style.price}>{data.price} ₽</p>
        <button className={style.orderBtn}>Заказать</button>
      </div>
    </div>
  );
};
export default ProductCard;
