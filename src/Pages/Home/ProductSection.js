import React from "react";

import Section from "../../Components/Section";
import style from '../../Styles/productItem.module.css';

import { NavLink } from "react-router-dom";
import ProductItem from "../../Components/ProductItem";
import productList from "../../Data/productList";

export default function ProductSection(){
    return (
        <Section classSec={''} container={''}>
            <h1 className="text-center mb-5 common-color fw-bolder">আমাদের পণ্য সামগ্রী</h1>
            <div className={`${style.productItem} d-flex gap-4 justify-content-center`}>
               {productList.map(product=>{
                if(product.id > 3) {
                    return
                }else{
                    return <ProductItem key={product.id} {...product}/>
                }
               })}
            </div>
            <NavLink to="/Products/AllProducts" className={style.myBtn}>সমস্ত পণ্য দেখুন</NavLink>
        </Section>
    )
}
