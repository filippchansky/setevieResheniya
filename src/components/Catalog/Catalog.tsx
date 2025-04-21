import React from 'react';
import style from './style.module.css';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import { IProduct } from '../../models';
import CatalogList from '../CatalogList/CatalogList';

const products:IProduct[] = [
    {
        id: 0,
        description: 'Здесь будет описание товара. У некоторых товаров описание может быть коротким, а у некоторых - длинным.',
        price: 190,
        size: 'double',
        title: 'Товар 1',
        vegan: false,
        icon: 'icons/productIcon.png'
    },
    {
        id: 1,
        description: 'Здесь будет описание товара. У некоторых товаров описание может быть коротким, а у некоторых - длинным.',
        price: 190,
        size: 'double',
        title: 'Товар 2',
        vegan: true,
        icon: 'icons/productIcon.png'
    },
    {
        id: 2,
        description: 'Здесь будет описание товара. У некоторых товаров описание может быть коротким, а у некоторых - длинным.',
        price: 190,
        size: 'double',
        title: 'Товар 3',
        vegan: true,
        icon: 'icons/productIcon.png'
    },
    {
        id: 3,
        description: 'Здесь будет описание товара. У некоторых товаров описание может быть коротким, а у некоторых - длинным.',
        price: 190,
        size: 'double',
        title: 'Товар 4',
        vegan: true,
        icon: 'icons/productIcon.png'
    },
]

const Catalog: React.FC = () => {
  return (
    <main className={style.main}>
      <div className={style.container}>
        <Breadcrumbs routes={['Главная', 'Меню', 'Категория товаров']} />
        <h1 className={style.title}>Название категории</h1>
        <CatalogList productArr={products}/>
      </div>
    </main>
  );
};
export default Catalog;
