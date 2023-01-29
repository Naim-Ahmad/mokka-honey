import React from 'react'
import imageHeader from '../../Assets/sundorbon.jpg'
import HeaderAll from '../../Components/HeaderAll'
import ProductItem from '../../Components/ProductItem'
import Section from '../../Components/Section'
import productList from '../../Data/productList'

export default function Oil() {
  return (
    <>
        <HeaderAll imageUrl={imageHeader}>
            তেল সমূহ 
        </HeaderAll>
        <Section classSec={'sec-p'} container="container">
            <div className='mb-5'>
              <h1 className='fw-bold text-center text-warning mb-3'>কালোজিরার তেলের গুনাগুণ </h1>
              <p className='fs-4 text-center'>কালোজিরা তৈল সেবনে রক্ত পরিষ্কার করে,রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি করে,,, চুল, দাড়ি,উঠে যাওয়া,সাদা হয়ে যাওয়া রোগীদের জন্য আশ্চর্যজনক। </p>
            </div>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              {productList.map(product=>{
                if(product.type === 'oil'){
                  return <ProductItem key={product.id} {...product}/>
                }
              })}
            </div>
        </Section>
    </>
  )
}
