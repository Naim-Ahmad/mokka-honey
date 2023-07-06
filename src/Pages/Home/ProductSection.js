import React from "react";
import Section from "../../Components/Section";
import style from '../../Styles/productItem.module.css';

import { NavLink } from "react-router-dom";
import ProductItem from "../../Components/ProductItem";
import productList from "../../Data/productList";


const checkPackedItems = JSON.parse(localStorage.getItem('packed'));
const packedItems = checkPackedItems ? checkPackedItems : [];
const packed = packedItems

export default function ProductSection() {
    const handleClick = event => {
        productList.forEach(product => {
            if (product.id == event.target.id) {
                packed.push(product)
            }
        })
        const packedJson = JSON.stringify(packed)
        localStorage.setItem('packed', packedJson)
        window.location.reload()
    }

    return (
        <Section classSec={''} container={''}>
            <h1 className="text-center mb-5 common-color fw-bolder">আমাদের পণ্য সামগ্রী</h1>
            <div className={`${style.productItem} d-flex gap-4 justify-content-center`}>
               {productList.map(product=>{
                if(product.id > 3) {
                    return
                }else{
                    return <ProductItem key={product.id} {...product} onClickHandler={handleClick}/>
                }
               })}
            </div>
            <NavLink to="/Products/AllProducts" className={style.myBtn}>সমস্ত পণ্য দেখুন</NavLink>
        </Section>
    )
}
