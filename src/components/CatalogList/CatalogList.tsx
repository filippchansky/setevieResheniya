import React from 'react'
import { IProduct } from '../../models';
import ProductCard from '../ProductCard/ProductCard';
import style from "./style.module.css"

interface IProps {
    productArr: IProduct[]
}

const CatalogList:React.FC<IProps> = ({productArr}) => {

    return (
        <div className={style.list}>
            {productArr.map(item => (
                <ProductCard key={item.id} data={item}/>
            ))}
        </div>
    )
}
export default CatalogList;